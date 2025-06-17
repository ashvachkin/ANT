import { isAxiosError, HttpStatusCode, InternalAxiosRequestConfig } from 'axios';

import { useAuthStore } from '~/store/auth.store';

import { Api, HttpClient } from './artifacts/generated';

interface ErrorDetails {
  statusCode: number;
  message: string | string[];
  error?: string;
}

export const baseApi = new Api(
  new HttpClient({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
  }),
);

export const api = new Api(
  new HttpClient({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
  }),
);

let refreshPromise: Promise<void> | null = null;

const refreshTokens = async (): Promise<void> => {
  try {
    const accessToken = await baseApi.iam.authenticationControllerRefreshToken();
    useAuthStore.getState().setAccessToken(accessToken);
  } catch (err) {
    useAuthStore.getState().clearAuth();
    return Promise.reject(err);
  }
};

const reqInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { accessToken } = useAuthStore.getState();
  if (config.headers && accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
};

const resInterceptor = async (error: unknown): Promise<unknown> => {
  if (!isAxiosError<ErrorDetails>(error) || !error.response || !error.config) {
    return Promise.reject(error);
  }

  const status = error.response.status;
  const originalRequest = error.config as InternalAxiosRequestConfig & {
    _retry?: boolean;
  };

  if (status === HttpStatusCode.Unauthorized && !originalRequest._retry) {
    originalRequest._retry = true;

    if (refreshPromise === null) {
      refreshPromise = refreshTokens();
    }

    try {
      await refreshPromise;
      return await api.http.instance.request(originalRequest);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    } finally {
      refreshPromise = null;
    }
  }

  return Promise.reject(error);
};

// Навешиваем interceptors на основной instance
api.http.instance.interceptors.request.use(reqInterceptor);
api.http.instance.interceptors.response.use((response) => response, resInterceptor);

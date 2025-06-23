import { AxiosError, AxiosRequestConfig, isAxiosError } from 'axios';

import { useAuthStore } from '~/store/auth.store';

import { ROUTES } from '../constants/routes';
import { Api } from './artifacts/generated';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export const api = new Api({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export const apiInstance = api.instance;

// === REQUEST INTERCEPTOR ===
apiInstance.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();

  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// === RESPONSE INTERCEPTOR ===
apiInstance.interceptors.response.use(
  (response) => response,
  async (error: unknown) => {
    if (!isAxiosError(error)) {
      return Promise.reject(error);
    }

    const axiosError = error as AxiosError;
    const originalRequest = axiosError.config as CustomAxiosRequestConfig | undefined;

    if (!originalRequest || !originalRequest.url) {
      return Promise.reject(error);
    }

    const isAuthRequest =
      originalRequest.url.includes('/iam/sign-in') ||
      originalRequest.url.includes('/iam/refresh-tokens');

    if (isAuthRequest) {
      return Promise.reject(error);
    }

    if (axiosError.response?.status === 403) {
      window.location.href = ROUTES.ERROR403;
    }

    if (axiosError.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { setAccessToken } = useAuthStore.getState();

        const newAccessToken = await api.iam.authenticationControllerRefreshToken();

        setAccessToken(newAccessToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        }

        apiInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

        return apiInstance(originalRequest);
      } catch (refreshError) {
        const { clearAuth } = useAuthStore.getState();
        clearAuth();
        window.location.href = ROUTES.LOGIN;
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

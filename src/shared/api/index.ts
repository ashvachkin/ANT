import { useAuthStore } from '~/store/auth.store';

import { ROUTES } from '../constants/routes';
import { Api, HttpClient } from './artifacts/generated';

const http = new HttpClient({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

let isRefreshing = false;
let subscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
  subscribers.forEach((cb) => cb(token));
  subscribers = [];
};

const addSubscriber = (cb: (token: string) => void) => {
  subscribers.push(cb);
};

http.instance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const newAccessToken = await api.iam.authenticationControllerRefreshToken();
          useAuthStore.getState().setAccessToken(newAccessToken);
          onRefreshed(newAccessToken);
        } catch (e) {
          useAuthStore.getState().clearAccessToken();
          window.location.replace(ROUTES.HOME);
          return Promise.reject(e);
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise((resolve) => {
        addSubscriber((token: string) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(http.instance(originalRequest));
        });
      });
    }

    return Promise.reject(error);
  },
);

export const api = new Api(http) as InstanceType<typeof Api>;

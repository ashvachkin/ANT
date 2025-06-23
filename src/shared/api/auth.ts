import { useAuthStore } from '~/store/auth.store';

import { api } from '.';
import { ROUTES } from '../constants/routes';
import { SignInDto } from './artifacts/generated';

interface ErrorDetails {
  statusCode: number;
  message: string | string[];
  error?: string;
}

export const login = async (data: SignInDto): Promise<void> => {
  try {
    const accessToken: string = await api.iam.authenticationControllerSignIn(data);
    useAuthStore.getState().setAccessToken(accessToken);
  } catch (error) {
    const err = error as { response?: { data?: ErrorDetails } };
    const message = err.response?.data?.message || 'Не удалось выполнить вход';
    throw new Error(typeof message === 'string' ? message : message.join(', '));
  }
};

export const logout = async (): Promise<void> => {
  try {
    await api.iam.authenticationControllerLogout();
  } catch {
    // игнорируем ошибки выхода
  }

  useAuthStore.getState().clearAuth();
  window.location.replace(ROUTES.HOME);
};

export const isAuthenticated = (): boolean => {
  return !!useAuthStore.getState().accessToken;
};

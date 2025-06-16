import { useAuthStore } from '~/store/auth.store';

import { ROUTES } from '../constants/routes';
import { SignInDto } from './artifacts/generated';
import { api } from './index';

export const login = async (data: SignInDto) => {
  const token = await api.iam.authenticationControllerSignIn(data);
  useAuthStore.getState().setAccessToken(token);
  return token;
};

export const logout = () => {
  useAuthStore.getState().clearAccessToken();
  window.location.href = ROUTES.HOME;
};

export const isAuthenticated = () => {
  return !!useAuthStore.getState().accessToken;
};

import axios, { AxiosError } from 'axios';

const API = axios.create({
  baseURL: '/api',
});

export const setToken = (token: string) => {
  if (!token) {
    throw new Error('Token is required');
  }
  localStorage.setItem('token', token);
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const removeToken = () => {
  localStorage.removeItem('token');
  delete API.defaults.headers.common['Authorization'];
};

export const isAuthenticated = () => {
  return !!getToken();
};

export const signUp = async (data: {
  email: string;
  password: string;
  role: 'student' | 'mentor' | 'admin';
  firstname: string;
  lastname: string;
}) => {
  const response = await API.post('/iam/sign-up', data);
  return response.data;
};

export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await API.post('/iam/sign-in', data);

    const token = response.data;

    if (typeof token === 'string') {
      setToken(token);
      return { token };
    }

    throw new Error('Invalid response format');
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;

    const message = error.response?.data?.message || error.message || 'Произошла ошибка при входе';

    throw new Error(message);
  }
};

import { apiClient } from '@/api/client';
import { AuthTokens, User } from '@/types/auth';

export const AuthService = {
  login: (payload: { email: string; password: string }) =>
    apiClient.post<{ user: User; token: AuthTokens['accessToken'] }>('/auth/login', payload),
  register: (payload: { name: string; email: string; password: string }) =>
    apiClient.post<{ user: User; token: AuthTokens['accessToken'] }>('/auth/register', payload),
  logout: () => apiClient.post('/auth/logout'),
  me: () => apiClient.get<{ user: User }>('/auth/me')
};

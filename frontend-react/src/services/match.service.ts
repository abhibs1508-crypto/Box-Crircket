import { apiClient } from '@/api/client';

export const MatchService = {
  list: () => apiClient.get('/match'),
  getById: (id: string) => apiClient.get('/match/' + id)
};

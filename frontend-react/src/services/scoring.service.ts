import { apiClient } from '@/api/client';

export const ScoringService = {
  list: () => apiClient.get('/scoring'),
  getById: (id: string) => apiClient.get('/scoring/' + id)
};

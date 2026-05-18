import { apiClient } from '@/api/client';

export const TournamentService = {
  list: () => apiClient.get('/tournament'),
  getById: (id: string) => apiClient.get('/tournament/' + id)
};

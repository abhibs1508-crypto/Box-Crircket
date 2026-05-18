import { apiClient } from '@/api/client';

export const BookingService = {
  list: () => apiClient.get('/booking'),
  getById: (id: string) => apiClient.get('/booking/' + id)
};

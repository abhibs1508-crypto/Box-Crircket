export interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: { page: number; per_page: number; total: number };
}

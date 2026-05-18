export type UserRole = 'super_admin' | 'turf_owner' | 'operator' | 'player_user';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface AuthTokens {
  accessToken: string;
}

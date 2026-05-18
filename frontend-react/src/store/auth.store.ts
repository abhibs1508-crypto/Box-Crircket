import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthService } from '@/services/auth.service';
import { User } from '@/types/auth';

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      login: async (email, password) => {
        set({ loading: true });
        const { data } = await AuthService.login({ email, password });
        set({ user: data.user, token: data.token, loading: false });
      },
      register: async (name, email, password) => {
        set({ loading: true });
        const { data } = await AuthService.register({ name, email, password });
        set({ user: data.user, token: data.token, loading: false });
      },
      logout: async () => {
        try { await AuthService.logout(); } finally { set({ user: null, token: null, loading: false }); }
      }
    }),
    { name: 'criccombo-auth' }
  )
);

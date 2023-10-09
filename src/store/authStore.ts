import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthStateInterface } from '../types/auth';

const useAuthStore = create(
  persist<AuthStateInterface>(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      logout: () => set({ token: null }),
    }),
    {
      name: 'auth-token',
    },
  ),
);

export default useAuthStore;

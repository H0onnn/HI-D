import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface AuthStateInterface {
  token: string | null;
  actions: AuthActionsInterface;
}

interface AuthActionsInterface {
  setToken: (token: string | null) => void;
  logout: () => void;
}

const useAuthStore = create(
  persist<AuthStateInterface>(
    (set) => ({
      token: null,
      actions: {
        setToken: (token) => set({ token }),
        logout: () => set({ token: null }),
      },
    }),
    {
      name: 'auth-token',
    },
  ),
);

export const useAuthToken = () => useAuthStore((state) => state.token);

export const useAuthActions = () => useAuthStore((state) => state.actions);

export default useAuthStore;

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
interface AuthStateInterface {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
}

const useAuthStore = create(
  persist<AuthStateInterface>(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      logout: () => set({ token: null }),
    }),
    {
      name: 'auth-token',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export const useAuthToken = () => useAuthStore((state) => state.token);
export const useSetAuthToken = () => useAuthStore((state) => state.setToken);
export const useLogout = () => useAuthStore((state) => state.logout);

export default useAuthStore;

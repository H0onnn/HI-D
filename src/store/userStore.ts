import { create } from 'zustand';
import { UserDataInterface } from '@/types/user';

interface UserStateInterface {
  user: UserDataInterface | null;
  setUser: (user: UserDataInterface | null) => void;
}

const useUserStore = create<UserStateInterface>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserStore;

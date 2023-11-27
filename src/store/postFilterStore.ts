import { create } from 'zustand';

interface PostFilterStateInterface {
  filter: {
    sortBy: string;
    direction: string;
  };
  major: string;
}
interface PostFilterActionsInterface {
  setFilter: (newFilter: { sortBy: string; direction: string }) => void;
  setMajor: (newMajor: string) => void;
}

const usePostFilterStore = create<PostFilterStateInterface & PostFilterActionsInterface>((set) => ({
  filter: {
    sortBy: 'createAt',
    direction: 'DESC',
  },
  major: '',
  setFilter: (newFilter) => set(() => ({ filter: newFilter })),
  setMajor: (newMajor) => set(() => ({ major: newMajor })),
}));

export default usePostFilterStore;

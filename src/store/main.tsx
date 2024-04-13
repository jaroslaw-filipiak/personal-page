import { create } from 'zustand';

interface MainStore {
  isMenuOpen: boolean;

  toggleMenu: () => void;
}

export const useMainStore = create<MainStore>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

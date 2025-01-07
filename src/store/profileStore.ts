import { create } from 'zustand';
import { ProfileUpdateData } from '../types/profile';

interface ProfileStore {
  profiles: Record<string, ProfileUpdateData>;
  updateProfile: (id: string, data: Partial<ProfileUpdateData>) => void;
  getProfile: (id: string) => ProfileUpdateData | undefined;
}

export const useProfileStore = create<ProfileStore>((set, get) => ({
  profiles: {},
  updateProfile: (id, data) => {
    set((state) => ({
      profiles: {
        ...state.profiles,
        [id]: {
          ...state.profiles[id],
          ...data,
        },
      },
    }));
  },
  getProfile: (id) => get().profiles[id],
}));
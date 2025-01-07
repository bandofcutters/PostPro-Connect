import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FreelancerProfile } from '../types/freelancer';

interface FavoritesState {
  favorites: Record<string, FreelancerProfile>;
  addFavorite: (profile: FreelancerProfile) => void;
  removeFavorite: (profileId: string) => void;
  isFavorite: (profileId: string) => boolean;
  getFavoritesByRole: (role: string) => FreelancerProfile[];
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: {},
      addFavorite: (profile) => 
        set((state) => ({
          favorites: { ...state.favorites, [profile.id]: profile }
        })),
      removeFavorite: (profileId) =>
        set((state) => {
          const { [profileId]: removed, ...rest } = state.favorites;
          return { favorites: rest };
        }),
      isFavorite: (profileId) => !!get().favorites[profileId],
      getFavoritesByRole: (role) => 
        Object.values(get().favorites).filter(profile => 
          role ? profile.role === role : true
        )
    }),
    {
      name: 'favorites-storage'
    }
  )
);
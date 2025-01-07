import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  rate: number;
  startDate: string;
  status: string;
}

interface FavoriteJobsState {
  favoriteJobs: Record<string, Job>;
  addFavoriteJob: (job: Job) => void;
  removeFavoriteJob: (jobId: string) => void;
  isFavoriteJob: (jobId: string) => boolean;
}

export const useFavoriteJobsStore = create<FavoriteJobsState>()(
  persist(
    (set, get) => ({
      favoriteJobs: {},
      addFavoriteJob: (job) => 
        set((state) => ({
          favoriteJobs: { ...state.favoriteJobs, [job.id]: job }
        })),
      removeFavoriteJob: (jobId) =>
        set((state) => {
          const { [jobId]: removed, ...rest } = state.favoriteJobs;
          return { favoriteJobs: rest };
        }),
      isFavoriteJob: (jobId) => !!get().favoriteJobs[jobId]
    }),
    {
      name: 'favorite-jobs-storage'
    }
  )
);
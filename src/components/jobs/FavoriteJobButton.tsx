import React from 'react';
import { Heart } from 'lucide-react';
import { useFavoriteJobsStore } from '../../store/favoriteJobsStore';
import { toast } from 'react-hot-toast';

interface Props {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    rate: number;
    startDate: string;
    status: string;
  };
}

export function FavoriteJobButton({ job }: Props) {
  const { addFavoriteJob, removeFavoriteJob, isFavoriteJob } = useFavoriteJobsStore();
  const isFavorited = isFavoriteJob(job.id);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation
    if (isFavorited) {
      removeFavoriteJob(job.id);
      toast.success('Removed from favorite jobs');
    } else {
      addFavoriteJob(job);
      toast.success('Added to favorite jobs');
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`p-2 rounded-full transition-colors ${
        isFavorited 
          ? 'text-[#FF385C] bg-red-50 hover:bg-red-100' 
          : 'text-gray-400 hover:text-[#FF385C] hover:bg-red-50'
      }`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart className={`w-6 h-6 ${isFavorited ? 'fill-current' : ''}`} />
    </button>
  );
}
import React from 'react';
import { Heart } from 'lucide-react';
import { useFavoritesStore } from '../../store/favoritesStore';
import { FreelancerProfile } from '../../types/freelancer';
import { toast } from 'react-hot-toast';

interface Props {
  profile: FreelancerProfile;
}

export function FavoriteButton({ profile }: Props) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const isFavorited = isFavorite(profile.id);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(profile.id);
      toast.success('Removed from favorites');
    } else {
      addFavorite(profile);
      toast.success('Added to favorites');
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
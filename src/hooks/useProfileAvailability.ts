import { useState, useEffect } from 'react';
import { ProfileUpdateData } from '../types/profile';
import { useProfileStore } from '../store/profileStore';

interface UseProfileAvailabilityReturn {
  availability: ProfileUpdateData['availability'];
  isLoading: boolean;
  error: Error | null;
}

export function useProfileAvailability(profileId: string | undefined): UseProfileAvailabilityReturn {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const getProfile = useProfileStore((state) => state.getProfile);
  const profile = profileId ? getProfile(profileId) : undefined;

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return {
    availability: profile?.availability || { from: undefined, to: undefined },
    isLoading,
    error,
  };
}
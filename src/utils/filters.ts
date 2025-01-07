import { FreelancerProfile } from '../types/freelancer';
import { isWithinInterval } from 'date-fns';

interface FilterOptions {
  role: string;
  location: string;
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
}

export function filterProfiles(
  profiles: FreelancerProfile[],
  filters: FilterOptions
): FreelancerProfile[] {
  return profiles.filter((profile) => {
    // Filter by role
    if (filters.role && profile.role !== filters.role) {
      return false;
    }

    // Filter by location
    if (filters.location && profile.location !== filters.location) {
      return false;
    }

    // Filter by date range
    if (filters.dateRange.from && filters.dateRange.to && profile.availability?.length > 0) {
      const hasAvailability = profile.availability.some((block) =>
        isWithinInterval(filters.dateRange.from!, {
          start: block.startDate,
          end: block.endDate
        }) &&
        isWithinInterval(filters.dateRange.to!, {
          start: block.startDate,
          end: block.endDate
        })
      );
      if (!hasAvailability) {
        return false;
      }
    }

    return true;
  });
}
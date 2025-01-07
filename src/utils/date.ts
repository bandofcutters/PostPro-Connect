import { format } from 'date-fns';
import { AvailabilityBlock } from '../types/freelancer';

export function formatAvailabilityDate(availability: AvailabilityBlock): string {
  return `${format(availability.startDate, 'MMM d')} - ${format(availability.endDate, 'MMM d')}`;
}
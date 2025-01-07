import React from 'react';
import { AvailabilityCalendar } from './AvailabilityCalendar';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import { useProfileAvailability } from '../../hooks/useProfileAvailability';

export function ProfileAvailability() {
  const { id } = useParams();
  const { availability, isLoading } = useProfileAvailability(id);
  const [isHovered, setIsHovered] = React.useState(false);

  if (isLoading) {
    return <div className="animate-pulse bg-gray-100 h-24 rounded-lg" />;
  }

  if (!availability?.length) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-3">
        <div className="flex items-center gap-2 mb-3">
          <CalendarIcon className="w-4 h-4 text-gray-400" />
          <h2 className="text-base font-semibold">Availability</h2>
        </div>
        <p className="text-sm text-gray-500">Not available</p>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-sm p-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 mb-3">
        <CalendarIcon className="w-4 h-4 text-emerald-500" />
        <h2 className="text-base font-semibold">Availability</h2>
      </div>
      
      <div className="space-y-2">
        {availability.map((range) => (
          <div
            key={range.id}
            className="flex items-center gap-2 text-emerald-500 bg-emerald-50 px-2 py-1.5 rounded-full text-xs"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <p className="font-medium">
              Available {format(range.from!, 'MMM d')} - {format(range.to!, 'MMM d')}
            </p>
          </div>
        ))}
      </div>

      <div 
        className={`max-w-[420px] mx-auto overflow-hidden transition-all duration-300 ease-in-out ${
          isHovered ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <AvailabilityCalendar availabilityRanges={availability} />
      </div>
      
      {!isHovered && (
        <p className="text-xs text-center text-gray-500 mt-2">
          Hover to view calendar
        </p>
      )}
    </div>
  );
}
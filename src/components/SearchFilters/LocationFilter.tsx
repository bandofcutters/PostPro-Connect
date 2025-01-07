import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationFilterProps {
  location: string;
  onLocationChange: (value: string) => void;
}

const cities = [
  'Toronto',
  'New York',
  'Los Angeles',
  'London',
  'Vancouver'
];

export function LocationFilter({ location, onLocationChange }: LocationFilterProps) {
  return (
    <div className="flex-1 px-6 border-r border-gray-200 relative flex flex-col justify-center">
      <label className="block text-xs font-semibold text-gray-700">Where</label>
      <div className="flex items-center gap-2">
        <MapPin className="w-3 h-3 text-gray-500" />
        <select
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm text-gray-900"
        >
          <option value="">Select location</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
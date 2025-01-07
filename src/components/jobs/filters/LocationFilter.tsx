import React from 'react';
import { MapPin } from 'lucide-react';
import { locations } from '../../../data/locations';

interface LocationFilterProps {
  selectedLocation: string;
  onChange: (location: string) => void;
}

export function LocationFilter({ selectedLocation, onChange }: LocationFilterProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
      <div className="relative">
        <MapPin className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <select
          value={selectedLocation}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none bg-white"
        >
          <option value="">All Locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
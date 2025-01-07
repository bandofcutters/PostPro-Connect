import React from 'react';
import { Search } from 'lucide-react';
import { LocationFilter } from './LocationFilter';
import { DateFilter } from './DateFilter';
import { RoleFilter } from './RoleFilter';
import { RateRangeFilter } from './RateRangeFilter';
import { Role } from '../../types';

interface SearchBarProps {
  selectedRole: Role | '';
  onRoleChange: (role: Role | '') => void;
  location: string;
  onLocationChange: (location: string) => void;
  dateRange: { from: Date | undefined; to: Date | undefined };
  onDateRangeChange: (range: { from: Date | undefined; to: Date | undefined }) => void;
  rate: { min: number; max: number };
  onRateChange: (rate: { min: number; max: number }) => void;
  onSearch: () => void;
}

export function SearchBar({
  selectedRole,
  onRoleChange,
  location,
  onLocationChange,
  dateRange,
  onDateRangeChange,
  rate,
  onRateChange,
  onSearch
}: SearchBarProps) {
  return (
    <div className="bg-white rounded-full shadow-lg border border-gray-200">
      <div className="flex items-stretch h-16">
        <LocationFilter
          location={location}
          onLocationChange={onLocationChange}
        />
        
        <DateFilter
          dateRange={dateRange}
          onDateRangeChange={onDateRangeChange}
        />
        
        <RoleFilter
          selectedRole={selectedRole}
          onRoleChange={onRoleChange}
        />

        <RateRangeFilter
          rate={rate}
          onChange={onRateChange}
        />

        <div className="px-6 flex items-center">
          <button
            onClick={onSearch}
            className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
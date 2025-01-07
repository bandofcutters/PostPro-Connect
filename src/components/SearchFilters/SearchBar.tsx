import React from 'react';
import { Search } from 'lucide-react';
import { LocationFilter } from './LocationFilter';
import { DateFilter } from './DateFilter';
import { RoleFilter } from './RoleFilter';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
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
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
      <div className="flex items-stretch h-16 mb-6">
        <LocationFilter
          location={location}
          onLocationChange={onLocationChange}
        />        
        <RoleFilter
          selectedRole={selectedRole}
          onRoleChange={onRoleChange}
        />

        <RateRangeFilter
          rate={rate}
          onChange={onRateChange}
        />
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h2 className="text-base font-medium text-gray-700 text-center mb-4">Set a date range you need talent to be available</h2>
        <DayPicker
          mode="range"
          selected={dateRange}
          onSelect={onDateRangeChange}
          numberOfMonths={2}
          className="mx-auto"
        />
      </div>
      
      <div className="flex justify-center mt-6">
        <button
          onClick={onSearch}
          className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-8 py-3 rounded-full flex items-center gap-2 transition-colors text-lg"
        >
          <Search className="w-5 h-5" />
          <span>Search Professionals</span>
        </button>
      </div>
    </div>
  );
}

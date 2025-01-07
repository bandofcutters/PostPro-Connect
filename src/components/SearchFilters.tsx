import React from 'react';
import { DayPicker } from 'react-day-picker';
import { Role } from '../types';
import { Calendar, Search } from 'lucide-react';

interface SearchFiltersProps {
  selectedRole: Role | '';
  setSelectedRole: (role: Role | '') => void;
  dateRange: { from: Date | undefined; to: Date | undefined };
  setDateRange: (range: { from: Date | undefined; to: Date | undefined }) => void;
}

const roles: Role[] = ['Editor', 'Assistant Editor', 'Colorist', 'Sound Designer', 'VFX Artist'];

export function SearchFilters({ selectedRole, setSelectedRole, dateRange, setDateRange }: SearchFiltersProps) {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value as Role)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">All Roles</option>
            {roles.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
          <button
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="w-full p-2 border rounded-md text-left flex items-center justify-between"
          >
            <span>
              {dateRange.from ? dateRange.from.toLocaleDateString() : 'Select dates'}
              {dateRange.to ? ` - ${dateRange.to.toLocaleDateString()}` : ''}
            </span>
            <Calendar className="w-4 h-4" />
          </button>
          
          {isCalendarOpen && (
            <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-md p-4">
              <DayPicker
                mode="range"
                selected={dateRange}
                onSelect={(range) => {
                  setDateRange(range || { from: undefined, to: undefined });
                  setIsCalendarOpen(false);
                }}
              />
            </div>
          )}
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <Search className="w-4 h-4" />
          Search
        </button>
      </div>
    </div>
  );
}
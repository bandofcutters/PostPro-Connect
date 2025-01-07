import React from 'react';
import { RoleFilter } from './filters/RoleFilter';
import { LocationFilter } from './filters/LocationFilter';
import { DateRangeFilter } from './filters/DateRangeFilter';
import { RateRangeFilter } from './filters/RateRangeFilter';

interface JobFiltersProps {
  filters: {
    role: string;
    location: string;
    dateRange: { from: Date | undefined; to: Date | undefined };
    rateRange: { min: number; max: number };
  };
  onFilterChange: (filters: JobFiltersProps['filters']) => void;
}

export function JobFilters({ filters, onFilterChange }: JobFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <RoleFilter
          selectedRole={filters.role}
          onChange={(role) => onFilterChange({ ...filters, role })}
        />
        
        <LocationFilter
          selectedLocation={filters.location}
          onChange={(location) => onFilterChange({ ...filters, location })}
        />
        
        <DateRangeFilter
          dateRange={filters.dateRange}
          onChange={(dateRange) => onFilterChange({ ...filters, dateRange })}
        />
        
        <RateRangeFilter
          rateRange={filters.rateRange}
          onChange={(rateRange) => onFilterChange({ ...filters, rateRange })}
        />
      </div>
    </div>
  );
}
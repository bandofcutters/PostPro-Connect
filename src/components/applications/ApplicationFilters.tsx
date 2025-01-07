import React from 'react';
import { DateRangeFilter } from '../jobs/filters/DateRangeFilter';

interface ApplicationFiltersProps {
  filters: {
    status: string;
    availability: { from: Date | undefined; to: Date | undefined };
  };
  onFilterChange: (filters: ApplicationFiltersProps['filters']) => void;
}

export function ApplicationFilters({ filters, onFilterChange }: ApplicationFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <DateRangeFilter
          dateRange={filters.availability}
          onChange={(availability) => onFilterChange({ ...filters, availability })}
        />
      </div>
    </div>
  );
}
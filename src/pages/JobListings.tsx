import React from 'react';
import { Navbar } from '../components/Navbar';
import { JobListingsGrid } from '../components/jobs/JobListingsGrid';
import { JobFilters } from '../components/jobs/JobFilters';
import { BackButton } from '../components/common/BackButton';

export function JobListingsPage() {
  const [filters, setFilters] = React.useState({
    role: '',
    location: '',
    dateRange: { from: undefined, to: undefined },
    rateRange: { min: 200, max: 1200 }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BackButton />
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Available Jobs</h1>
            <p className="mt-2 text-gray-600">Find your next post-production opportunity</p>
          </div>
        </div>
        <JobFilters filters={filters} onFilterChange={setFilters} />
        <JobListingsGrid filters={filters} />
      </div>
    </div>
  );
}
import React from 'react';
import { JobListingCard } from './JobListingCard';
import { mockJobs } from '../../data/mockJobs';

interface JobListingsGridProps {
  filters: {
    role: string;
    location: string;
    dateRange: { from: Date | undefined; to: Date | undefined };
    rateRange: { min: number; max: number };
  };
}

export function JobListingsGrid({ filters }: JobListingsGridProps) {
  const filteredJobs = mockJobs.filter(job => {
    if (filters.role && job.role !== filters.role) return false;
    if (filters.location && job.location !== filters.location) return false;
    if (filters.rateRange) {
      if (job.rate < filters.rateRange.min || job.rate > filters.rateRange.max) return false;
    }
    return true;
  });

  return (
    <div className="grid grid-cols-1 gap-6 mt-8">
      {filteredJobs.map((job) => (
        <JobListingCard key={job.id} job={job} />
      ))}
    </div>
  );
}
import React from 'react';
import { JobCard } from './JobCard';

const mockJobs = [
  {
    id: '1',
    title: 'Senior Editor for Feature Film',
    role: 'Editor',
    projectType: 'Feature Film',
    location: 'Los Angeles',
    startDate: '2024-04-01',
    duration: '3 months',
    rate: 800,
    status: 'active',
    applicants: 12
  },
  {
    id: '2',
    title: 'Colorist for TV Series',
    role: 'Colorist',
    projectType: 'TV Series',
    location: 'New York',
    startDate: '2024-05-15',
    duration: '6 months',
    rate: 750,
    status: 'active',
    applicants: 8
  }
];

export function JobList() {
  return (
    <div className="space-y-6">
      {mockJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
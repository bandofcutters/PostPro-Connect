import React from 'react';
import { ApplicationCard } from './ApplicationCard';
import { JobApplication } from '../../types/applications';

interface ApplicationsListProps {
  jobId: string;
  applications: JobApplication[];
  filters: {
    status: string;
    availability: { from: Date | undefined; to: Date | undefined };
  };
}

export function ApplicationsList({ applications, filters }: ApplicationsListProps) {
  const filteredApplications = applications.filter(app => {
    if (filters.status && app.status !== filters.status) return false;
    return true;
  });

  return (
    <div className="space-y-6 mt-8">
      {filteredApplications.map((application) => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </div>
  );
}
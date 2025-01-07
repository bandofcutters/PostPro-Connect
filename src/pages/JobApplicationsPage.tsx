import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { BackButton } from '../components/common/BackButton';
import { ApplicationsList } from '../components/applications/ApplicationsList';
import { ApplicationFilters } from '../components/applications/ApplicationFilters';
import { mockApplications } from '../data/mockApplications';

export function JobApplicationsPage() {
  const { id } = useParams();
  const [filters, setFilters] = React.useState({
    status: '',
    availability: { from: undefined, to: undefined }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BackButton label="Back to Job Details" />
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Applications</h1>
            <p className="mt-2 text-gray-600">Review and manage applications for this position</p>
          </div>
        </div>
        <ApplicationFilters filters={filters} onFilterChange={setFilters} />
        <ApplicationsList jobId={id!} filters={filters} applications={mockApplications} />
      </div>
    </div>
  );
}
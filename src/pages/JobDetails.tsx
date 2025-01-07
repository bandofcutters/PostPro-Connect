import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { JobDetailsHeader } from '../components/jobs/details/JobDetailsHeader';
import { JobDescription } from '../components/jobs/details/JobDescription';
import { JobRequirements } from '../components/jobs/details/JobRequirements';
import { JobApplication } from '../components/jobs/details/JobApplication';
import { JobDetailsEdit } from '../components/jobs/details/JobDetailsEdit';
import { mockJobs } from '../data/mockJobs';
import { useAuth } from '../hooks/useAuth';

export function JobDetailsPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const [isEditing, setIsEditing] = React.useState(false);
  const job = mockJobs.find(job => job.id === id);
  const isEmployer = user?.role === 'employer';

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Job not found</h1>
          <p className="mt-2 text-gray-600">The job posting you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isEditing ? (
          <JobDetailsEdit
            job={job}
            onSave={() => setIsEditing(false)}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <JobDetailsHeader 
                job={job}
                isEmployer={isEmployer}
                onEdit={() => setIsEditing(true)}
              />
              <JobDescription job={job} />
              <JobRequirements job={job} />
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <JobApplication job={job} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
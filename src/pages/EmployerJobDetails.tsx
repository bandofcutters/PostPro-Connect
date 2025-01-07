import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { JobDetailsEdit } from '../components/jobs/details/JobDetailsEdit';
import { mockJobs } from '../data/mockJobs';
import { toast } from 'react-hot-toast';

export function EmployerJobDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = mockJobs.find(job => job.id === id);

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

  const handleSave = () => {
    toast.success('Job updated successfully');
    navigate('/dashboard');
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Job Posting</h1>
        <JobDetailsEdit 
          job={job}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}
import React from 'react';
import { Navbar } from '../components/Navbar';
import { JobForm } from '../components/employer/JobForm';

export function CreateJobPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Post a New Job</h1>
        <JobForm />
      </div>
    </div>
  );
}
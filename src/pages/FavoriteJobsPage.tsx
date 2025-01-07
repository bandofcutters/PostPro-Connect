import React from 'react';
import { Navbar } from '../components/Navbar';
import { BackButton } from '../components/common/BackButton';
import { FavoriteJobsList } from '../components/jobs/FavoriteJobsList';

export function FavoriteJobsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BackButton />
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Favorite Jobs</h1>
          <p className="mt-2 text-gray-600">Keep track of jobs you're interested in</p>
        </div>
        <FavoriteJobsList />
      </div>
    </div>
  );
}
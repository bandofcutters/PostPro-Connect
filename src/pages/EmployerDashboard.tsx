import React from 'react';
import { Navbar } from '../components/Navbar';
import { JobList } from '../components/employer/JobList';
import { FavoritesList } from '../components/employer/FavoritesList';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EmployerDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-2 text-gray-600">Manage your jobs and favorite talent</p>
          </div>
          <Link
            to="/jobs/create"
            className="flex items-center gap-2 bg-[#FF385C] text-white px-4 py-2 rounded-full hover:bg-[#E31C5F] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Post New Job
          </Link>
        </div>

        <div className="space-y-12">
          <section>
            <JobList />
          </section>

          <section>
            <FavoritesList />
          </section>
        </div>
      </div>
    </div>
  );
}
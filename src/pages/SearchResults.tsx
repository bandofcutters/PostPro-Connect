import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { SearchResultsGrid } from '../components/search/SearchResultsGrid';
import { mockProfiles } from '../data/mockProfiles';
import { filterProfiles } from '../utils/filters';

export function SearchResultsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const filters = {
    role: searchParams.get('role') || '',
    location: searchParams.get('location') || '',
    dateRange: {
      from: searchParams.get('dateFrom') ? new Date(searchParams.get('dateFrom')!) : undefined,
      to: searchParams.get('dateTo') ? new Date(searchParams.get('dateTo')!) : undefined
    }
  };

  const filteredProfiles = filterProfiles(mockProfiles, filters);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Look Who's Available
          </h1>
          <p className="mt-2 text-gray-600">
            {filteredProfiles.length} top {filters.role || 'post-production'} professionals ready to join your project
          </p>
        </div>
        <SearchResultsGrid profiles={filteredProfiles} />
      </div>
    </div>
  );
}
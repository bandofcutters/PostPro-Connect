import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, DollarSign, MapPin } from 'lucide-react';
import { useFavoriteJobsStore } from '../../store/favoriteJobsStore';
import { format } from 'date-fns';
import { FavoriteJobButton } from './FavoriteJobButton';

export function FavoriteJobsList() {
  const favoriteJobs = useFavoriteJobsStore((state) => Object.values(state.favoriteJobs));

  if (favoriteJobs.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg">
        <p className="text-gray-500">No favorite jobs yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {favoriteJobs.map((job) => (
        <Link
          key={job.id}
          to={`/jobs/${job.id}`}
          className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-600 mt-1">{job.company}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {job.status === 'active' ? 'Active' : 'Closed'}
                </span>
                <FavoriteJobButton job={job} />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(job.startDate), 'MMM d, yyyy')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <DollarSign className="w-4 h-4" />
                <span>${job.rate}/day</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
import React from 'react';
import { Calendar, DollarSign, MapPin, Building } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { FavoriteJobButton } from './FavoriteJobButton';

interface JobListingCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    role: string;
    location: string;
    startDate: string;
    duration: string;
    rate: number;
    description: string;
    status: string;
  };
}

export function JobListingCard({ job }: JobListingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <Building className="w-4 h-4" />
            <span>{job.company}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            New
          </span>
          <FavoriteJobButton job={job} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Starts {format(new Date(job.startDate), 'MMM d, yyyy')}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <DollarSign className="w-4 h-4" />
          <span>${job.rate}/day</span>
        </div>
      </div>

      <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>

      <div className="flex justify-end mt-6">
        <Link
          to={`/jobs/${job.id}`}
          className="px-6 py-2 bg-[#FF385C] text-white rounded-full hover:bg-[#E31C5F] transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
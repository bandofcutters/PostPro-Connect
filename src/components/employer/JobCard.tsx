import React from 'react';
import { Calendar, DollarSign, MapPin, Users } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    role: string;
    projectType: string;
    location: string;
    startDate: string;
    duration: string;
    rate: number;
    status: string;
    applicants: number;
  };
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
          <div className="flex items-center gap-4 mt-2 text-gray-600">
            <span>{job.role}</span>
            <span>•</span>
            <span>{job.projectType}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-sm ${
            job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {job.status === 'active' ? 'Active' : 'Closed'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
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
        <div className="flex items-center gap-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span>{job.applicants} applicants</span>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <Link 
          to={`/employer/jobs/${job.id}`}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          View Details
        </Link>
        <Link 
          to={`/employer/jobs/${job.id}/applications`}
          className="px-4 py-2 bg-[#FF385C] text-white rounded-lg hover:bg-[#E31C5F] transition-colors"
        >
          View Applications
        </Link>
      </div>
    </div>
  );
}
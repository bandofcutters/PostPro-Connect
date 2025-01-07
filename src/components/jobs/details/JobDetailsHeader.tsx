import React from 'react';
import { ArrowLeft, Building, Calendar, DollarSign, MapPin, Edit } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

interface JobDetailsHeaderProps {
  job: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    duration: string;
    rate: number;
  };
  isEmployer: boolean;
  onEdit: () => void;
}

export function JobDetailsHeader({ job, isEmployer, onEdit }: JobDetailsHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-6">
        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Jobs
        </Link>
        
        {isEmployer && (
          <button
            onClick={onEdit}
            className="inline-flex items-center gap-2 text-[#FF385C] hover:text-[#E31C5F]"
          >
            <Edit className="w-4 h-4" />
            Edit Job
          </button>
        )}
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <Building className="w-4 h-4" />
          <span>{job.company}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>
            Starts {format(new Date(job.startDate), 'MMM d, yyyy')}
            <br />
            <span className="text-sm">Duration: {job.duration}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <DollarSign className="w-4 h-4" />
          <span>${job.rate}/day</span>
        </div>
      </div>
    </div>
  );
}
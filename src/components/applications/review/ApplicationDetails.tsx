import React from 'react';
import { Calendar, MapPin, Star } from 'lucide-react';
import { format } from 'date-fns';
import { JobApplication } from '../../../types/applications';
import { Link } from 'react-router-dom';

interface Props {
  application: JobApplication;
}

export function ApplicationDetails({ application }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start gap-6">
        <img
          src={application.freelancer.imageUrl}
          alt={application.freelancer.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <Link 
                to={`/employer/freelancer/${application.freelancer.id}`}
                className="text-xl font-semibold text-gray-900 hover:text-[#FF385C]"
              >
                {application.freelancer.name}
              </Link>
              <p className="text-gray-600">{application.freelancer.role}</p>
              
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{application.freelancer.location}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Applied {format(new Date(application.appliedAt), 'MMM d, yyyy')}</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{application.freelancer.rating}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Cover Message</h3>
            <p className="text-gray-600 whitespace-pre-line">{application.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
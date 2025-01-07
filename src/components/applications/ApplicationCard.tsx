import React from 'react';
import { Calendar, MapPin, Star } from 'lucide-react';
import { format } from 'date-fns';
import { Link, useParams } from 'react-router-dom';
import { JobApplication } from '../../types/applications';

interface ApplicationCardProps {
  application: JobApplication;
}

export function ApplicationCard({ application }: ApplicationCardProps) {
  const { id } = useParams();
  
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
              <h3 className="text-xl font-semibold text-gray-900">
                {application.freelancer.name}
              </h3>
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
            
            <span className={`px-3 py-1 rounded-full text-sm ${
              application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              application.status === 'accepted' ? 'bg-green-100 text-green-800' :
              'bg-red-100 text-red-800'
            }`}>
              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
            </span>
          </div>

          <p className="mt-4 text-gray-600">{application.message}</p>

          <div className="flex justify-end gap-4 mt-6">
            <Link 
              to={`/employer/freelancer/${application.freelancer.id}`}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              View Profile
            </Link>
            <Link
              to={`/employer/jobs/${id}/applications/${application.id}`}
              className="px-4 py-2 bg-[#FF385C] text-white rounded-lg hover:bg-[#E31C5F]"
            >
              Review Application
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
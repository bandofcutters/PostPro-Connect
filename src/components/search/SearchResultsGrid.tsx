import React from 'react';
import { Link } from 'react-router-dom';
import { FreelancerProfile } from '../../types/freelancer';
import { Calendar, MapPin } from 'lucide-react';
import { formatAvailabilityDate } from '../../utils/date';

interface SearchResultsGridProps {
  profiles: FreelancerProfile[];
}

export function SearchResultsGrid({ profiles }: SearchResultsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {profiles.map((profile) => (
        <Link
          key={profile.id}
          to={`/employer/freelancer/${profile.id}`}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
        >
          <div className="aspect-w-4 aspect-h-3">
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900">{profile.name}</h3>
            <p className="text-sm text-gray-600">{profile.role}</p>
            
            <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>
            
            {profile.availability?.length > 0 && (
              <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{formatAvailabilityDate(profile.availability[0])}</span>
              </div>
            )}
            
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{profile.bio}</p>
            
            <div className="mt-3 flex flex-wrap gap-1">
              {profile.skills.slice(0, 2).map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                >
                  {skill}
                </span>
              ))}
              {profile.skills.length > 2 && (
                <span className="px-2 py-1 text-xs text-gray-500">
                  +{profile.skills.length - 2} more
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
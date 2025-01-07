import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { FreelancerProfile } from '../../types/freelancer';
import { ProfileAvailability } from './ProfileAvailability';
import { FreelancerDashboardLinks } from './FreelancerDashboardLinks';
import { FavoriteButton } from './FavoriteButton';

interface Props {
  profile: FreelancerProfile;
}

export function ProfileHeader({ profile }: Props) {
  const { id } = useParams();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start gap-6">
        <div className="shrink-0 flex flex-col items-center gap-4">
          <img
            src={profile.imageUrl}
            alt={profile.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <Link
            to={`/profile/${id}/edit`}
            className="block w-full bg-[#FF385C] text-white px-6 py-2 rounded-full hover:bg-[#E31C5F] transition-colors text-center"
          >
            Update Profile
          </Link>
          <FreelancerDashboardLinks profileId={id!} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-lg text-gray-600">{profile.role}</p>
                <span className="text-lg font-semibold text-[#FF385C]">${profile.hourlyRate}/hr</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FavoriteButton profile={profile} />
              <div className="ml-6 w-[500px]">
                <ProfileAvailability />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
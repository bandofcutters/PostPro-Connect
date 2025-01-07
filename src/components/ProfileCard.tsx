import React from 'react';
import { Profile } from '../types';
import { Calendar } from 'lucide-react';

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={profile.avatar}
        alt={profile.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{profile.name}</h3>
        <p className="text-sm text-gray-600">{profile.role}</p>
        
        <div className="mt-2 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span className="text-sm">Check Availability</span>
        </div>
        
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">{profile.bio}</p>
        
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
}
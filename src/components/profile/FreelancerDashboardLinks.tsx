import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Heart } from 'lucide-react';

interface Props {
  profileId: string;
}

export function FreelancerDashboardLinks({ profileId }: Props) {
  return (
    <div className="flex gap-4">
      <Link
        to="/jobs"
        className="flex items-center gap-2 border border-[#FF385C] text-[#FF385C] px-4 py-2 rounded-full hover:bg-red-50 transition-colors"
      >
        <Briefcase className="w-4 h-4" />
        View Job Listings
      </Link>
      <Link
        to="/favorite-jobs"
        className="flex items-center gap-2 border border-[#FF385C] text-[#FF385C] px-4 py-2 rounded-full hover:bg-red-50 transition-colors"
      >
        <Heart className="w-4 h-4" />
        Favorite Jobs
      </Link>
    </div>
  );
}
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { UpdateProfileForm } from '../components/profile/UpdateProfileForm';

export function ProfileUpdatePage() {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Update Profile</h1>
          <Link
            to={`/profile/${id}`}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
          >
            View Profile
          </Link>
        </div>
        <UpdateProfileForm />
      </div>
    </div>
  );
}
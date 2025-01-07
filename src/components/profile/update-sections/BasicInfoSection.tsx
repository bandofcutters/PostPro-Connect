import React from 'react';
import { Camera } from 'lucide-react';
import { locations } from '../../../data/locations';

export function BasicInfoSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
      
      <div className="flex items-start gap-8">
        <div className="shrink-0">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
              <Camera className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option value="Editor">Editor</option>
              <option value="Assistant Editor">Assistant Editor</option>
              <option value="Colorist">Colorist</option>
              <option value="Sound Designer">Sound Designer</option>
              <option value="VFX Artist">VFX Artist</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option value="">Select location</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Daily Rate (USD)
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your daily rate"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg h-32"
              placeholder="Write a brief bio about yourself"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Users, Video } from 'lucide-react';

interface UserRoleProps {
  selectedRole: string;
  onRoleSelect: (role: string) => void;
}

export function UserRole({ selectedRole, onRoleSelect }: UserRoleProps) {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Welcome to PostPro Connect!</h2>
        <p className="text-sm text-gray-600 mt-2">Choose how you'll be using our platform</p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8">
        <button
          type="button"
          onClick={() => onRoleSelect('client')}
          className={`p-6 border rounded-lg text-left hover:border-[#FF385C] transition-colors ${
            selectedRole === 'client' ? 'border-[#FF385C] bg-red-50' : 'border-gray-200'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-[#FF385C] bg-opacity-10 rounded-lg">
              <Users className="w-6 h-6 text-[#FF385C]" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">I'm hiring talent</h3>
              <p className="text-sm text-gray-600 mt-1">
                Find and collaborate with top post-production professionals for your projects
              </p>
              {selectedRole === 'client' && (
                <div className="mt-4 p-4 bg-white rounded-lg border border-[#FF385C] border-opacity-20">
                  <p className="text-sm text-gray-700">
                    Great to have you here! Fill out your information on the next page to start building your dream team. You'll be connected with talented professionals who can bring your vision to life.
                  </p>
                </div>
              )}
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onRoleSelect('freelancer')}
          className={`p-6 border rounded-lg text-left hover:border-[#FF385C] transition-colors ${
            selectedRole === 'freelancer' ? 'border-[#FF385C] bg-red-50' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#FF385C] bg-opacity-10 rounded-lg">
              <Video className="w-6 h-6 text-[#FF385C]" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">I'm a freelancer</h3>
              <p className="text-sm text-gray-600 mt-1">
                Showcase your skills and find exciting post-production opportunities
              </p>
              {selectedRole === 'freelancer' && (
                <div className="mt-4 p-4 bg-white rounded-lg border border-[#FF385C] border-opacity-20">
                  <p className="text-sm text-gray-700">
                    Welcome to our creative community! Complete your profile to showcase your talent and connect with productions looking for your expertise.
                  </p>
                </div>
              )}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
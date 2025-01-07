import React from 'react';

interface Props {
  bio: string;
}

export function ProfileAbout({ bio }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">About</h2>
      <p className="text-gray-600 whitespace-pre-line">{bio}</p>
    </div>
  );
}
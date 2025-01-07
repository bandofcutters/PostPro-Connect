import React from 'react';

interface JobDescriptionProps {
  job: {
    description: string;
  };
}

export function JobDescription({ job }: JobDescriptionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Project Description</h2>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
      </div>
    </div>
  );
}
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { WorkExperience } from '../../types/freelancer';
import { format } from 'date-fns';

interface Props {
  experience: WorkExperience[];
}

export function Experience({ experience }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Experience</h2>
      <div className="space-y-8">
        {experience.map((job) => (
          <div key={job.id} className="relative pl-8 border-l-2 border-gray-200">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FF385C]" />
            <div className="mb-1">
              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
              <div className="text-[#FF385C] font-medium">{job.company}</div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <Calendar className="w-4 h-4" />
              <span>
                {format(new Date(job.startDate), 'MMM yyyy')} - {job.endDate ? format(new Date(job.endDate), 'MMM yyyy') : 'Present'}
              </span>
              <span className="text-gray-400">•</span>
              <span>{job.location}</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {job.highlights.map((highlight, index) => (
                <li key={index} className="pl-2">{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Check } from 'lucide-react';
import { getSkillsByRole } from '../../../data/skills';

interface JobRequirementsProps {
  job: {
    role: string;
    requirements?: string[];
    skills?: string[];
  };
}

export function JobRequirements({ job }: JobRequirementsProps) {
  // Get default skills for the role if no specific skills are provided
  const jobSkills = job.skills || getSkillsByRole(job.role);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h2>
      
      {job.requirements && job.requirements.length > 0 && (
        <div className="space-y-3">
          {job.requirements.map((requirement, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-gray-600">{requirement}</span>
            </div>
          ))}
        </div>
      )}

      {jobSkills.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {jobSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
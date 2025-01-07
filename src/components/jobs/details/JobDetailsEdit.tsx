import React from 'react';
import { RoleRequirements, RoleRequirement } from '../../employer/RoleRequirements';
import { SkillsSelector } from '../../employer/SkillsSelector';
import { JobFormFields } from './JobFormFields';
import { toast } from 'react-hot-toast';

interface JobDetailsEditProps {
  job: {
    id: string;
    title: string;
    company: string;
    projectType: string;
    location: string;
    description: string;
    requirements: string[];
    skills: string[];
    startDate?: string;
    endDate?: string;
  };
  onSave: () => void;
  onCancel: () => void;
}

export function JobDetailsEdit({ job, onSave, onCancel }: JobDetailsEditProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title: job.title,
    projectType: job.projectType,
    location: job.location,
    description: job.description,
    startDate: job.startDate ? new Date(job.startDate) : undefined,
    endDate: job.endDate ? new Date(job.endDate) : undefined
  });
  const [roleRequirements, setRoleRequirements] = React.useState<RoleRequirement[]>([]);
  const [selectedSkills, setSelectedSkills] = React.useState<string[]>(job.skills);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.startDate || !formData.endDate) {
      toast.error('Please select project dates');
      return;
    }

    if (roleRequirements.length === 0) {
      toast.error('Please add at least one role requirement');
      return;
    }

    if (selectedSkills.length === 0) {
      toast.error('Please select at least one required skill');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Job updated successfully');
      onSave();
    } catch (error) {
      toast.error('Failed to update job');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <JobFormFields
          formData={formData}
          onChange={(data) => setFormData(prev => ({ ...prev, ...data }))}
        />

        <div className="mt-8">
          <RoleRequirements
            requirements={roleRequirements}
            onChange={setRoleRequirements}
          />
        </div>

        <div className="mt-8">
          <SkillsSelector
            selectedSkills={selectedSkills}
            onSkillsChange={setSelectedSkills}
            selectedRole={roleRequirements[0]?.role || ''}
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-[#FF385C] text-white rounded-full hover:bg-[#E31C5F] disabled:bg-gray-400"
        >
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}
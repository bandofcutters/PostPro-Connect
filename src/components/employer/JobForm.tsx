import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoleRequirements, RoleRequirement } from './RoleRequirements';
import { SkillsSelector } from './SkillsSelector';
import { toast } from 'react-hot-toast';

export function JobForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [roleRequirements, setRoleRequirements] = React.useState<RoleRequirement[]>([]);
  const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);
  const [formData, setFormData] = React.useState({
    title: '',
    projectType: '',
    location: '',
    projectDetails: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (roleRequirements.length === 0) {
      toast.error('Please add at least one role requirement');
      return;
    }

    if (selectedSkills.length === 0) {
      toast.error('Please select at least one required skill');
      return;
    }

    // Validate dates for each role
    const invalidRoles = roleRequirements.filter(
      req => !req.startDate || !req.endDate || new Date(req.endDate) <= new Date(req.startDate)
    );

    if (invalidRoles.length > 0) {
      toast.error('Please check the dates for all roles');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Submitting job with:', {
        ...formData,
        roleRequirements,
        skills: selectedSkills
      });
      toast.success('Job posted successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to post job');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="e.g., Feature Film Post-Production Team"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Type
            </label>
            <select
              value={formData.projectType}
              onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
              className="w-full px-4 py-2 border rounded-lg"
              required
            >
              <option value="">Select project type</option>
              <option value="Feature Film">Feature Film</option>
              <option value="TV Series">TV Series</option>
              <option value="Documentary">Documentary</option>
              <option value="Commercial">Commercial</option>
              <option value="Music Video">Music Video</option>
            </select>
          </div>

          <RoleRequirements
            requirements={roleRequirements}
            onChange={setRoleRequirements}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Details
            </label>
            <textarea
              value={formData.projectDetails}
              onChange={(e) => setFormData(prev => ({ ...prev, projectDetails: e.target.value }))}
              className="w-full px-4 py-2 border rounded-lg h-32"
              placeholder="Describe the project, genre, style, etc."
              required
            />
          </div>

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
          onClick={() => navigate('/dashboard')}
          className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-[#FF385C] text-white rounded-full hover:bg-[#E31C5F] disabled:bg-gray-400"
        >
          {isSubmitting ? 'Posting...' : 'Post Job'}
        </button>
      </div>
    </form>
  );
}
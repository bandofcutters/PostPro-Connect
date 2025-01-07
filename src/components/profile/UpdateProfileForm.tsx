import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BasicInfoSection } from './update-sections/BasicInfoSection';
import { AvailabilitySection } from './update-sections/AvailabilitySection';
import { SkillsSection } from './update-sections/SkillsSection';
import { DemoReelSection } from './update-sections/DemoReelSection';
import { ExperienceSection } from './update-sections/ExperienceSection';
import { UpdateProfileProvider, useUpdateProfile } from './update-sections/UpdateProfileContext';
import { updateProfile } from '../../utils/profile';
import { toast } from 'react-hot-toast';

function UpdateProfileFormContent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { formData, isSubmitting, setIsSubmitting } = useUpdateProfile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    setIsSubmitting(true);
    try {
      const response = await updateProfile(id, formData);
      if (response.success) {
        toast.success('Profile updated successfully');
        navigate(`/profile/${id}`);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <BasicInfoSection />
      <AvailabilitySection />
      <SkillsSection />
      <DemoReelSection />
      <ExperienceSection />
      
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#FF385C] text-white rounded-full hover:bg-[#E31C5F] disabled:bg-gray-400"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}

export function UpdateProfileForm() {
  return (
    <UpdateProfileProvider>
      <UpdateProfileFormContent />
    </UpdateProfileProvider>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { JobApplication } from '../../../types/applications';
import { toast } from 'react-hot-toast';

interface Props {
  application: JobApplication;
}

export function ApplicationReviewForm({ application }: Props) {
  const navigate = useNavigate();
  const [feedback, setFeedback] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent, status: 'accepted' | 'rejected') => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success(
        status === 'accepted' 
          ? 'Application accepted successfully' 
          : 'Application rejected'
      );
      
      navigate(`/employer/jobs/${application.jobId}/applications`);
    } catch (error) {
      toast.error('Failed to update application');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Review Application</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Feedback (optional)
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg h-32"
            placeholder="Add any feedback or notes..."
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={(e) => handleSubmit(e, 'rejected')}
            disabled={isSubmitting}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(e, 'accepted')}
            disabled={isSubmitting}
            className="px-6 py-2 bg-[#FF385C] text-white rounded-lg hover:bg-[#E31C5F] disabled:bg-gray-400"
          >
            Accept
          </button>
        </div>
      </form>
    </div>
  );
}
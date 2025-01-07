import React from 'react';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface JobApplicationProps {
  job: {
    startDate: string;
    rate: number;
  };
}

export function JobApplication({ job }: JobApplicationProps) {
  const [message, setMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Submitting application:', { message });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 text-gray-600 mb-6">
        <Calendar className="w-4 h-4" />
        <span>Apply before {format(new Date(job.startDate), 'MMM d, yyyy')}</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cover Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg h-32"
            placeholder="Introduce yourself and explain why you're a great fit for this role..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FF385C] text-white px-4 py-2 rounded-lg hover:bg-[#E31C5F] disabled:bg-gray-400 transition-colors"
        >
          {isSubmitting ? 'Submitting...' : 'Apply Now'}
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-500 text-center">
        You'll be notified when the employer responds to your application
      </p>
    </div>
  );
}
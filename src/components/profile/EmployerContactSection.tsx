import React from 'react';
import { Calendar, Mail, Phone, Video } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { FreelancerProfile } from '../../types/freelancer';

interface Props {
  profile: FreelancerProfile;
}

export function EmployerContactSection({ profile }: Props) {
  const [message, setMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Message sent successfully');
      setMessage('');
    } catch (error) {
      toast.error('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-8 space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Contact {profile.name}</h2>
          
          <form onSubmit={handleContact} className="space-y-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your project and requirements..."
              className="w-full px-4 py-2 border rounded-lg h-32"
              required
            />
            
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#FF385C] text-white px-4 py-2 rounded-lg hover:bg-[#E31C5F] disabled:bg-gray-400"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span>Schedule Interview</span>
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Video className="w-4 h-4 text-gray-600" />
              <span>Video Call</span>
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Mail className="w-4 h-4 text-gray-600" />
              <span>Email</span>
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Phone className="w-4 h-4 text-gray-600" />
              <span>Phone Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
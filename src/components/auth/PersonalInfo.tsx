import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PersonalInfoProps {
  formData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    company: string;
  };
  onChange: (data: Partial<typeof formData>) => void;
  onBack: () => void;
}

export function PersonalInfo({ formData, onChange, onBack }: PersonalInfoProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission is handled by parent component
  };

  return (
    <div className="space-y-6">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div>
        <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
        <p className="text-sm text-gray-600 mt-1">Please fill in your details</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company/Studio Name
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => onChange({ company: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Optional"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onChange({ email: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => onChange({ password: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
          required
          minLength={8}
        />
        <p className="mt-1 text-xs text-gray-500">
          Must be at least 8 characters long
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#FF385C] text-white py-2 rounded-lg hover:bg-[#E31C5F] transition-colors disabled:bg-gray-400"
      >
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </button>
    </div>
  );
}
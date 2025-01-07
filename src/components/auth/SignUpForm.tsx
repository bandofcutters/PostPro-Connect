import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserRole } from './UserRole';
import { PersonalInfo } from './PersonalInfo';
import { useAuthStore } from '../../store/authStore';
import { toast } from 'react-hot-toast';

export function SignUpForm() {
  const navigate = useNavigate();
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    role: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    company: ''
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.firstName || !formData.lastName) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const user = {
        id: crypto.randomUUID(),
        email: formData.email,
        role: formData.role === 'client' ? 'employer' : 'freelancer',
        name: `${formData.firstName} ${formData.lastName}`
      };

      useAuthStore.getState().setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      
      toast.success('Account created successfully!');
      navigate('/');
    } catch (error) {
      toast.error('Failed to create account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = step === 1 ? !!formData.role : true;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`h-1 w-1/2 ${step === 1 ? 'bg-[#FF385C]' : 'bg-gray-200'}`} />
          <div className={`h-1 w-1/2 ${step === 2 ? 'bg-[#FF385C]' : 'bg-gray-200'}`} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 ? (
          <UserRole
            selectedRole={formData.role}
            onRoleSelect={(role) => {
              updateFormData({ role });
              setStep(2);
            }}
          />
        ) : (
          <PersonalInfo
            formData={formData}
            onChange={updateFormData}
            onBack={() => setStep(1)}
          />
        )}
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/signin" className="text-[#FF385C] hover:text-[#E31C5F]">
          Sign in
        </Link>
      </div>
    </div>
  );
}
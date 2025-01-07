import React from 'react';
import { Link } from 'react-router-dom';
import { SignInCredentials } from './SignInCredentials';
import { useAuth } from '../../hooks/useAuth';
import toast from 'react-hot-toast';

export function SignInForm() {
  const { signIn, isLoading, error } = useAuth();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    rememberMe: false
  });

  React.useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(formData.email, formData.password, formData.rememberMe);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <SignInCredentials
          formData={formData}
          onChange={(data) => setFormData(prev => ({ ...prev, ...data }))}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#FF385C] text-white py-2 rounded-lg hover:bg-[#E31C5F] transition-colors disabled:bg-gray-400"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="text-[#FF385C] hover:text-[#E31C5F]">
          Sign up
        </Link>
      </div>
    </div>
  );
}
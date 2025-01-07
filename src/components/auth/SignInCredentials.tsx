import React from 'react';
import { Link } from 'react-router-dom';

interface SignInCredentialsProps {
  formData: {
    email: string;
    password: string;
    rememberMe: boolean;
  };
  onChange: (data: Partial<typeof formData>) => void;
}

export function SignInCredentials({ formData, onChange }: SignInCredentialsProps) {
  return (
    <div className="space-y-4">
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
        <div className="flex items-center justify-between mb-1">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Link
            to="/forgot-password"
            className="text-sm text-[#FF385C] hover:text-[#E31C5F]"
          >
            Forgot password?
          </Link>
        </div>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => onChange({ password: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="remember-me"
          checked={formData.rememberMe}
          onChange={(e) => onChange({ rememberMe: e.target.checked })}
          className="h-4 w-4 text-[#FF385C] focus:ring-[#FF385C] border-gray-300 rounded"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-700"
        >
          Remember me
        </label>
      </div>
    </div>
  );
}
import React from 'react';
import { Navbar } from '../components/Navbar';
import { SignInForm } from '../components/auth/SignInForm';

export function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-md mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Welcome back
        </h1>
        <SignInForm />
      </div>
    </div>
  );
}
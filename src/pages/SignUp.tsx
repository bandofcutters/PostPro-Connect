import React from 'react';
import { Navbar } from '../components/Navbar';
import { SignUpForm } from '../components/auth/SignUpForm';

export function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-md mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Create your account
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
}
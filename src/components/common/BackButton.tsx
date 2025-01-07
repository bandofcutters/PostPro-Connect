import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  label?: string;
}

export function BackButton({ label = 'Back' }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </button>
  );
}
import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { BackButton } from '../components/common/BackButton';
import { ApplicationReviewForm } from '../components/applications/review/ApplicationReviewForm';
import { ApplicationDetails } from '../components/applications/review/ApplicationDetails';
import { mockApplications } from '../data/mockApplications';

export function ApplicationReviewPage() {
  const { id, applicationId } = useParams();
  const application = mockApplications.find(app => app.id === applicationId);

  if (!application) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Application not found</h1>
          <p className="mt-2 text-gray-600">The application you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BackButton label="Back to Applications" />
        <div className="space-y-8">
          <ApplicationDetails application={application} />
          <ApplicationReviewForm application={application} />
        </div>
      </div>
    </div>
  );
}
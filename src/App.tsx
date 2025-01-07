import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FreelancerProfilePage } from './pages/FreelancerProfile';
import { ProfileUpdatePage } from './pages/ProfileUpdate';
import { SearchResultsPage } from './pages/SearchResults';
import { SignUpPage } from './pages/SignUp';
import { SignInPage } from './pages/SignIn';
import { EmployerDashboardPage } from './pages/EmployerDashboard';
import { CreateJobPage } from './pages/CreateJob';
import { JobListingsPage } from './pages/JobListings';
import { JobDetailsPage } from './pages/JobDetails';
import { EmployerJobDetailsPage } from './pages/EmployerJobDetails';
import { JobApplicationsPage } from './pages/JobApplicationsPage';
import { ApplicationReviewPage } from './pages/ApplicationReview';
import { FavoriteJobsPage } from './pages/FavoriteJobsPage';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/profile/:id" element={<FreelancerProfilePage />} />
        <Route path="/employer/freelancer/:id" element={<FreelancerProfilePage employerView />} />
        <Route path="/profile/:id/edit" element={<ProfileUpdatePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/dashboard" element={<EmployerDashboardPage />} />
        <Route path="/jobs" element={<JobListingsPage />} />
        <Route path="/jobs/create" element={<CreateJobPage />} />
        <Route path="/jobs/:id" element={<JobDetailsPage />} />
        <Route path="/employer/jobs/:id" element={<EmployerJobDetailsPage />} />
        <Route path="/employer/jobs/:id/applications" element={<JobApplicationsPage />} />
        <Route path="/employer/jobs/:id/applications/:applicationId" element={<ApplicationReviewPage />} />
        <Route path="/favorite-jobs" element={<FavoriteJobsPage />} />
      </Routes>
    </Router>
  );
}
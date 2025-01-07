import { Link } from 'react-router-dom';
import { Film, LayoutDashboard, UserCircle } from 'lucide-react';

export function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Film className="w-8 h-8 text-[#FF385C]" />
            <h1 className="text-2xl font-bold text-gray-900">PostPro Connect</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <LayoutDashboard className="w-4 h-4" />
              Employer Dashboard
            </Link>
            <Link
              to="/profile/1"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <UserCircle className="w-4 h-4" />
              Freelancer Dashboard
            </Link>
            <Link 
              to="/signin" 
              className="text-gray-600 hover:text-gray-900"
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="bg-[#FF385C] text-white px-4 py-2 rounded-full hover:bg-[#E31C5F] transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
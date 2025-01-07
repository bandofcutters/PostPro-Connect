import React from 'react';
import { SearchFilters } from '../components/SearchFilters/SearchFilters';
import { Star, Users, Clock, CheckCircle, Film } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { DayPicker } from 'react-day-picker';
import { Link } from 'react-router-dom';
import 'react-day-picker/dist/style.css';

export function HomePage() {
  const [selectedRole, setSelectedRole] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [dateRange, setDateRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Find Out Who's Available
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Connect with the top post-production professionals ready to join your project
              </p>
            </div>

            <div className="mt-10">
              <SearchFilters
                selectedRole={selectedRole}
                onRoleChange={setSelectedRole}
                location={location}
                onLocationChange={setLocation}
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose PostPro Connect?</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#FF385C] mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
                <p className="text-gray-600">Every freelancer is vetted and verified for quality and experience.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#FF385C] mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
                <p className="text-gray-600">Book talent for specific dates and projects as needed.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#FF385C] mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                <p className="text-gray-600">Protected payments and clear pricing with no hidden fees.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-1 text-[#FF385C] mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-600 mb-4">"Found an amazing colorist for our feature film within hours. The platform made the whole process seamless."</p>
                <p className="font-semibold">- David Chen, Director</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-1 text-[#FF385C] mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-600 mb-4">"As a freelance editor, this platform has connected me with amazing projects and clients. Highly recommended!"</p>
                <p className="font-semibold">- Sarah Johnson, Editor</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#FF385C] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Join thousands of professionals using PostPro Connect</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={scrollToTop}
                className="bg-white text-[#FF385C] px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Find Talent
              </button>
              <Link
                to="/signup"
                className="border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#FF385C] transition-colors"
              >
                Become a Freelancer
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Film className="w-8 h-8 text-[#FF385C]" />
              <h2 className="text-2xl font-bold">PostPro Connect</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="hover:text-gray-300">How it works</Link></li>
                  <li><Link to="#" className="hover:text-gray-300">Testimonials</Link></li>
                  <li><Link to="#" className="hover:text-gray-300">Careers</Link></li>
                  <li><Link to="#" className="hover:text-gray-300">Press</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Community</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="hover:text-gray-300">Blog</Link></li>
                  <li><Link to="#" className="hover:text-gray-300">Forum</Link></li>
                  <li><Link to="#" className="hover:text-gray-300">Events</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="hover:text-gray-300">Help Center</Link></li>
                  <li><Link to="#" className="hover:text-gray-300">Safety</Link></li>
                  <li><Link to="#" className="hover:text-gray-300">Cancellation options</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="hover:text-gray-300">Privacy Policy</Link></li>
                  <li><Link to="#" className="hover:text-gray-300">Terms of Service</Link></li>
                  <li><Link to="#" className="hover:text-gray-300">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} PostPro Connect. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
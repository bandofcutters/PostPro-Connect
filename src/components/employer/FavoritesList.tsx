import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Star } from 'lucide-react';
import { useFavoritesStore } from '../../store/favoritesStore';
import { postProductionRoles } from '../../data/roles';
import { formatAvailabilityDate } from '../../utils/date';

export function FavoritesList() {
  const [selectedRole, setSelectedRole] = React.useState('');
  const getFavoritesByRole = useFavoritesStore(state => state.getFavoritesByRole);
  const favorites = getFavoritesByRole(selectedRole);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Favorite Talent</h2>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">All Roles</option>
          {postProductionRoles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray-500">No favorites yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((profile) => (
            <Link
              key={profile.id}
              to={`/employer/freelancer/${profile.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={profile.imageUrl}
                  alt={profile.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{profile.name}</h3>
                <p className="text-sm text-gray-600">{profile.role}</p>
                
                <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                
                {profile.availability?.length > 0 && (
                  <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{formatAvailabilityDate(profile.availability[0])}</span>
                  </div>
                )}
                
                <div className="mt-2 flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">{profile.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
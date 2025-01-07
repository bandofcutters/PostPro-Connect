import React from 'react';
import { Plus, X } from 'lucide-react';
import { WorkExperience } from '../../../types/freelancer';
import { postProductionRoles } from '../../../data/roles';

export function ExperienceSection() {
  const [experiences, setExperiences] = React.useState<WorkExperience[]>([]);

  const addExperience = () => {
    const newExperience: WorkExperience = {
      id: Date.now().toString(),
      title: '',
      projectTitle: '',
      network: '',
      company: '',
      location: '',
      startDate: '',
      highlights: []
    };
    setExperiences([...experiences, newExperience]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((experience) => (
          <div key={experience.id} className="border rounded-lg p-4 relative">
            <button
              type="button"
              onClick={() => removeExperience(experience.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-lg"
                    value={experience.title}
                    onChange={(e) => {
                      const updated = experiences.map(exp =>
                        exp.id === experience.id
                          ? { ...exp, title: e.target.value }
                          : exp
                      );
                      setExperiences(updated);
                    }}
                  >
                    <option value="">Select role</option>
                    {postProductionRoles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Studio
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Show/Film Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter project title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Network/Platform
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="e.g., Netflix, HBO, ABC"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="month"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="month"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter location"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Highlights
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter key achievements (one per line)"
                  rows={4}
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addExperience}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Experience
        </button>
      </div>
    </div>
  );
}
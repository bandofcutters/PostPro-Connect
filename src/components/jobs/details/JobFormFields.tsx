import React from 'react';
import { locations } from '../../../data/locations';
import { DayPicker } from 'react-day-picker';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface JobFormFieldsProps {
  formData: {
    title: string;
    projectType: string;
    location: string;
    description: string;
    startDate?: Date;
    endDate?: Date;
  };
  onChange: (data: Partial<typeof formData>) => void;
}

export function JobFormFields({ formData, onChange }: JobFormFieldsProps) {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => onChange({ title: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Type
        </label>
        <select
          value={formData.projectType}
          onChange={(e) => onChange({ projectType: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
          required
        >
          <option value="">Select project type</option>
          <option value="Feature Film">Feature Film</option>
          <option value="TV Series">TV Series</option>
          <option value="Documentary">Documentary</option>
          <option value="Commercial">Commercial</option>
          <option value="Music Video">Music Video</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <select
          value={formData.location}
          onChange={(e) => onChange({ location: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
          required
        >
          <option value="">Select location</option>
          {locations.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Dates
        </label>
        <button
          type="button"
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          className="w-full px-4 py-2 border rounded-lg text-left flex items-center gap-2"
        >
          <Calendar className="w-4 h-4 text-gray-500" />
          <span>
            {formData.startDate && formData.endDate
              ? `${format(formData.startDate, 'MMM d, yyyy')} - ${format(formData.endDate, 'MMM d, yyyy')}`
              : 'Select project dates'}
          </span>
        </button>

        {isCalendarOpen && (
          <div className="absolute z-10 mt-1 bg-white rounded-lg shadow-lg p-4">
            <DayPicker
              mode="range"
              selected={{
                from: formData.startDate,
                to: formData.endDate
              }}
              onSelect={(range) => {
                onChange({
                  startDate: range?.from,
                  endDate: range?.to
                });
                if (range?.to) setIsCalendarOpen(false);
              }}
              numberOfMonths={2}
            />
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Details
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => onChange({ description: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg h-32"
          required
        />
      </div>
    </div>
  );
}
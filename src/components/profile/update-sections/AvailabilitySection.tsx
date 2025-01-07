import React from 'react';
import { format } from 'date-fns';
import { Plus, X } from 'lucide-react';
import { useUpdateProfile } from './UpdateProfileContext';
import { AvailabilityRange } from '../../../types/profile';
import { AvailabilityCalendar } from '../AvailabilityCalendar';

export function AvailabilitySection() {
  const { formData, updateFormData } = useUpdateProfile();
  const [selectedRange, setSelectedRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });

  const addAvailabilityRange = () => {
    if (selectedRange.from && selectedRange.to) {
      const newRange: AvailabilityRange = {
        id: crypto.randomUUID(),
        from: selectedRange.from,
        to: selectedRange.to
      };
      updateFormData({
        availability: [...formData.availability, newRange]
      });
      setSelectedRange({ from: undefined, to: undefined });
    }
  };

  const removeRange = (id: string) => {
    updateFormData({
      availability: formData.availability.filter(range => range.id !== id)
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Availability</h2>
      
      <div className="space-y-6">
        <div className="border rounded-lg p-4">
          <AvailabilityCalendar
            availabilityRanges={formData.availability}
            selectedRange={selectedRange}
            onRangeSelect={setSelectedRange}
            mode="edit"
          />
        </div>

        {selectedRange.from && selectedRange.to && (
          <button
            type="button"
            onClick={addAvailabilityRange}
            className="w-full py-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Selected Range
          </button>
        )}

        {formData.availability.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Available Dates</h3>
            <div className="space-y-2">
              {formData.availability.map((range) => (
                <div
                  key={range.id}
                  className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg"
                >
                  <span className="text-sm text-gray-600">
                    {format(range.from!, 'MMM d, yyyy')} - {format(range.to!, 'MMM d, yyyy')}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeRange(range.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
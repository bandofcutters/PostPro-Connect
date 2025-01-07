import React from 'react';
import { Calendar } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

interface DateRangeFilterProps {
  dateRange: { from: Date | undefined; to: Date | undefined };
  onChange: (range: { from: Date | undefined; to: Date | undefined }) => void;
}

export function DateRangeFilter({ dateRange, onChange }: DateRangeFilterProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full pl-10 pr-4 py-2 border rounded-lg text-left bg-white relative"
      >
        <Calendar className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <span className="text-gray-900">
          {dateRange.from ? (
            dateRange.to ? (
              `${format(dateRange.from, 'MMM d')} - ${format(dateRange.to, 'MMM d')}`
            ) : (
              format(dateRange.from, 'MMM d')
            )
          ) : (
            'Select dates'
          )}
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white rounded-lg shadow-lg p-4">
          <DayPicker
            mode="range"
            selected={dateRange}
            onSelect={(range) => {
              onChange(range || { from: undefined, to: undefined });
              if (range?.to) setIsOpen(false);
            }}
            numberOfMonths={2}
          />
        </div>
      )}
    </div>
  );
}
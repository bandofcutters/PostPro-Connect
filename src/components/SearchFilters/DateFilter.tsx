import React from 'react';
import { Calendar } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

interface DateFilterProps {
  dateRange: { from: Date | undefined; to: Date | undefined };
  onDateRangeChange: (range: { from: Date | undefined; to: Date | undefined }) => void;
}

export function DateFilter({ dateRange, onDateRangeChange }: DateFilterProps) {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  return (
    <div className="flex-1 px-6 border-r border-gray-200 relative flex flex-col justify-center">
      <label className="block text-xs font-semibold text-gray-700">Availability by Date</label>
      <button
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        className="w-full text-left text-sm text-gray-900"
      >
        {dateRange.from && dateRange.to
          ? `${format(dateRange.from, 'MMM d')} - ${format(dateRange.to, 'MMM d')}`
          : 'Add dates'}
      </button>

      {isCalendarOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl p-4 z-50">
          <DayPicker
            mode="range"
            selected={dateRange}
            onSelect={(range) => {
              onDateRangeChange(range || { from: undefined, to: undefined });
              if (range?.to) setIsCalendarOpen(false);
            }}
            numberOfMonths={2}
          />
        </div>
      )}
    </div>
  );
}
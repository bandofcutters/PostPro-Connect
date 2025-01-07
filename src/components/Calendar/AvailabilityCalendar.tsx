import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

interface AvailabilityCalendarProps {
  dateRange: { from: Date | undefined; to: Date | undefined };
  onDateRangeChange: (range: { from: Date | undefined; to: Date | undefined }) => void;
}

export function AvailabilityCalendar({ dateRange, onDateRangeChange }: AvailabilityCalendarProps) {
  const today = new Date();
  const footer = dateRange?.from ? (
    <p className="text-sm mt-4">
      {dateRange.to ? (
        <>
          {format(dateRange.from, 'PPP')} - {format(dateRange.to, 'PPP')}
        </>
      ) : (
        format(dateRange.from, 'PPP')
      )}
    </p>
  ) : (
    <p className="text-sm mt-4">Please pick a date range</p>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-lg font-semibold mb-4">Select Availability</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <DayPicker
          mode="range"
          selected={dateRange}
          onSelect={onDateRangeChange}
          numberOfMonths={2}
          defaultMonth={today}
          footer={footer}
          className="!mx-auto"
        />
      </div>
    </div>
  );
}
import React from 'react';
import { DayPicker } from 'react-day-picker';
import { isWithinInterval } from 'date-fns';
import { AvailabilityRange } from '../../types/profile';

interface AvailabilityCalendarProps {
  availabilityRanges: AvailabilityRange[];
  selectedRange?: { from: Date | undefined; to: Date | undefined };
  onRangeSelect?: (range: { from: Date | undefined; to: Date | undefined }) => void;
  mode?: 'view' | 'edit';
}

export function AvailabilityCalendar({ 
  availabilityRanges,
  selectedRange,
  onRangeSelect,
  mode = 'view'
}: AvailabilityCalendarProps) {
  const isAvailable = (date: Date) => {
    return availabilityRanges.some(range => 
      range.from && range.to && 
      isWithinInterval(date, { start: range.from, end: range.to })
    );
  };

  const modifiers = {
    available: isAvailable,
    ...(mode === 'edit' && selectedRange?.from && selectedRange?.to ? {
      selecting: (date: Date) => 
        isWithinInterval(date, { 
          start: selectedRange.from!, 
          end: selectedRange.to! 
        })
    } : {})
  };

  const modifiersStyles = {
    available: {
      backgroundColor: '#10B981',
      color: 'white'
    },
    selecting: {
      backgroundColor: '#FF385C',
      color: 'white'
    }
  };

  return (
    <div className="calendar-container">
      <style>{`
        .calendar-container .rdp {
          --rdp-cell-size: 25px !important;
          margin: 0;
        }
        .calendar-container .rdp-months {
          gap: 0.25rem;
          padding: 0.5rem;
        }
        .calendar-container .rdp-month {
          width: auto;
        }
        .calendar-container .rdp-caption {
          padding: 0.25rem;
        }
        .calendar-container .rdp-caption_label {
          font-size: 0.875rem;
          font-weight: 600;
        }
        .calendar-container .rdp-head_cell {
          font-size: 0.7rem;
          padding: 0.25rem 0;
        }
        .calendar-container .rdp-day {
          width: 25px;
          height: 25px;
          font-size: 0.75rem;
        }
        .calendar-container .rdp-nav_button {
          width: 24px;
          height: 24px;
        }
      `}</style>
      <DayPicker
        mode={mode === 'edit' ? 'range' : 'default'}
        selected={selectedRange}
        onSelect={onRangeSelect}
        numberOfMonths={2}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        showOutsideDays={false}
        defaultMonth={availabilityRanges[0]?.from}
      />
    </div>
  );
}
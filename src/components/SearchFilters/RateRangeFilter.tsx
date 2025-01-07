import React from 'react';
import { DollarSign } from 'lucide-react';

interface RateRangeFilterProps {
  rate: { min: number; max: number };
  onChange: (rate: { min: number; max: number }) => void;
}

export function RateRangeFilter({ rate, onChange }: RateRangeFilterProps) {
  const MIN_RATE = 200;
  const MAX_RATE = 1200;
  const STEP = 50;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), rate.max - STEP);
    onChange({ ...rate, min: newMin });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), rate.min + STEP);
    onChange({ ...rate, max: newMax });
  };

  return (
    <div className="flex-1 px-6 border-r border-gray-200 relative flex flex-col justify-center">
      <label className="block text-xs font-semibold text-gray-700">Daily Rate</label>
      <div className="flex items-center gap-1 text-sm">
        <DollarSign className="w-3 h-3 text-gray-500" />
        <span className="text-gray-900">${rate.min} - ${rate.max}</span>
      </div>
      <div className="relative mt-1">
        <div className="h-1 bg-gray-200 rounded-full">
          <div
            className="absolute h-1 bg-[#FF385C] rounded-full"
            style={{
              left: `${((rate.min - MIN_RATE) / (MAX_RATE - MIN_RATE)) * 100}%`,
              right: `${100 - ((rate.max - MIN_RATE) / (MAX_RATE - MIN_RATE)) * 100}%`
            }}
          />
        </div>
        <input
          type="range"
          min={MIN_RATE}
          max={MAX_RATE}
          step={STEP}
          value={rate.min}
          onChange={handleMinChange}
          className="absolute w-full h-1 -top-0 appearance-none bg-transparent pointer-events-auto"
          style={{ zIndex: 3 }}
        />
        <input
          type="range"
          min={MIN_RATE}
          max={MAX_RATE}
          step={STEP}
          value={rate.max}
          onChange={handleMaxChange}
          className="absolute w-full h-1 -top-0 appearance-none bg-transparent pointer-events-auto"
          style={{ zIndex: 4 }}
        />
      </div>
    </div>
  );
}
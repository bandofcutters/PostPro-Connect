import React from 'react';

interface RateRangeSliderProps {
  minRate: number;
  maxRate: number;
  onMinRateChange: (value: number) => void;
  onMaxRateChange: (value: number) => void;
}

export function RateRangeSlider({ minRate, maxRate, onMinRateChange, onMaxRateChange }: RateRangeSliderProps) {
  const absoluteMin = 0;
  const absoluteMax = 200;
  const step = 5;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxRate - step);
    onMinRateChange(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minRate + step);
    onMaxRateChange(value);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Rate Range: ${minRate} - ${maxRate}/hr
      </label>
      <div className="relative pt-1">
        <div className="h-1 bg-gray-200 rounded-full">
          <div
            className="absolute h-1 bg-blue-500 rounded-full"
            style={{
              left: `${(minRate / absoluteMax) * 100}%`,
              right: `${100 - (maxRate / absoluteMax) * 100}%`
            }}
          />
        </div>
        <input
          type="range"
          min={absoluteMin}
          max={absoluteMax}
          step={step}
          value={minRate}
          onChange={handleMinChange}
          className="absolute w-full h-1 -top-1 appearance-none bg-transparent pointer-events-none"
          style={{
            WebkitAppearance: 'none',
            zIndex: 3
          }}
        />
        <input
          type="range"
          min={absoluteMin}
          max={absoluteMax}
          step={step}
          value={maxRate}
          onChange={handleMaxChange}
          className="absolute w-full h-1 -top-1 appearance-none bg-transparent pointer-events-none"
          style={{
            WebkitAppearance: 'none',
            zIndex: 4
          }}
        />
        <div className="relative mt-4">
          <div className="flex justify-between text-xs text-gray-500">
            <span>${absoluteMin}</span>
            <span>${absoluteMax}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
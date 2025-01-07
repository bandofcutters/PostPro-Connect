import React from 'react';
import { DollarSign } from 'lucide-react';

interface RateRangeFilterProps {
  rateRange: { min: number; max: number };
  onChange: (range: { min: number; max: number }) => void;
}

export function RateRangeFilter({ rateRange, onChange }: RateRangeFilterProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Daily Rate</label>
      <div className="relative">
        <DollarSign className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <select
          value={`${rateRange.min}-${rateRange.max}`}
          onChange={(e) => {
            const [min, max] = e.target.value.split('-').map(Number);
            onChange({ min, max });
          }}
          className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none bg-white"
        >
          <option value="200-1200">All Rates</option>
          <option value="200-500">$200 - $500</option>
          <option value="501-800">$501 - $800</option>
          <option value="801-1200">$801 - $1,200</option>
        </select>
      </div>
    </div>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Role } from '../../types';
import { SearchBar } from './SearchBar';

interface SearchFiltersProps {
  selectedRole: Role | '';
  onRoleChange: (role: Role | '') => void;
  location: string;
  onLocationChange: (location: string) => void;
  dateRange: { from: Date | undefined; to: Date | undefined };
  onDateRangeChange: (range: { from: Date | undefined; to: Date | undefined }) => void;
}

export function SearchFilters(props: SearchFiltersProps) {
  const navigate = useNavigate();
  const [rate, setRate] = React.useState({ min: 200, max: 1200 });

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (props.selectedRole) params.append('role', props.selectedRole);
    if (props.location) params.append('location', props.location);
    if (props.dateRange.from) params.append('dateFrom', props.dateRange.from.toISOString());
    if (props.dateRange.to) params.append('dateTo', props.dateRange.to.toISOString());
    params.append('minRate', rate.min.toString());
    params.append('maxRate', rate.max.toString());
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="max-w-5xl mx-auto mb-8">
      <SearchBar
        {...props}
        rate={rate}
        onRateChange={setRate}
        onSearch={handleSearch}
      />
    </div>
  );
}
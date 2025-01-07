import React from 'react';
import { Briefcase } from 'lucide-react';
import { postProductionRoles } from '../../../data/roles';

interface RoleFilterProps {
  selectedRole: string;
  onChange: (role: string) => void;
}

export function RoleFilter({ selectedRole, onChange }: RoleFilterProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
      <div className="relative">
        <Briefcase className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <select
          value={selectedRole}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none bg-white"
        >
          <option value="">All Roles</option>
          {postProductionRoles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
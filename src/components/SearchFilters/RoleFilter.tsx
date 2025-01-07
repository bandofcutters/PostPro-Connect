import React from 'react';
import { Briefcase } from 'lucide-react';
import { Role } from '../../types';

interface RoleFilterProps {
  selectedRole: Role | '';
  onRoleChange: (role: Role | '') => void;
}

const roles: Role[] = ['Editor', 'Assistant Editor', 'Colorist', 'Sound Designer', 'VFX Artist'];

export function RoleFilter({ selectedRole, onRoleChange }: RoleFilterProps) {
  return (
    <div className="flex-1 px-6 border-r border-gray-200 relative flex flex-col justify-center">
      <label className="block text-xs font-semibold text-gray-700">Role</label>
      <div className="flex items-center gap-2">
        <Briefcase className="w-3 h-3 text-gray-500" />
        <select
          value={selectedRole}
          onChange={(e) => onRoleChange(e.target.value as Role)}
          className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm text-gray-900"
        >
          <option value="">Select role</option>
          {roles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
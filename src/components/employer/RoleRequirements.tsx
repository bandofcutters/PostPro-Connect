import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { postProductionRoles } from '../../data/roles';

export interface RoleRequirement {
  id: string;
  role: string;
  count: number;
  rate: number;
  startDate: string;
  endDate: string;
}

interface RoleRequirementsProps {
  requirements: RoleRequirement[];
  onChange: (requirements: RoleRequirement[]) => void;
}

export function RoleRequirements({ requirements, onChange }: RoleRequirementsProps) {
  const addRole = () => {
    onChange([
      ...requirements,
      {
        id: crypto.randomUUID(),
        role: '',
        count: 1,
        rate: 0,
        startDate: '',
        endDate: ''
      }
    ]);
  };

  const removeRole = (id: string) => {
    onChange(requirements.filter(req => req.id !== id));
  };

  const updateRole = (id: string, updates: Partial<RoleRequirement>) => {
    onChange(
      requirements.map(req =>
        req.id === id ? { ...req, ...updates } : req
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          Required Roles
        </label>
        <button
          type="button"
          onClick={addRole}
          className="flex items-center gap-2 text-sm text-[#FF385C] hover:text-[#E31C5F]"
        >
          <Plus className="w-4 h-4" />
          Add Role
        </button>
      </div>

      <div className="space-y-4">
        {requirements.map((req) => (
          <div key={req.id} className="p-4 bg-gray-50 rounded-lg space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <select
                  value={req.role}
                  onChange={(e) => updateRole(req.id, { role: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                >
                  <option value="">Select role</option>
                  {postProductionRoles.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              <div className="w-32">
                <input
                  type="number"
                  value={req.count}
                  onChange={(e) => updateRole(req.id, { count: parseInt(e.target.value) })}
                  min="1"
                  placeholder="Count"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div className="w-40">
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                  <input
                    type="number"
                    value={req.rate}
                    onChange={(e) => updateRole(req.id, { rate: parseInt(e.target.value) })}
                    min="0"
                    placeholder="Daily rate"
                    className="w-full pl-8 pr-4 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => removeRole(req.id)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={req.startDate}
                  onChange={(e) => updateRole(req.id, { startDate: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={req.endDate}
                  onChange={(e) => updateRole(req.id, { endDate: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  min={req.startDate}
                  required
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
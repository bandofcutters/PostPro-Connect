import React from 'react';
import { X } from 'lucide-react';
import { postProductionSkills } from '../../data/skills';

interface SkillsSelectorProps {
  selectedSkills: string[];
  onSkillsChange: (skills: string[]) => void;
  selectedRole: string;
}

export function SkillsSelector({ selectedSkills, onSkillsChange, selectedRole }: SkillsSelectorProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<keyof typeof postProductionSkills>('Editing Software');
  const [selectedSkill, setSelectedSkill] = React.useState<string>('');

  const addSkill = () => {
    if (selectedSkill && !selectedSkills.includes(selectedSkill)) {
      onSkillsChange([...selectedSkills, selectedSkill]);
      setSelectedSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onSkillsChange(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Required Skills</label>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as keyof typeof postProductionSkills)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            {Object.keys(postProductionSkills).map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Skill
          </label>
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select skill</option>
            {postProductionSkills[selectedCategory].map((skill) => (
              <option key={skill} value={skill}>{skill}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={addSkill}
        disabled={!selectedSkill}
        className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Add Skill
      </button>

      <div className="flex flex-wrap gap-2 mt-4">
        {selectedSkills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 rounded-full flex items-center gap-2"
          >
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(skill)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
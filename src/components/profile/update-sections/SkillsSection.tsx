import React from 'react';
import { X } from 'lucide-react';
import { postProductionSkills, PostProductionSkill } from '../../../data/skills';

export function SkillsSection() {
  const [skills, setSkills] = React.useState<PostProductionSkill[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<keyof typeof postProductionSkills>('Editing Software');
  const [selectedSkill, setSelectedSkill] = React.useState<PostProductionSkill | ''>('');

  const addSkill = () => {
    if (selectedSkill && !skills.includes(selectedSkill)) {
      setSkills([...skills, selectedSkill]);
      setSelectedSkill('');
    }
  };

  const removeSkill = (skillToRemove: PostProductionSkill) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Skills</h2>
      
      <div className="space-y-4">
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
              onChange={(e) => setSelectedSkill(e.target.value as PostProductionSkill)}
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
          {skills.map((skill) => (
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
    </div>
  );
}
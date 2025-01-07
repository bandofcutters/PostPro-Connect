import React from 'react';
import { Plus, X } from 'lucide-react';
import { DemoReelItem } from '../../../types/freelancer';

export function DemoReelSection() {
  const [items, setItems] = React.useState<DemoReelItem[]>([]);

  const addItem = () => {
    const newItem: DemoReelItem = {
      id: Date.now().toString(),
      title: '',
      description: '',
      thumbnailUrl: '',
      projectUrl: ''
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Demo Reel</h2>
      
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 relative">
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Thumbnail URL
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter thumbnail URL"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project URL
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter project URL"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addItem}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Demo Reel Item
        </button>
      </div>
    </div>
  );
}
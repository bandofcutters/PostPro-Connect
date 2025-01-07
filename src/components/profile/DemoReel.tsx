import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { DemoReelItem } from '../../types/freelancer';

interface Props {
  demoReel: DemoReelItem[];
}

export function DemoReel({ demoReel }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Demo Reel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demoReel.map((item) => (
          <div key={item.id} className="group relative">
            <div className="aspect-video w-full overflow-hidden rounded-lg relative">
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="mt-3">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              {item.projectUrl && (
                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm text-[#FF385C] hover:text-[#E31C5F]"
                >
                  Watch Full Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
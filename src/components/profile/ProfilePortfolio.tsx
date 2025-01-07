import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PortfolioItem } from '../../types/freelancer';

interface Props {
  portfolio: PortfolioItem[];
}

export function ProfilePortfolio({ portfolio }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolio.map((item) => (
          <div key={item.id} className="group relative">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-2">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              {item.projectUrl && (
                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm text-[#FF385C] hover:text-[#E31C5F]"
                >
                  View Project
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
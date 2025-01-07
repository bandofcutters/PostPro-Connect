import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileAbout } from '../components/profile/ProfileAbout';
import { ProfileSkills } from '../components/profile/ProfileSkills';
import { DemoReel } from '../components/profile/DemoReel';
import { Experience } from '../components/profile/Experience';
import { EmployerContactSection } from '../components/profile/EmployerContactSection';
import { FreelancerProfile } from '../types/freelancer';
import { BackButton } from '../components/common/BackButton';

interface Props {
  employerView?: boolean;
}

export function FreelancerProfilePage({ employerView = false }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock experience data
  const mockExperience = [
    {
      id: '1',
      title: 'Senior Editor',
      projectTitle: 'Stranger Things',
      network: 'Netflix',
      company: 'Universal Studios',
      location: 'Los Angeles, CA',
      startDate: '2020-06-01',
      highlights: [
        'Lead editor for 3 major feature films with combined box office of $500M+',
        'Supervised team of 5 assistant editors',
        'Pioneered new workflow reducing post-production time by 25%'
      ]
    },
    {
      id: '2',
      title: 'Editor',
      projectTitle: 'The Crown',
      network: 'Netflix',
      company: 'Netflix',
      location: 'Los Angeles, CA',
      startDate: '2018-03-01',
      endDate: '2020-05-31',
      highlights: [
        'Edited 12 episodes of critically acclaimed drama series',
        'Collaborated with directors to establish unique visual style',
        'Mentored junior editors and conducted technical workshops'
      ]
    }
  ];

  // Mock profile data
  const mockProfile: FreelancerProfile = {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Editor',
    hourlyRate: 75,
    location: 'Los Angeles, CA',
    bio: 'Senior video editor with 8+ years of experience in feature films and documentaries.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    skills: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro X', 'After Effects'],
    demoReel: [
      {
        id: '1',
        title: 'Feature Film Highlights',
        description: 'Action sequences from recent blockbuster films',
        thumbnailUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
        projectUrl: '#'
      },
      {
        id: '2',
        title: 'Documentary Series',
        description: 'Emmy-nominated documentary series editing',
        thumbnailUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
        projectUrl: '#'
      }
    ],
    experience: mockExperience
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {employerView && <BackButton />}
        <div className="space-y-8">
          <ProfileHeader profile={mockProfile} />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-8">
              <ProfileAbout bio={mockProfile.bio} />
              <ProfileSkills skills={mockProfile.skills} />
              <DemoReel demoReel={mockProfile.demoReel} />
              <Experience experience={mockProfile.experience} />
            </div>
            
            {employerView && (
              <EmployerContactSection profile={mockProfile} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export type Role = 'Editor' | 'Assistant Editor' | 'Colorist' | 'Sound Designer' | 'VFX Artist';

export interface FreelancerProfile {
  id: string;
  name: string;
  role: Role;
  hourlyRate: number;
  location: string;
  bio: string;
  imageUrl: string;
  skills: string[];
  demoReel: DemoReelItem[];
  experience: WorkExperience[];
  availability: AvailabilityBlock[];
}

export interface DemoReelItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  projectUrl?: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  projectTitle: string;
  network: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
}

export interface AvailabilityBlock {
  id: string;
  startDate: Date;
  endDate: Date;
  isBooked: boolean;
}
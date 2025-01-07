import { JobApplication } from '../types/applications';

export const mockApplications: JobApplication[] = [
  {
    id: '1',
    jobId: '1',
    freelancer: {
      id: '101',
      name: 'Michael Chen',
      role: 'Editor',
      location: 'Los Angeles',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      rating: 4.9
    },
    status: 'pending',
    message: "I'm excited about the opportunity to work on this project. With my experience in feature film editing and expertise in Premiere Pro and Avid, I believe I can bring significant value to your team.",
    appliedAt: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    jobId: '1',
    freelancer: {
      id: '102',
      name: 'Sarah Thompson',
      role: 'Editor',
      location: 'New York',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      rating: 4.8
    },
    status: 'accepted',
    message: "Having worked on similar Netflix productions, I understand the workflow and delivery requirements. I'm particularly interested in this project's creative direction.",
    appliedAt: '2024-03-14T15:45:00Z'
  },
  {
    id: '3',
    jobId: '1',
    freelancer: {
      id: '103',
      name: 'David Kim',
      role: 'Editor',
      location: 'Vancouver',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      rating: 4.7
    },
    status: 'pending',
    message: "I specialize in narrative storytelling and have extensive experience with action sequences. I'd love to bring my expertise to your project.",
    appliedAt: '2024-03-13T09:15:00Z'
  }
];
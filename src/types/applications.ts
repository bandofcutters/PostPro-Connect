export interface JobApplication {
  id: string;
  jobId: string;
  freelancer: {
    id: string;
    name: string;
    role: string;
    location: string;
    imageUrl: string;
    rating: number;
  };
  status: 'pending' | 'accepted' | 'rejected';
  message: string;
  appliedAt: string;
}
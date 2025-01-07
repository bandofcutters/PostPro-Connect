export interface AvailabilityRange {
  id: string;
  from: Date | undefined;
  to: Date | undefined;
}

export interface ProfileUpdateData {
  name: string;
  role: string;
  location: string;
  dailyRate: number;
  bio: string;
  imageUrl: string;
  availability: AvailabilityRange[];
}

export interface ProfileUpdateResponse {
  success: boolean;
  message: string;
  data?: ProfileUpdateData;
}
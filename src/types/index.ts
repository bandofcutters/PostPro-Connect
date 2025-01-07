export type Role = 'Editor' | 'Assistant Editor' | 'Colorist' | 'Sound Designer' | 'VFX Artist';

export interface Profile {
  id: string;
  name: string;
  role: Role;
  avatar: string;
  hourlyRate: number;
  bio: string;
  availability: DateRange[];
}

export interface DateRange {
  start: Date;
  end: Date;
}
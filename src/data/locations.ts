export const locations = [
  'Toronto',
  'New York',
  'Los Angeles',
  'London',
  'Vancouver'
] as const;

export type Location = typeof locations[number];
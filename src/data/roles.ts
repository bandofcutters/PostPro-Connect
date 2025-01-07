export const postProductionRoles = [
  'Editor',
  'Assistant Editor',
  'Colorist',
  'Sound Designer',
  'VFX Artist',
  'Post Production Supervisor',
  'Post Production Coordinator',
  'DIT',
  'Finishing Editor'
] as const;

export type PostProductionRole = typeof postProductionRoles[number];
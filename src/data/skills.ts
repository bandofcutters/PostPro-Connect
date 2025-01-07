export const postProductionSkills = {
  'Editing Software': [
    'Adobe Premiere Pro',
    'Final Cut Pro X',
    'Avid Media Composer',
    'DaVinci Resolve',
    'Adobe After Effects'
  ],
  'Technical Skills': [
    'Color Grading',
    'Sound Mixing',
    'Motion Graphics',
    'VFX Compositing',
    'HDR Workflow',
    'Media Management',
    'Pipeline Integration'
  ],
  'Story Skills': [
    'Narrative Editing',
    'Documentary Editing',
    'Dialogue Editing',
    'Story Editing',
    'Writing Narration',
    'Pacing',
    'Scene Assembly'
  ],
  'Workflow': [
    'Project Organization',
    'Media Management',
    'Collaborative Editing',
    'Version Control',
    'Pipeline Integration'
  ]
} as const;

export type PostProductionSkill = typeof postProductionSkills[keyof typeof postProductionSkills][number];

export function getSkillsByRole(role: string): string[] {
  switch (role) {
    case 'Editor':
      return [
        'Adobe Premiere Pro',
        'Avid Media Composer',
        'Final Cut Pro X',
        'Story Editing',
        'Scene Assembly',
        'Dialogue Editing',
        'Project Organization'
      ];
    case 'Colorist':
      return [
        'DaVinci Resolve',
        'Color Grading',
        'HDR Workflow',
        'Media Management',
        'Pipeline Integration'
      ];
    case 'Sound Designer':
      return [
        'Pro Tools',
        'Sound Mixing',
        'Dialogue Editing',
        'Sound Effects',
        'Audio Post-Production'
      ];
    case 'VFX Artist':
      return [
        'Adobe After Effects',
        'Nuke',
        'VFX Compositing',
        'Motion Graphics',
        'Pipeline Integration'
      ];
    default:
      return [];
  }
}
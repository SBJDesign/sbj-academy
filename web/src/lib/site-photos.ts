export const sitePhotos = {
  /** Home hero + branding course cover */
  hero: {
    src: '/photos/hero-main.png',
    alt: 'Smiling professional learner wearing a patterned headscarf',
  },
  professional: {
    src: '/photos/hero-main.png',
    alt: 'Smiling professional learner wearing a patterned headscarf',
  },
  laptop: {
    src: '/photos/learner-laptop.png',
    alt: 'Student learning on a laptop in a bright workspace',
  },
  coding: {
    src: '/photos/student-coding.png',
    alt: 'Young student learning to code in a classroom',
  },
  focused: {
    src: '/photos/student-focused.png',
    alt: 'Student focused on learning with headphones at a laptop',
  },
} as const;

export type SitePhotoKey = keyof typeof sitePhotos;

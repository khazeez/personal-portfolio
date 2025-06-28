// data/sections.ts

// ⬇️ Type definition
export type SectionItem = {
  id: string;
  label: string;
};

// ⬇️ Typed array
export const SECTIONS: SectionItem[] = [
  { id: 'intro', label: 'Introduction' },
  { id: 'features', label: 'Key Features' },
  { id: 'setup', label: 'Setup Guide' },
  { id: 'faq', label: 'FAQ' },
];

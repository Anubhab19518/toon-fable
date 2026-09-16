export type Language = 'en' | 'bn' | 'dual';

export interface VideoStory {
  id: string;
  youtubeId: string;
  title: string;
  titleBn: string;
  category: 'horror' | 'mystery' | 'dark-fantasy' | 'moral' | 'paranormal' | 'adventure';
  categoryLabel: { en: string; bn: string };
  description: string;
  descriptionBn: string;
  thumbnail: string;
  publishedAt: string;
  duration?: string;
  characters?: string[];
  views?: string;
  featured?: boolean;
}

export interface Character {
  id: string;
  name: string;
  nameBn: string;
  role: string;
  roleBn: string;
  category: 'folklore-spirit' | 'investigator' | 'storyteller' | 'entity';
  quote: string;
  quoteBn: string;
  origin: string;
  originBn: string;
  description: string;
  descriptionBn: string;
  traits: string[];
  traitsBn: string[];
  image: string;
  accentColor: string;
}

export interface StoryWorld {
  id: string;
  title: string;
  titleBn: string;
  tagline: string;
  taglineBn: string;
  description: string;
  descriptionBn: string;
  coverImage: string;
  accentColor: string;
  elementCount: string;
  stories: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleBn: string;
  excerpt: string;
  excerptBn: string;
  content: string[];
  contentBn: string[];
  coverImage: string;
  category: 'folklore' | 'animation' | 'culture' | 'behind-the-scenes';
  categoryLabel: { en: string; bn: string };
  author: string;
  authorBn: string;
  authorRole: string;
  authorRoleBn: string;
  readTime: string;
  readTimeBn: string;
  publishedDate: string;
  publishedDateBn: string;
  tags: string[];
  tagsBn: string[];
  quote?: { text: string; textBn: string; attribution: string; attributionBn: string };
  keyTakeaways?: { en: string[]; bn: string[] };
}

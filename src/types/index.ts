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

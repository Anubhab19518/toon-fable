'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  GreenRectFrame,
  CyanStampFrame,
  PinkOvalFrame,
  BlueMatFrame,
  OrangeRectFrame,
  PurplePetalOvalFrame,
} from './FrameShapes';
import styles from './CharacterRoster.module.css';

type FrameType =
  | 'green-rect'
  | 'cyan-stamp'
  | 'pink-oval'
  | 'blue-mat'
  | 'orange-rect'
  | 'purple-petal';

interface FrameCharacter {
  id: string;
  name: string;
  role: string;
  bio: string;
  frameType: FrameType;
  image: string;
  objectPosition?: string;
}

export const CharacterRoster: React.FC = () => {
  const { isBn } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const frameCharacters: FrameCharacter[] = [
    {
      id: 'bolai-pagol',
      name: 'bolai pagol',
      role: 'Village Wanderer & Eccentric Soul',
      bio: 'Known throughout the village for his colorful patched clothes and mystic intuition, Bolai Pagol perceives unseen secrets and strange wanderings that ordinary eyes overlook.',
      frameType: 'green-rect',
      image: '/characters/bolai pagol.png',
      objectPosition: '50% center',
    },
    {
      id: 'kali-tantrik',
      name: 'kali tantrik',
      role: 'Master of Dark Arts & Occult Mysteries',
      bio: 'Draped in sacred ash, rudraksha and skull beads, Kali Tantrik channels esoteric nocturnal rituals and ancient mystical chants from forgotten cremation grounds.',
      frameType: 'cyan-stamp',
      image: '/characters/kali tantrik.png',
      objectPosition: '41% center',
    },
    {
      id: 'kanai-khuro',
      name: 'kanai khuro',
      role: 'The Neighborhood Rickshaw Companion',
      bio: 'Pedaling his iconic cycle-rickshaw along misty village byways, Kanai Khuro is always ready with warm folk humor, tea-stall tales, and a swift ride out of trouble.',
      frameType: 'pink-oval',
      image: '/characters/kanai khuro.png',
      objectPosition: '48% center',
    },
    {
      id: 'officer-gopal-chandra',
      name: 'officer gopal chandra',
      role: 'Investigating Officer & Skeptic Lawman',
      bio: 'Stationed at the precinct with his crisp khaki uniform and observant demeanor, Officer Gopal Chandra relentlessly seeks logical answers behind every supernatural occurrence.',
      frameType: 'blue-mat',
      image: '/characters/officer gopal chandra.png',
      objectPosition: '48% center',
    },
    {
      id: 'sadu-baba',
      name: 'sadu baba',
      role: 'Revered Ascetic & Forest Sage',
      bio: 'Adorned in saffron robes and rudraksha beads, Sadu Baba offers spiritual wisdom, ancient mantras, and peaceful sanctuary from otherworldly disturbances.',
      frameType: 'orange-rect',
      image: '/characters/sadu baba.png',
      objectPosition: '49% center',
    },
    {
      id: 'srilata',
      name: 'srilata',
      role: 'Guardian of Traditions & Home Lore',
      bio: 'Epitomizing rural warmth and folklore storytelling in her classic saree, Srilata protects household traditions and whispers cautionary tales of twilight spirits.',
      frameType: 'purple-petal',
      image: '/characters/srilata.png',
      objectPosition: '44% center',
    },
  ];

  const renderFrame = (char: FrameCharacter) => {
    switch (char.frameType) {
      case 'green-rect':
        return <GreenRectFrame image={char.image} name={char.name} objectPosition={char.objectPosition} />;
      case 'cyan-stamp':
        return <CyanStampFrame image={char.image} name={char.name} objectPosition={char.objectPosition} />;
      case 'pink-oval':
        return <PinkOvalFrame image={char.image} name={char.name} objectPosition={char.objectPosition} />;
      case 'blue-mat':
        return <BlueMatFrame image={char.image} name={char.name} objectPosition={char.objectPosition} />;
      case 'orange-rect':
        return <OrangeRectFrame image={char.image} name={char.name} objectPosition={char.objectPosition} />;
      case 'purple-petal':
        return <PurplePetalOvalFrame image={char.image} name={char.name} objectPosition={char.objectPosition} />;
      default:
        return null;
    }
  };

  return (
    <section id="characters" className={styles.characterGallerySection}>
      <div className="site-container">
        {/* Top Centered Headers */}
        <div className={styles.headerArea}>
          <span className={styles.hoverHintPill}>
            {isBn ? 'চরিত্রদের চিনতে মাউস রাখুন' : 'Hover to meet the characters'}
          </span>

          <h2 className={styles.sectionHeadline}>
            {isBn ? 'আমাদের প্রিয় চরিত্রসমূহ' : 'Meet Our Characters'}
          </h2>
        </div>

        {/* CoComelon Picture Frame Gallery Grid (3 Columns x 2 Rows) */}
        <div className={styles.frameGalleryGrid}>
          {frameCharacters.map((char) => {
            const isHovered = hoveredId === char.id;

            return (
              <div
                key={char.id}
                className={styles.frameItem}
                onMouseEnter={() => setHoveredId(char.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setHoveredId(isHovered ? null : char.id)}
              >
                {/* Character Frame Graphic */}
                {renderFrame(char)}

                {/* Floating Popover Card that appears on hover below the frame */}
                <div
                  className={`${styles.hoverPopoverCard} ${isHovered ? styles.popoverVisible : ''}`}
                >
                  <h3 className={styles.popoverName}>
                    {char.name}
                  </h3>
                  
                  <span className={styles.popoverRole}>
                    {char.role}
                  </span>

                  <p className={styles.popoverBio}>
                    {char.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

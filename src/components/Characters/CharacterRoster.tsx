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
  nameBn: string;
  role: string;
  roleBn: string;
  bio: string;
  bioBn: string;
  frameType: FrameType;
  image: string;
}

export const CharacterRoster: React.FC = () => {
  const { isBn } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const frameCharacters: FrameCharacter[] = [
    {
      id: 'anirban',
      name: 'Anirban',
      nameBn: 'অনির্বাণ',
      role: 'Folklore Investigator',
      roleBn: 'রহস্য সন্ধানী',
      bio: 'Anirban, our fearless young detective, wanders deep into haunted villages and forgotten rajbaris with his trusty notebook and lantern, uncovering ancient Bengali mysteries.',
      bioBn: 'সাহসী রহস্য সন্ধানী অনির্বাণ, তার লণ্ঠন আর নোটবুক নিয়ে ঘুরে বেড়ায় ভুতুড়ে গ্রাম ও প্রাচীন জমিদার বাড়িতে।',
      frameType: 'green-rect',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'brahmodaittya',
      name: 'Brahmodaittya',
      nameBn: 'ব্রহ্মদৈত্য',
      role: 'Guardian Scholar Spirit',
      roleBn: 'পণ্ডিত আত্মা ও রক্ষক',
      bio: 'Brahmodaittya, the revered and scholarly spirit who resides atop sacred Bel trees, guards the village with ancient wisdom, white dhoti, and a solemn vow to protect honest travelers.',
      bioBn: 'পবিত্র বেল গাছের চূড়ায় বাস করা বিজ্ঞ ও পণ্ডিত আত্মা। সাদা ধুতি পরা এই শ্রদ্ধেয় আত্মা সৎ মানুষদের রক্ষা করেন।',
      frameType: 'cyan-stamp',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'shankhachurni',
      name: 'Shankhachurni',
      nameBn: 'শাঁখচুন্নি',
      role: 'Spirit of Conch & Coral',
      roleBn: 'শাঁখার অলৌকিক আত্মা',
      bio: 'Shankhachurni, wearing traditional conch shell bangles and crimson sarees, dwells among the misty village marshes, testing unsuspecting travelers with riddles.',
      bioBn: 'হাতে শাঁখা ও পরনে লাল শাড়ি পরা গ্রামের জলাভূমির এক রহস্যময়ী আত্মা। লোকসংস্কৃতির মর্যাদা রক্ষা করা তার ধর্ম।',
      frameType: 'pink-oval',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'mecho-bhoot',
      name: 'Mecho Bhoot',
      nameBn: 'মেছো ভূত',
      role: 'Mischievous Fish Spirit',
      roleBn: 'মাছের অনুরাগী ভূত',
      bio: 'Mecho Bhoot, the playful phantom who cannot resist fresh fried Hilsa and Rui fish, haunts the river banks with humorous bargains and comedic pranks.',
      bioBn: 'ইলিশ ও রুই মাছের লোভ সামলাতে না পারা এক কৌতুকপূর্ণ ভূত। রাতের নদীতে জেলেদের মাছ নিয়ে মজার সব কাণ্ড ঘটায়।',
      frameType: 'blue-mat',
      image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'budo-dadu',
      name: 'Budo Dadu',
      nameBn: 'বুড়ো দাদু',
      role: 'Master Storyteller',
      roleBn: 'গ্রামের কথাকার',
      bio: 'Budo Dadu gathers children around the courtyard lamp every evening, bringing folklore, grandfather tales, and unexpected moral twists alive with laughter.',
      bioBn: 'গ্রামের উঠোনে প্রদীপের আলোয় বসে ছোটদের রূপকথা ও নীতিকথার গল্প শোনান। তার গল্পের ঝুলি কখনো শেষ হয় না।',
      frameType: 'orange-rect',
      image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'nishi-daak',
      name: 'Nishi Daak',
      nameBn: 'নিশি ডাক',
      role: 'The Whispering Caller',
      roleBn: 'নিশীথিনী কণ্ঠস্বর',
      bio: 'Nishi Daak, the mysterious nighttime entity that whispers familiar voices in the deep dark, warning travelers never to answer until it calls three times.',
      bioBn: 'গভীর রাতে চেনা মানুষের কণ্ঠে ডেকে চলা এক অলৌকিক মায়াবী শক্তি। তিনবারের আগে যার ডাকে সাড়া দিতে নেই।',
      frameType: 'purple-petal',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85',
    },
  ];

  const renderFrame = (char: FrameCharacter) => {
    switch (char.frameType) {
      case 'green-rect':
        return <GreenRectFrame image={char.image} name={char.name} />;
      case 'cyan-stamp':
        return <CyanStampFrame image={char.image} name={char.name} />;
      case 'pink-oval':
        return <PinkOvalFrame image={char.image} name={char.name} />;
      case 'blue-mat':
        return <BlueMatFrame image={char.image} name={char.name} />;
      case 'orange-rect':
        return <OrangeRectFrame image={char.image} name={char.name} />;
      case 'purple-petal':
        return <PurplePetalOvalFrame image={char.image} name={char.name} />;
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
                    {isBn ? char.nameBn : char.name}
                  </h3>
                  
                  <span className={styles.popoverRole}>
                    {isBn ? char.roleBn : char.role}
                  </span>

                  <p className={styles.popoverBio}>
                    {isBn ? char.bioBn : char.bio}
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

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Search, Key, Sparkles, Eye, ShieldAlert, Lock, Unlock } from 'lucide-react';
import styles from './MysterySection.module.css';

export const MysterySection: React.FC = () => {
  const { isBn, isEn, isDual } = useLanguage();
  const [activeSecret, setActiveSecret] = useState<number | null>(null);

  const mysteryCards = [
    {
      id: 1,
      title: 'The Silent Bell of Nilkuthi',
      titleBn: 'নীলকুঠির শব্দহীন প্রাচীন ঘণ্টা',
      type: 'Unsolved Mystery',
      typeBn: 'অমীমাংসিত রহস্য',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85',
      clue: 'An iron bell that tolls at 3 AM despite the ropes having rotted away 80 years ago.',
      clueBn: '৮০ বছর আগে দড়ি নষ্ট হয়ে গেলেও প্রতি অমাবস্যায় রাত ৩টায় বেজে ওঠে ভারী লোহার ঘণ্টা।',
      secret: 'Anirban discovered a hidden underground water tunnel vibrating with tidal echoes!'
    },
    {
      id: 2,
      title: 'The Stranger with Backward Feet',
      titleBn: 'উল্টোপায়ের সেই অদ্ভুত পথিক',
      type: 'Secret Identity',
      typeBn: 'রহস্যময় আগন্তুক',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=85',
      clue: 'He offered gold coins for fresh hilsa, but his footprints on the wet mud faced backwards.',
      clueBn: 'টাটকা ইলিশের বদলে তিনি প্রাচীন স্বর্ণমুদ্রা দিয়েছিলেন, কিন্তু কাদার ওপর পায়ের ছাপ ছিল পেছনের দিকে!',
      secret: 'It was a disguised Mecho Bhoot returning a 50-year-old debt to a righteous fisherman.'
    },
    {
      id: 3,
      title: 'The Locked Chamber of Barasat',
      titleBn: 'বারাসাতের সিলগালা গুপ্তকক্ষ',
      type: 'Forbidden Vault',
      typeBn: 'নিষিদ্ধ ভল্ট',
      image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=700&q=85',
      clue: 'A brass key found inside an antique grandfather clock that opens no door in the main house.',
      clueBn: 'দেওয়ালঘড়ির ভেতর পাওয়া তামার চাবিটি মূল বাড়ির কোনো দরজার তালার সাথেই মেলে না...',
      secret: 'The key unlocked a subterranean chamber underneath the sacred banyan roots!'
    },
  ];

  return (
    <section className={styles.mysterySection}>
      <div className="site-container">
        {/* Header */}
        <div className={styles.headerArea}>
          

          <h2 className="section-headline">
            {isBn ? 'প্রতিটি গল্পের আড়ালে লুকিয়ে থাকে এক অজানা সত্য' : 'Every Story Hides a Secret'}
          </h2>

          <p className="section-lead">
            {isEn
              ? 'Unsolved village riddles, cursed heirlooms, and midnight investigations waiting for you to uncover.'
              : 'অমীমাংসিত ঘটনা, গোপন গ্রাম আর রহস্যময় সংকেতের সত্য উন্মোচন করুন।'}
          </p>
        </div>

        {/* 3 Interactive Mystery Clue Cards */}
        <div className={styles.mysteryGrid}>
          {mysteryCards.map((item) => {
            const isRevealed = activeSecret === item.id;
            return (
              <div key={item.id} className={styles.mysteryCard}>
                <div className={styles.cardHeaderImage}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.mysteryImg}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className={styles.typeBadge}>
                    {isBn ? item.typeBn : item.type}
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    {isBn ? item.titleBn : item.title}
                  </h3>

                  <p className={styles.clueText}>
                    "{isBn ? item.clueBn : item.clue}"
                  </p>

                  {/* Reveal Clue Action */}
                  <div className={styles.revealBox}>
                    {isRevealed ? (
                      <div className={styles.secretUnlocked}>
                        <Unlock size={16} className={styles.unlockedIcon} />
                        <p className={styles.secretText}>{item.secret}</p>
                      </div>
                    ) : (
                      <button
                        onClick={() => setActiveSecret(item.id)}
                        className={styles.revealBtn}
                      >
                        <Key size={15} />
                        <span>{isBn ? 'গোপন তথ্য উন্মোচন করুন' : 'Unlock Case Secret'}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

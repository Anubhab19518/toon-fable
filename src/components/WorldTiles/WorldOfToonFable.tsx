'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './WorldOfToonFable.module.css';

export const WorldOfToonFable: React.FC = () => {
  const { isBn, isEn } = useLanguage();

  const locations = [
    {
      id: 'bento-1',
      title: 'Rural Bengali Villages',
      titleBn: 'গ্রামবাংলার সবুজ প্রান্তর ও মেঠোপথ',
      image: '/gram.jpg',
      desc: 'Clay-tiled courtyards, narrow lantern-lit paths, and paddy fields stretching into the twilight horizon.',
      descBn: 'মাটির দাওয়ায় বসে রাতের গল্পের আসর আর দিগন্ত বিস্তৃত ধানের ক্ষেত।',
      bentoClass: styles.bentoWide,
    },
    {
      id: 'bento-2',
      title: 'Ancient Sacred Banyans',
      titleBn: 'হাজার বছরের প্রাচীন বটবৃক্ষ',
      image: '/botgach.jpg',
      desc: 'Colossal hanging roots that serve as dwelling realms for enlightened spirits and protector guardians.',
      descBn: 'যেখানে শিকড়ে শিকড়ে জড়িয়ে থাকে শতাব্দীর পুরনো অতিলৌকিক ইতিহাস।',
      bentoClass: styles.bentoStandard,
    },
    {
      id: 'bento-3',
      title: 'Monsoon Mist River Ghats',
      titleBn: 'কুয়াশাচ্ছন্ন নদীর নির্জন শ্মশানঘাট',
      image: '/nodi.jpg',
      desc: 'Solitary boat moorings where watermaidens, conch bangles, and phantom ripples appear at midnight.',
      descBn: 'ইছামতি ও পদ্মা নদীর নির্জন বাঁকে রাতের বেলা ভেসে ওঠা অদ্ভুত আলোকশিখা।',
      bentoClass: styles.bentoStandard,
    },
    {
      id: 'bento-4',
      title: 'Aristocratic Rajbari Mansions',
      titleBn: 'ভাঙা পোড়ো জমিদার রাজবাড়ি',
      image: '/rajbari.jpg',
      desc: 'Colonnaded verandas and locked ancestral archives holding heirlooms of supernatural dynasties.',
      descBn: 'জমিদারদের বিলাসবহুল অতীতের ধ্বংসাবশেষে লুকিয়ে থাকা গভীর পারিবারিক গোপন সত্য।',
      bentoClass: styles.bentoWide,
    },
  ];

  return (
    <section id="world" className={styles.worldSection}>
      <div className="site-container">
        {/* Header */}
        <div className={styles.headerArea}>
          <h2 className="section-headline">
            {isBn
              ? 'যেখানে প্রতিটি গল্প নিয়ে যায় এক অচেনা অভিজ্ঞতায়'
              : 'Where Every Tale Takes You Somewhere Unexpected'}
          </h2>

          <p className="section-lead">
            {isEn
              ? 'Immerse yourself in authentic Bengali environments re-envisioned through handcrafted animation.'
              : 'বাংলার চিরায়ত রূপ, রহস্য ও পরিবেশকে তুলে ধরা হয়েছে আমাদের প্রতিটি অ্যানিমেশন ফ্রেমে।'}
          </p>
        </div>

        {/* 4-Grid Bento Layout */}
        <div className={styles.bentoGrid}>
          {locations.map((loc) => (
            <div key={loc.id} className={`${styles.bentoCard} ${loc.bentoClass}`}>
              {/* Background Image Frame */}
              <div className={styles.bentoImageWrap}>
                <Image
                  src={loc.image}
                  alt={loc.title}
                  fill
                  className={styles.bentoImg}
                  sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 66vw, 50vw"
                />
                <div className={styles.bentoGradient} />
              </div>

              {/* Bento Content Overlay */}
              <div className={styles.bentoContent}>
                <div className={styles.textGroup}>
                  <h3 className={styles.bentoTitle}>
                    {isBn ? loc.titleBn : loc.title}
                  </h3>
                  <p className={styles.bentoDesc}>
                    {isBn ? loc.descBn : loc.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

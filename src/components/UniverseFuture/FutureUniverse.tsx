'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Rocket, Sparkles, BookOpen, Layers, Radio, ShoppingBag } from 'lucide-react';
import styles from './FutureUniverse.module.css';

export const FutureUniverse: React.FC = () => {
  const { isBn, isEn, isDual } = useLanguage();

  const futurePillars = [
    {
      title: 'Multi-Episode Story Arcs',
      titleBn: 'ধারাবাহিক রহস্য পর্ব',
      desc: 'Extended cinematic seasons following continuous paranormal investigations across rural Bengal.',
      icon: <Layers size={22} />,
      badge: 'In Production'
    },
    {
      title: 'Digital Storybooks & Comics',
      titleBn: 'ডিজিটাল কমিকস ও রূপকথা বই',
      desc: 'Illustrated interactive e-books and comic strips featuring our original characters and ghost lore.',
      icon: <BookOpen size={22} />,
      badge: 'Upcoming'
    },
    {
      title: 'Audio Folklore & Podcasting',
      titleBn: 'অডিও স্টোরিটেলিং ও পডকাস্ট',
      desc: 'Immersive 3D binaural midnight audio ghost stories for streaming during stormy nights.',
      icon: <Radio size={22} />,
      badge: 'Audio Universe'
    },
    {
      title: 'Original Franchise Merchandise',
      titleBn: 'টুন ফেবল অফিশিয়াল মার্চেন্ডাইজ',
      desc: 'Character art apparel, collectible figurines, lanterns, and folk-inspired story keepsakes.',
      icon: <ShoppingBag size={22} />,
      badge: 'Coming Soon'
    },
  ];

  return (
    <section className={styles.futureSection}>
      <div className="site-container">
        {/* Header */}
        <div className={styles.headerArea}>

          <h2 className="section-headline section-headline-light">
            {isBn ? 'আমাদের বিস্তৃত অ্যানিমেশন ভুবন' : 'The World is Only Beginning'}
          </h2>

          <p className="section-lead section-lead-light">
            {isEn
              ? 'Toon Fable Bangla is growing into a comprehensive Bengali animation and storytelling franchise.'
              : 'ইউটিউব থেকে ডিজিটাল কমিকস, অডিও থিয়েটার ও মার্চেন্ডাইজ— আমাদের গল্প ছড়িয়ে পড়বে সর্বত্র।'}
          </p>
        </div>

        {/* 4 Roadmap Universe Cards */}
        <div className={styles.roadmapGrid}>
          {futurePillars.map((item, idx) => (
            <div key={idx} className={styles.roadmapCard}>
              <div className={styles.cardHeaderRow}>
                <div className={styles.iconBox}>{item.icon}</div>
                <span className={styles.statusBadge}>{item.badge}</span>
              </div>

              <h3 className={styles.cardTitle}>
                {isBn ? item.titleBn : item.title}
              </h3>

              <p className={styles.cardDesc}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

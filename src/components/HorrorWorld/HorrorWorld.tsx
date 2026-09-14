'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Ghost, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import styles from './HorrorWorld.module.css';

export const HorrorWorld: React.FC = () => {
  const { isBn, isEn } = useLanguage();
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const offset = direction === 'left' ? -380 : 380;
    carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const horrorTales = [
    {
      id: 'h1',
      title: 'The Shakchunni of Ichamati Ghat',
      titleBn: 'ইছামতির শাঁখচুন্নি ও রাতের কুয়াশা',
      location: 'Rural Riverbank • Shonshan Ghat',
      image: '/nodi.jpg',
      desc: 'When Subhas ignored the warnings about the solitary woman wearing conch bangles at 2 AM, the river water began to rise.',
      descBn: 'মাঝরাতে ইছামতির ঘাটে লাল পেড়ে শাড়ি পরা নারীর শাঁখার শব্দ শুনে পেছন ফিরে তাকানোই ছিল তার চরম ভুল।',
      tag: 'Ghost Encounter'
    },
    {
      id: 'h2',
      title: 'The Cursed Zamindar Mansion',
      titleBn: 'অভিশপ্ত পুরোনো জমিদার বাড়ি',
      location: 'Haunted Ruins • Ancient Rajbari',
      image: '/rajbari.jpg',
      desc: 'Behind the 200-year-old padlocked iron gates, shadows still dance to forgotten sitar music every amavasya night.',
      descBn: '২০০ বছরের পুরোনো তালাবদ্ধ সিংহদরজার ওপারে প্রতি অমাবস্যার রাতে বেজে ওঠে সেতার আর ঘুঙুরের আওয়াজ।',
      tag: 'Haunted Mansion'
    },
    {
      id: 'h3',
      title: 'The Midnight Call of Nishi Daak',
      titleBn: 'নিশি ডাকের গা ছমছমে রহস্য',
      location: 'Bamboo Grove • Midnight Trail',
      image: '/gram.jpg',
      desc: 'Never answer before the third call. What happened when Bikram answered on the second during the torrential monsoon night?',
      descBn: 'পরিচিত মানুষের কণ্ঠে তিনবার ডাকার আগে সাড়া দিলে মানুষ হারিয়ে যায় চিরদিনের জন্য গভীর বনে...',
      tag: 'Folklore Legend'
    },
    {
      id: 'h4',
      title: 'The Wrath of Brahmodaittya',
      titleBn: 'ব্রহ্মদৈত্যের ক্রোধ ও প্রাচীন বটবৃক্ষ',
      location: 'Sacred Banyan • Ancient Shrine',
      image: '/botgach.jpg',
      desc: 'When corrupt woodcutters raised their axes against the thousand-year-old tree, a towering glowing entity descended.',
      descBn: 'হাজার বছরের প্রাচীন বটগাছে কুড়ালের কোপ পড়তেই গাছ থেকে নেমে এলো এক বিশালাকার তেজস্বী জ্যোতির্ময় রূপ।',
      tag: 'Supernatural Spirit'
    },
  ];

  return (
    <section className={styles.horrorSection}>
      {/* Top Wave Curve Transition filled with the exact page cream color */}
      <div className="wave-divider" style={{ backgroundColor: 'transparent' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px' }}>
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,0 L0,0 Z" fill="var(--bg-cream)" />
        </svg>
      </div>

      <div className="site-container">
        {/* Section Header */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>

            <h2 className="section-headline section-headline-light">
              {isBn
                ? 'বাংলার গা ছমছমে ভৌতিক জগতের দুয়ারে স্বাগতম'
                : 'Enter the Darker Side of Bengali Stories'}
            </h2>

            <p className="section-lead section-lead-light">
              {isEn
                ? 'From haunted bamboo thickets and foggy riverbanks to ancient zamindar curses. Pure atmosphere, zero cheap gore.'
                : 'গ্রামবাংলার ভুতুড়ে উপকথা, অভিশপ্ত রাজবাড়ি আর অলৌকিক আত্মাদের রোমহর্ষক অ্যানিমেশন কাহিনি।'}
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className={styles.arrowsGroup}>
            <button onClick={() => scroll('left')} className={styles.arrowBtn} aria-label="Previous story">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className={styles.arrowBtn} aria-label="Next story">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Carousel Cards */}
        <div ref={carouselRef} className={styles.carouselTrack}>
          {horrorTales.map((tale) => (
            <div key={tale.id} className={styles.horrorCard}>
              <div className={styles.cardImageContainer}>
                <Image
                  src={tale.image}
                  alt={tale.title}
                  fill
                  className={styles.horrorImg}
                  sizes="(max-width: 768px) 85vw, 360px"
                />
                <div className={styles.horrorGradient} />
                
                <span className={styles.horrorBadge}>{tale.tag}</span>

                <div className={styles.hoverPlay}>
                  <div className={styles.playBtnWrap}>
                    <Play size={20} className={styles.playIconFill} />
                  </div>
                </div>
              </div>

              <div className={styles.horrorContent}>
                <span className={styles.locationText}>{tale.location}</span>
                <h3 className={styles.taleTitle}>
                  {isBn ? tale.titleBn : tale.title}
                </h3>
                <p className={styles.taleExcerpt}>
                  {isBn ? tale.descBn : tale.desc}
                </p>
                <a href="#episodes" className={styles.watchTaleBtn}>
                  <span>{isBn ? 'গল্পটি শুনুন' : 'Watch Episode'}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Curve Transition */}
      <div className="wave-divider" style={{ marginTop: '3.5rem', backgroundColor: 'transparent' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px' }}>
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z" fill="var(--bg-cream)" />
        </svg>
      </div>
    </section>
  );
};

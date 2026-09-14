'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Flame, BookOpen } from 'lucide-react';
import styles from './BengaliStorytelling.module.css';

export const BengaliStorytelling: React.FC = () => {
  const { isBn, isEn } = useLanguage();

  return (
    <section id="folklore" className={styles.culturalSection}>
      <div className={`site-container ${styles.culturalGrid}`}>
        {/* Left Column: Brand Story & Cultural Heritage */}
        <div className={styles.culturalLeft}>
          <h2 className="section-headline">
            {isBn
              ? 'বাঙালির চিরায়ত গল্পকথার সমৃদ্ধ ঐতিহ্য'
              : 'Rooted in Bengali Storytelling'}
          </h2>

          <p className={styles.leadText}>
            {isEn
              ? 'From the warmth of village courtyard fires to monsoon evening ghost sessions, Bengal is a land woven with tales.'
              : 'দাওয়ায় বসে বুড়ো দাদুর মুখে ভুতের গল্প শোনা আর বর্ষার রাতে হারিকেন জ্বালিয়ে রূপকথা পাঠ— এই অনুভূতির নামই বাংলা।'}
          </p>

          <div className={styles.heritageCards}>
            <div className={styles.heritageCard}>
              <div className={styles.cardIconBox} style={{ color: 'var(--brand-red)' }}>
                <Flame size={22} />
              </div>
              <div>
                <h4 className={styles.heritageCardTitle}>
                  {isBn ? 'গ্রামের দাওয়ার গল্পের আসর' : 'Oral Storytelling Heritage'}
                </h4>
                <p className={styles.heritageCardDesc}>
                  {isBn
                    ? 'প্রজন্ম থেকে প্রজন্মে মুখে মুখে ছড়িয়ে পড়া লোকগাথা আর অদ্ভুত সব অভিজ্ঞতা।'
                    : 'Passing down generational folk tales that shaped our childhood imaginations.'}
                </p>
              </div>
            </div>

            <div className={styles.heritageCard}>
              <div className={styles.cardIconBox} style={{ color: 'var(--brand-forest)' }}>
                <BookOpen size={22} />
              </div>
              <div>
                <h4 className={styles.heritageCardTitle}>
                  {isBn ? 'আধুনিক অ্যানিমেশনে রূপান্তর' : 'Reimagined for the Digital Era'}
                </h4>
                <p className={styles.heritageCardDesc}>
                  {isBn
                    ? 'সেই ঐতিহ্যবাহী গল্পগুলোকে বিশ্বমানের আধুনিক অ্যানিমেশন ও শব্দের মাধ্যমে নতুন রূপ দেওয়া।'
                    : 'Preserving precious regional folklore for future generations through cutting-edge animation.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Artwork Collage */}
        <div className={styles.culturalRight}>
          <div className={styles.artCollage}>
            <div className={styles.mainArtFrame}>
              <Image
                src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=900&q=85"
                alt="Bengali Folklore"
                fill
                className={styles.mainArtImg}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.artFrameOverlay} />
            </div>

            <div className={styles.floatingQuoteCard}>
              <span className={styles.quoteMark}>“</span>
              <p className={styles.floatingQuoteText}>
                {isBn
                  ? 'গল্প শুধু বিনোদন নয়, গল্প হলো আমাদের শেকড়ের পরিচয়।'
                  : 'Stories are not just entertainment; they are the living heartbeat of our roots.'}
              </p>
              <span className={styles.quoteAuthor}>— Toon Fable Bangla</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

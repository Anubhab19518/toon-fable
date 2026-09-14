'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './WhatIsToonFable.module.css';

export const WhatIsToonFable: React.FC = () => {
  const { isBn, isEn } = useLanguage();

  return (
    <section id="about" className={styles.storyMomentSection}>
      {/* Playful Floating Pastel Decorative Icons (Stars, Notes, Dots) like screenshot */}
      <div className={`${styles.decorItem} ${styles.decorNote1}`}>🎵</div>
      <div className={`${styles.decorItem} ${styles.decorStar1}`}>⭐</div>
      <div className={`${styles.decorItem} ${styles.decorDot1}`} />
      <div className={`${styles.decorItem} ${styles.decorNote2}`}>🎶</div>
      <div className={`${styles.decorItem} ${styles.decorStar2}`}>✨</div>
      <div className={`${styles.decorItem} ${styles.decorDot2}`} />
      <div className={`${styles.decorItem} ${styles.decorNote3}`}>🎵</div>

      <div className="site-container">
        {/* Big Centered Green Franchise Headline */}
        <div className={styles.headlineArea}>
          <h2 className={styles.mainTitle}>
            <span className={styles.titleLine1}>
              {isBn ? 'প্রতিটি মুহূর্তের এক জাদুকরী গল্প।' : 'A story for every moment.'}
            </span>
            <span className={styles.titleLine2}>
              {isBn ? 'টুন ফেবল পৌঁছে দেবে আপনাকে।' : 'Toon Fable can take you there.'}
            </span>
          </h2>
        </div>

        {/* 2-Column Content Grid: Left Punchy Copy + Right Framed Mirror Visual */}
        <div className={styles.contentGrid}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <p className={styles.boldLead}>
              {isBn
                ? 'গল্পপ্রেমী বন্ধুরা, আমরা জানি আপনাদের ভালোলাগা। জীবন কৌতূহল ও রোমাঞ্চে ভরপুর। প্রতিটি রাত বয়ে আনে নতুন এক অভিযান . . . আর এক নতুন রহস্য।'
                : 'Story lovers, we see you. Life is full of wonder, curiosity, and mystery. Each night brings a new adventure . . . and a new challenge.'}
            </p>

            <p className={styles.bodyParagraph}>
              {isBn
                ? 'গ্রামের নিঝুম বাঁশঝাড় থেকে বর্ষার অন্ধকার রাত, আর রূপকথার রাজ্য— টুন ফেবল বাংলা প্রতিটি লোকগাথাকে জীবন্ত করে তোলে অ্যানিমেশনে। এমন এক সমাপ্তি যা আপনি ভাবেননি, আমরা সাধারণ গল্পকে রূপ দিই অবিস্মরণীয় এক অভিজ্ঞতায়।'
                : 'From stormy monsoon evenings to haunted village legends and dark fantasy worlds, Toon Fable brings authentic Bengali folklore alive through cinematic animation. With twists you never expect, we’re here to turn ordinary storytelling into unforgettable magic.'}
            </p>

            {/* CoComelon-style Solid Forest Green Pill Button */}
            <div className={styles.ctaWrapper}>
              <a href="#genres" className={styles.greenPillBtn}>
                <span>{isBn ? 'টুন ফেবল যেভাবে গল্প বলে' : 'How Toon Fable Can Help'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Framed Mirror Visual */}
          <div className={styles.rightCol}>
            <div className={styles.mirrorFrame}>
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85"
                alt="Toon Fable Animated Story World"
                fill
                className={styles.mirrorImg}
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              
              {/* Overlapping Character Mascot Cutout */}
              <div className={styles.mascotCutout}>
                <Image
                  src="/toon-fable-Picsart-BackgroundRemover.jpeg"
                  alt="Toon Fable Mascot"
                  width={150}
                  height={125}
                  className={styles.cutoutImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

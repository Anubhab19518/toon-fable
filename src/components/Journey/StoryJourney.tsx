'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useAmbientAudio } from '@/context/AudioContext';
import { Play, Lightbulb, PenTool, Palette, Film, Mic, Sparkles, Volume2, Heart, Flame } from 'lucide-react';
import styles from './StoryJourney.module.css';

export const StoryJourney: React.FC = () => {
  const { isBn, isEn } = useLanguage();
  const { isPlaying, toggleAmbiance } = useAmbientAudio();

  return (
    <section id="pipeline" className={styles.journeySection}>
      <div className="site-container">
        {/* Master 3-Column Bento Grid */}
        <div className={styles.bentoMasterGrid}>
          
          {/* ================= LEFT COLUMN ================= */}
          <div className={styles.bentoColLeft}>
            {/* Card 1: Top Feature Card */}
            <div className={styles.cardLeftTop}>
              <h3 className={styles.leftHeadline}>
                {isBn ? 'কল্পনাতীত নিখুঁত অ্যানিমেশন গল্প' : 'Handcrafted Bengali Storytelling'}
              </h3>

              <div className={styles.trialInfo}>
                <span className={styles.trialBold}>
                  {isBn ? '৬-ধাপের সৃজনশীল প্রক্রিয়া' : '6-Stage Creative Pipeline'}
                </span>
                <span className={styles.trialSub}>
                  {isBn ? '১০০% মৌলিক লোকগাথা' : '100% Original Tales'}
                </span>
              </div>
            </div>

            {/* Card 2: 500K Audience Stats Card with Avatar Stack */}
            <div className={styles.cardStatsLeft}>
              <div className={styles.statNumber}>500K+</div>
              <div className={styles.statLabel}>
                {isBn ? 'আনন্দিত গল্পপ্রেমী' : 'Story Lovers'}
              </div>

              <div className={styles.avatarStack}>
                <div className={styles.avatarCircle}>
                  <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80" alt="Audience" width={38} height={38} className={styles.avatarImg} />
                </div>
                <div className={`${styles.avatarCircle} ${styles.avatarIconCircle}`}>
                  <Heart size={16} fill="#F9B828" color="#F9B828" />
                </div>
                <div className={styles.avatarCircle}>
                  <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80" alt="Audience" width={38} height={38} className={styles.avatarImg} />
                </div>
              </div>
            </div>

            {/* Card 3: Action Button */}
            <div className={styles.cardActionLeft}>
              <a href="#episodes" className={styles.glowPillBtn}>
                <Play size={16} fill="#FFFFFF" />
                <span>{isBn ? 'গল্প দেখুন' : 'Watch Stories'}</span>
              </a>
            </div>
          </div>

          {/* ================= CENTER COLUMN ================= */}
          <div className={styles.bentoColCenter}>
            
            {/* Top Main Card */}
            <div className={styles.centerTopCard}>
              <h2 className={styles.centerHeadline}>
                {isBn ? 'একটি ভাবনা থেকে পূর্ণাঙ্গ অ্যানিমেশন' : 'From an Idea to a Story'}
              </h2>

              {/* Binary/Code decorative text */}
              <div className={styles.orbCodeRing}>
                <span>01011001 100011 10010110 010 001 10010 101</span>
              </div>

              {/* Floating Center Circular Logo Orb */}
              <div className={styles.centerOrbWrapper}>
                <div className={styles.logoCircleContainer}>
                  <Image
                    src="/toon-fable-Picsart-BackgroundRemover.jpeg"
                    alt="Toon Fable Official Logo"
                    width={150}
                    height={125}
                    className={styles.cleanCrispLogo}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Bottom 2 Split Cards (Headings only, clean, uncluttered) */}
            <div className={styles.centerBottomRow}>
              
              {/* Bottom Left Card: Stages 01, 02, 03 */}
              <div className={styles.bottomCardLeft}>
                <div className={styles.stageGroupHeader}>
                  <span className={styles.groupBadge}>STAGES 01 – 03</span>
                  <h4 className={styles.groupTitle}>
                    {isBn ? 'ভাবনা ও চিত্রনাট্য' : 'Story & Visual Concept'}
                  </h4>
                </div>

                <div className={styles.stagesList}>
                  <div className={styles.stageItemPill}>
                    <div className={styles.stageMiniIcon} style={{ color: '#F9B828', background: 'rgba(249, 184, 40, 0.18)' }}>
                      <Lightbulb size={18} />
                    </div>
                    <span className={styles.stageHeadingText}>
                      {isBn ? '০১. লোকগাথা ও ধারণা সন্ধান' : '01. Folklore & Concept Research'}
                    </span>
                  </div>

                  <div className={styles.stageItemPill}>
                    <div className={styles.stageMiniIcon} style={{ color: '#F27D28', background: 'rgba(242, 125, 40, 0.18)' }}>
                      <PenTool size={18} />
                    </div>
                    <span className={styles.stageHeadingText}>
                      {isBn ? '০২. চিত্রনাট্য ও সংলাপ রচনা' : '02. Cinematic Script Writing'}
                    </span>
                  </div>

                  <div className={styles.stageItemPill}>
                    <div className={styles.stageMiniIcon} style={{ color: '#9B5DE5', background: 'rgba(155, 93, 229, 0.18)' }}>
                      <Palette size={18} />
                    </div>
                    <span className={styles.stageHeadingText}>
                      {isBn ? '০৩. চরিত্রায়ন ও স্টোরিবোর্ড' : '03. Character Design & Storyboard'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Right Card: Stages 04, 05, 06 */}
              <div className={styles.bottomCardRight}>
                <div className={styles.stageGroupHeader}>
                  <span className={styles.groupBadge}>STAGES 04 – 06</span>
                  <h4 className={styles.groupTitle}>
                    {isBn ? 'অ্যানিমেশন ও শুভমুক্তি' : 'Production & Premiere'}
                  </h4>
                </div>

                <div className={styles.stagesList}>
                  <div className={styles.stageItemPill}>
                    <div className={styles.stageMiniIcon} style={{ color: '#00B4D8', background: 'rgba(0, 180, 216, 0.18)' }}>
                      <Film size={18} />
                    </div>
                    <span className={styles.stageHeadingText}>
                      {isBn ? '০৪. দ্বিমাত্রিক অ্যানিমেশন নির্মাণ' : '04. 2D Animation Production'}
                    </span>
                  </div>

                  <div className={styles.stageItemPill}>
                    <div className={styles.stageMiniIcon} style={{ color: '#E5383B', background: 'rgba(229, 56, 59, 0.18)' }}>
                      <Mic size={18} />
                    </div>
                    <span className={styles.stageHeadingText}>
                      {isBn ? '০৫. কণ্ঠদান ও আবহ সঙ্গীত' : '05. Voice Acting & Sound Design'}
                    </span>
                  </div>

                  <div className={styles.stageItemPill}>
                    <div className={styles.stageMiniIcon} style={{ color: '#1B7A42', background: 'rgba(27, 122, 66, 0.18)' }}>
                      <Sparkles size={18} />
                    </div>
                    <span className={styles.stageHeadingText}>
                      {isBn ? '০৬. ইউটিউব চ্যানেল মহাপ্রকাশ' : '06. YouTube Universe Premiere'}
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className={styles.bentoColRight}>
            {/* Card 1: Toggle Switch Widget */}
            <div className={styles.cardToggleRight} onClick={toggleAmbiance} title="Toggle Audio Ambiance">
              <div className={styles.toggleTrack}>
                <div className={`${styles.toggleThumb} ${isPlaying ? styles.toggleOn : ''}`}>
                  {isPlaying ? <Volume2 size={16} color="#FFFFFF" /> : <Sparkles size={16} color="#1B7A42" />}
                </div>
              </div>
            </div>

            {/* Card 2: 25M+ Stat Card */}
            <div className={styles.cardStatsRight}>
              <div className={styles.statNumberRight}>25M+</div>
              <div className={styles.statLabelRight}>
                {isBn ? 'মোট সম্প্রচার ও ভিউ' : 'Total Tale Views'}
              </div>
              <div className={styles.bracketDecoration}>⟵ ⟶</div>
            </div>

            {/* Card 3: Floating Diagonal Capsules Card */}
            <div className={styles.cardCapsulesRight}>
              <div className={styles.capsulesHeader}>
                <h4 className={styles.capsulesTitle}>
                  {isBn ? 'গল্পের বৈচিত্র্য' : 'Story Realms'}
                </h4>
                <p className={styles.capsulesDesc}>
                  {isBn ? 'ভৌতিক থেকে রূপকথা— সব অভিজ্ঞতা এক ছাতার তলে।' : 'Diverse animated universes crafted for storytelling lovers.'}
                </p>
              </div>

              {/* Diagonal Floating Story Pills */}
              <div className={styles.diagonalPillsArea}>
                <div className={`${styles.floatingPill} ${styles.pill1}`}>
                  <span>👻 Bhuter Golpo</span>
                </div>
                <div className={`${styles.floatingPill} ${styles.pill2}`}>
                  <span>🔍 Mystery Tales</span>
                </div>
                <div className={`${styles.floatingPill} ${styles.pill3}`}>
                  <span className={styles.pillDotOrange} />
                  <span>Dark Fantasy</span>
                </div>
                <div className={`${styles.floatingPill} ${styles.pillCircle}`}>
                  <Flame size={15} />
                </div>
                <div className={`${styles.floatingPill} ${styles.pill4}`}>
                  <span className={styles.pillDotCyan} />
                  <span>Moral Fables</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

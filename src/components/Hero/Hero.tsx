'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useAmbientAudio } from '@/context/AudioContext';
import { Volume2, VolumeX, Music, Play } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { isPlaying, toggleAmbiance } = useAmbientAudio();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleAudioToggle = () => {
    toggleAmbiance();
    if (videoRef.current) {
      videoRef.current.muted = isPlaying;
      setIsMuted(isPlaying);
    }
  };

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.heroWrapper}>
      {/* Fullscreen Background Video */}
      <video
        ref={videoRef}
        src="/video.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className={styles.bgVideo}
      />

      {/* Subtle overlay for contrast */}
      <div className={styles.videoOverlay} />

      {/* Top Floating CoComelon-style Green Franchise Pill Navbar */}
      <div className={styles.headerFloatingWrap}>
        <div className={styles.navPillBar}>
          {/* Official Toon Fable Brand Logo */}
          <a href="#home" onClick={scrollTo('home')} className={styles.brandLogoWrap}>
            <div className={styles.logoImageContainer}>
              <Image
                src="/toon-fable-Picsart-BackgroundRemover.jpeg"
                alt="Toon Fable Bangla Official Logo"
                width={120}
                height={100}
                className={styles.logoOfficialImg}
                priority
              />
            </div>
          </a>

          {/* Navigation Links Mapped 1-to-1 to Actual Page Sections */}
          <nav className={styles.navMenu}>
            <a href="#about" onClick={scrollTo('about')} className={styles.navLink}>
              <span>About</span>
            </a>
            <a href="#characters" onClick={scrollTo('characters')} className={styles.navLink}>
              <span>Characters</span>
            </a>
            <a href="#episodes" onClick={scrollTo('episodes')} className={styles.navLink}>
              <span>Episodes</span>
            </a>
            <a href="#world" onClick={scrollTo('world')} className={styles.navLink}>
              <span>Environments</span>
            </a>
            <a href="#folklore" onClick={scrollTo('folklore')} className={styles.navLink}>
              <span>Folklore</span>
            </a>
            <a href="#blog" onClick={scrollTo('blog')} className={styles.navLink}>
              <span>Blog</span>
            </a>
            <a href="#community" onClick={scrollTo('community')} className={styles.navLink}>
              <span>Community</span>
            </a>
          </nav>

          {/* Right Header Controls: Sound Button */}
          <div className={styles.navActions}>
            <button
              onClick={handleAudioToggle}
              className={`${styles.soundToggleBtn} ${isPlaying ? styles.soundPlaying : ''}`}
              title={isPlaying ? 'Pause music' : 'Play cheerful ambient storybook music'}
              aria-label="Toggle ambient kids music"
            >
              {isPlaying ? <Volume2 size={20} className={styles.pulsingSpeaker} /> : <VolumeX size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Center Text & Call to Action */}
      <div className={styles.heroCenterContent}>
        <h1 className={styles.heroTitle}>
          Where Bengali Folklore Meets <br className={styles.desktopBr} />
          <span className={styles.heroTitleGradient}>Magical Animation</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Enter an enchanting universe of timeless folktales, mysterious supernatural legends, and heartwarming animated adventures.
        </p>

        <div className={styles.heroCtaGroup}>
          <a href="#episodes" onClick={scrollTo('episodes')} className={styles.heroPrimaryBtn}>
            <Play size={18} className={styles.btnPlayIcon} fill="currentColor" />
            <span>Watch Latest Stories</span>
          </a>
          <a href="#characters" onClick={scrollTo('characters')} className={styles.heroSecondaryBtn}>
            <span>Meet The Characters</span>
          </a>
        </div>
      </div>

      {/* Bottom Left Ribbon Badge */}
      <div className={styles.bottomLeftAward}>
        <div className={styles.awardCircle}>
          <span className={styles.awardTextTop}>TOON FABLE</span>
          <span className={styles.awardTextMain}>OFFICIAL</span>
          <span className={styles.awardTextSub}>SELECTION</span>
          <div className={styles.checkmarkIcon}>✓</div>
        </div>
        <div className={styles.ribbonTail} />
      </div>

      {/* Bottom Right Floating Promo Card */}
      <div className={styles.bottomRightCard}>
        <div className={styles.promoCardInner}>
          <div className={styles.promoLogoBadge}>
            <span className={styles.promoEyebrow}>THE TOON FABLE</span>
            <h4 className={styles.promoBrandTitle}>Ghost World</h4>
          </div>

          <div className={styles.promoDivider} />

          <div className={styles.promoActionCol}>
            <span className={styles.premiereTitle}>
              Season 2 Premiere
            </span>
            <a href="#episodes" onClick={scrollTo('episodes')} className={styles.watchNowPill}>
              <span>Watch Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Bottom Left Circular Music Widget */}
      <div
        className={`${styles.floatingWidget} ${isPlaying ? styles.widgetActive : ''}`}
        onClick={handleAudioToggle}
        title={isPlaying ? 'Mute Music' : 'Play Story Music'}
      >
        <Music size={18} className={styles.musicNoteIcon} />
      </div>
    </section>
  );
};

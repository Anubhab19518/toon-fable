'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { FALLBACK_VIDEOS } from '@/data/fallbackData';
import { VideoStory } from '@/types';
import { Play, Youtube, Clock, Flame } from 'lucide-react';
import styles from './LatestEpisodes.module.css';

export const LatestEpisodes: React.FC = () => {
  const { isBn, isEn } = useLanguage();
  const [videos, setVideos] = useState<VideoStory[]>(FALLBACK_VIDEOS);

  useEffect(() => {
    const loadTopEpisodes = async () => {
      try {
        // Fetch top-viewed videos specifically for this section
        const res = await fetch('/api/youtube?maxResults=8&order=viewCount');
        if (res.ok) {
          const data = await res.json();
          if (data.items && data.items.length > 0) {
            setVideos(data.items);
          }
        }
      } catch (e) {
        console.warn('Using curated fallback episodes:', e);
      }
    };
    loadTopEpisodes();
  }, []);

  const featuredEpisode = videos[0] || FALLBACK_VIDEOS[0];
  const supportingEpisodes = videos.slice(1, 7);

  return (
    <section id="episodes" className={styles.episodesSection}>
      <div className="site-container">
        {/* Header */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <h2 className="section-headline">
              {isBn ? 'সর্বাধিক দেখা ও দর্শকপ্রিয় গল্পসমূহ' : 'Top Viewed Stories'}
            </h2>

            <p className="section-lead">
              {isEn
                ? 'Experience the most watched, highest-rated, and celebrated Bengali animated folklore from our channel.'
                : 'আমাদের ইউটিউব চ্যানেলের সর্বাধিক দেখা এবং দর্শকপ্রিয় রোমহর্ষক অ্যানিমেশন গল্পগুলো উপভোগ করুন।'}
            </p>
          </div>

          <a
            href="https://www.youtube.com/@toonfablebangla?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ytChannelPill}
          >
            <Youtube size={19} className={styles.ytRed} />
            <span>{isBn ? 'ইউটিউব চ্যানেলে সব পর্ব দেখুন' : 'Visit YouTube Channel'}</span>
          </a>
        </div>

        {/* 1 Large Featured Hero Cinema Card (Direct YouTube link) */}
        <a
          href={`https://www.youtube.com/watch?v=${featuredEpisode.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.featuredCinemaCard}
          title={`Watch ${featuredEpisode.title} on YouTube`}
        >
          <div className={styles.featuredThumbWrap}>
            <Image
              src={featuredEpisode.thumbnail}
              alt={featuredEpisode.title}
              fill
              className={styles.featuredThumbImg}
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className={styles.cinemaOverlay} />
            
            <div className={styles.featuredPlayCircle}>
              <Play size={28} className={styles.playIconFill} />
            </div>

            <span className={styles.featuredBadge}>
              <Flame size={14} />
              {isBn ? 'সর্বাধিক জনপ্রিয়' : 'TOP VIEWED STORY'}
            </span>
          </div>

          <div className={styles.featuredCinemaBody}>
            <div className={styles.metaBadgeRow}>
              <span className={styles.cinemaCategory}>
                {isBn ? featuredEpisode.categoryLabel.bn : featuredEpisode.categoryLabel.en}
              </span>
              {featuredEpisode.duration && (
                <span className={styles.durationPill}>
                  <Clock size={13} />
                  {featuredEpisode.duration}
                </span>
              )}
            </div>

            <h3 className={styles.featuredTitle}>
              {isBn ? featuredEpisode.titleBn : featuredEpisode.title}
            </h3>

            <p className={styles.featuredSynopsis}>
              {isBn ? featuredEpisode.descriptionBn : featuredEpisode.description}
            </p>

            <span className="btn-franchise-primary" style={{ alignSelf: 'flex-start' }}>
              {/* High-Contrast YouTube Icon with Visible Play Triangle */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" fill="#FFFFFF" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="var(--brand-red)" />
              </svg>
              <span>{isBn ? 'এখনই দেখুন' : 'WATCH NOW'}</span>
            </span>
          </div>
        </a>

        {/* Grid of Supporting Episodes (Direct YouTube links) */}
        <div className={styles.supportingGrid}>
          {supportingEpisodes.map((ep) => (
            <a
              key={ep.id}
              href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.supportingCard}
              title={`Watch ${ep.title} on YouTube`}
            >
              <div className={styles.supportingThumbWrap}>
                <Image
                  src={ep.thumbnail}
                  alt={ep.title}
                  fill
                  className={styles.supportingThumb}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={styles.supportingPlay}>
                  <div className={styles.miniPlayCircle}>
                    <Play size={16} fill="#FFF" />
                  </div>
                </div>
                {ep.duration && (
                  <span className={styles.miniDuration}>{ep.duration}</span>
                )}
              </div>

              <div className={styles.supportingInfo}>
                <span className={styles.supportingCat}>
                  {isBn ? ep.categoryLabel.bn : ep.categoryLabel.en}
                </span>
                <h4 className={styles.supportingTitle}>
                  {isBn ? ep.titleBn : ep.title}
                </h4>
                <div className={styles.watchNowAction}>
                  <span>{isBn ? 'এখনই দেখুন' : 'Watch Now'}</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

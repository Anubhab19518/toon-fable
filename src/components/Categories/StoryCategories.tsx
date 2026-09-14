'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { VideoStory } from '@/types';
import { FALLBACK_VIDEOS } from '@/data/fallbackData';
import { Youtube, ExternalLink, Play } from 'lucide-react';
import styles from './StoryCategories.module.css';

export const StoryCategories: React.FC = () => {
  const { isBn, isEn } = useLanguage();
  const [videos, setVideos] = useState<VideoStory[]>(FALLBACK_VIDEOS.slice(0, 3));
  const [loading, setLoading] = useState(true);

  // Fetch the latest 3 videos dynamically from Toon Fable Bangla channel
  useEffect(() => {
    async function fetchLatestVideos() {
      try {
        const res = await fetch('/api/youtube?maxResults=3');
        if (res.ok) {
          const data = await res.json();
          if (data.items && data.items.length > 0) {
            setVideos(data.items.slice(0, 3));
          }
        }
      } catch (err) {
        console.error('Failed to load latest videos:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestVideos();
  }, []);

  return (
    <section id="genres" className={styles.discoverSection}>
      <div className="site-container">
        {/* Centered CoComelon Green Heading: Discover What's New */}
        <div className={styles.headerArea}>
          <h2 className={styles.sectionHeadline}>
            {isBn ? 'নতুন কী প্রকাশ পেল' : "Discover What's New"}
          </h2>
        </div>

        {/* 3 Large Signature Green Franchise Cards with Direct YouTube Links */}
        <div className={styles.cardsGrid}>
          {videos.map((video, idx) => {
            const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

            return (
              <a
                key={video.id || idx}
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storyCard}
                title={`Watch ${video.title} on YouTube`}
              >
                {/* Top Image Frame with Play Overlay */}
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className={styles.cardImg}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  {/* Badge (e.g. Latest Release / Official Selection) */}
                  <span className={styles.topBadge}>
                    {idx === 0 ? 'LATEST EPISODE' : idx === 1 ? 'OFFICIAL SELECTION' : 'NOW PLAYING'}
                  </span>

                  {/* Center Hover Play Icon */}
                  <div className={styles.playOverlay}>
                    <div className={styles.playIconBubble}>
                      <Play size={26} fill="#FFFFFF" color="#FFFFFF" />
                    </div>
                  </div>
                </div>

                {/* Bottom Solid Green Box */}
                <div className={styles.cardGreenBottom}>
                  <h3 className={styles.cardHeadline} title={video.title}>
                    {isBn ? (video.titleBn || video.title) : video.title}
                  </h3>
                  
                  <span className={styles.whitePillBtn}>
                    <span>{isBn ? 'ইউটিউবে দেখুন' : 'Watch Now'}</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { FALLBACK_VIDEOS } from '@/data/fallbackData';
import { VideoStory } from '@/types';
import { VideoModal } from '../VideoModal/VideoModal';
import { Play, Sparkles, Youtube, Flame, Clock, Filter, ArrowRight } from 'lucide-react';
import styles from './LatestTales.module.css';

export const LatestTales: React.FC = () => {
  const { isBn, isEn, isDual } = useLanguage();
  const [videos, setVideos] = useState<VideoStory[]>(FALLBACK_VIDEOS);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<VideoStory | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/api/youtube?maxResults=12');
        if (res.ok) {
          const data = await res.json();
          if (data.items && data.items.length > 0) {
            setVideos(data.items);
          }
        }
      } catch (err) {
        console.warn('Using curated fallback tales:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const categories = [
    { id: 'all', label: 'All Stories', labelBn: 'সকল গল্প' },
    { id: 'horror', label: 'Horror & Ghosts', labelBn: 'ভৌতিক ও ভূতের গল্প' },
    { id: 'mystery', label: 'Mystery & Suspense', labelBn: 'রহস্য ও রোমাঞ্চ' },
    { id: 'dark-fantasy', label: 'Dark Fantasy', labelBn: 'ডার্ক ফ্যান্টাসি' },
    { id: 'moral', label: 'Moral Fables', labelBn: 'নীতিকথা' },
  ];

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter((v) => v.category === selectedCategory);

  return (
    <section id="tales" className={styles.talesSection}>
      {/* Ambient background glow */}
      <div className="ambient-glow-crimson" style={{ top: '25%', left: '-8%' }} />
      <div className="ambient-glow-amber" style={{ bottom: '15%', right: '-5%' }} />

      <div className="site-container">
        {/* Section Header */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <div className="section-tag">
              <Flame />
              <span>{isBn ? 'সাম্প্রতিক অ্যানিমেশন গল্পমালা' : 'EPISODES & TALES'}</span>
            </div>

            <h2 className="section-title">
              The Latest Tales
            </h2>

            <p className="section-subtitle-bn">
              {isEn
                ? 'Freshly animated folklore legends, haunting encounters, and moral epics.'
                : 'নবনির্মিত অ্যানিমেশন গল্প — লোকগাথা, ভৌতিক বিস্ময় ও রোমাঞ্চকর সব পর্ব।'}
            </p>
          </div>

          <div className={styles.headerRight}>
            <a
              href="https://www.youtube.com/@toonfablebangla?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ytChannelBtn}
            >
              <Youtube size={18} />
              <span>{isBn ? 'ইউটিউব চ্যানেলে সব গল্প দেখুন' : 'Watch All Stories on YouTube'}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className={styles.filtersBar}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`${styles.filterBtn} ${selectedCategory === cat.id ? styles.filterActive : ''}`}
            >
              <span>{isBn ? cat.labelBn : isEn ? cat.label : cat.label}</span>
              {isDual && <span className={styles.filterBnSub}>{cat.labelBn}</span>}
            </button>
          ))}
        </div>

        {/* Story Covers Grid */}
        <div className={styles.storiesGrid}>
          {filteredVideos.map((story) => (
            <article
              key={story.id}
              className={styles.storyCoverCard}
              onClick={() => setActiveVideoModal(story)}
            >
              {/* Thumbnail / Story Cover */}
              <div className={styles.coverFrame}>
                <Image
                  src={story.thumbnail}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.coverImg}
                />
                <div className={styles.coverGradient} />
                
                {/* Category & Duration Badges */}
                <div className={styles.coverTopRow}>
                  <span className={styles.coverCategory}>
                    {isBn ? story.categoryLabel.bn : story.categoryLabel.en}
                  </span>
                  {story.duration && (
                    <span className={styles.coverDuration}>
                      <Clock size={12} />
                      {story.duration}
                    </span>
                  )}
                </div>

                {/* Play Button Overlay */}
                <div className={styles.playOverlay}>
                  <div className={styles.playCircle}>
                    <Play size={22} className={styles.playIcon} />
                  </div>
                </div>
              </div>

              {/* Story Content & Synopsis */}
              <div className={styles.storyDetails}>
                <span className={styles.publishedDate}>{story.publishedAt}</span>
                <h3 className={styles.storyCardTitle}>
                  {isBn ? story.titleBn : story.title}
                </h3>
                <p className={styles.storySnippet}>
                  {isBn ? story.descriptionBn : story.description}
                </p>

                <div className={styles.cardBottomRow}>
                  <span className={styles.openTheaterText}>
                    {isBn ? 'গল্প শুনুন' : 'Open Story Theater'}
                  </span>
                  <span className={styles.arrowPulse}>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className={styles.bottomSubscribeBanner}>
          <div className={styles.bannerLeft}>
            <h3 className={styles.bannerTitle}>
              {isBn
                ? 'নতুন গল্প প্রকাশ হতেই নোটিফিকেশন পেতে চান?'
                : 'Never Miss a Bengali Folklore Episode'}
            </h3>
            <p className={styles.bannerSubtitle}>
              {isBn
                ? 'আমাদের ইউটিউব চ্যানেলে সাবস্ক্রাইব করে বেল আইকনটি প্রেস করে রাখুন।'
                : 'Subscribe to Toon Fable Bangla on YouTube for weekly original animated stories and paranormal adventures.'}
            </p>
          </div>

          <div className={styles.bannerRight}>
            <a
              href="https://www.youtube.com/@toonfablebangla?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-crimson"
            >
              <Youtube size={20} />
              <span>{isBn ? 'এখনই সাবস্ক্রাইব করুন' : 'Subscribe to Toon Fable'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cinematic Theater Modal */}
      {activeVideoModal && (
        <VideoModal video={activeVideoModal} onClose={() => setActiveVideoModal(null)} />
      )}
    </section>
  );
};

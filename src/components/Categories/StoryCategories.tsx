'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { VideoStory } from '@/types';
import { FALLBACK_SHORTS_BN, FALLBACK_SHORTS_EN } from '@/data/fallbackData';
import { Play, Youtube } from 'lucide-react';
import styles from './StoryCategories.module.css';

const CHANNELS = {
  bn: {
    id: 'UCKrkBlU3cBn0CaSlH7WGIyw',
    label: 'Bengali',
    badge: 'বাংলা',
    channelName: 'Toon Fable Bangla',
  },
  en: {
    id: 'UC0Buzc7xF_kqIDey7StWZEw',
    label: 'English',
    badge: 'EN',
    channelName: 'Toon Fable English',
  },
} as const;

type ChannelLang = keyof typeof CHANNELS;

export const StoryCategories: React.FC = () => {
  const { isBn } = useLanguage();
  const [selectedLang, setSelectedLang] = useState<ChannelLang>('bn');
  const [videosByLang, setVideosByLang] = useState<{ [key in ChannelLang]: VideoStory[] }>({
    bn: FALLBACK_SHORTS_BN,
    en: FALLBACK_SHORTS_EN,
  });
  const [loading, setLoading] = useState(false);

  // Fetch shorts for the selected channel
  useEffect(() => {
    let isMounted = true;
    async function fetchShorts(lang: ChannelLang) {
      setLoading(true);
      try {
        const channelId = CHANNELS[lang].id;
        const res = await fetch(`/api/youtube?channelId=${channelId}&shorts=true&maxResults=3`);
        if (res.ok) {
          const data = await res.json();
          if (data.items && data.items.length > 0 && isMounted) {
            setVideosByLang((prev) => ({
              ...prev,
              [lang]: data.items.slice(0, 3),
            }));
          }
        }
      } catch (err) {
        console.error(`Failed to load shorts for ${lang}:`, err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchShorts(selectedLang);

    return () => {
      isMounted = false;
    };
  }, [selectedLang]);

  // Prefetch the other channel's shorts so switching is instantaneous
  useEffect(() => {
    const otherLang: ChannelLang = selectedLang === 'bn' ? 'en' : 'bn';
    const otherChannelId = CHANNELS[otherLang].id;
    fetch(`/api/youtube?channelId=${otherChannelId}&shorts=true&maxResults=3`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.items && data.items.length > 0) {
          setVideosByLang((prev) => ({
            ...prev,
            [otherLang]: data.items.slice(0, 3),
          }));
        }
      })
      .catch(() => {});
  }, [selectedLang]);

  const currentVideos = videosByLang[selectedLang] || (selectedLang === 'bn' ? FALLBACK_SHORTS_BN : FALLBACK_SHORTS_EN);

  return (
    <section id="genres" className={styles.discoverSection}>
      <div className="site-container">
        {/* Header Area with Centered Heading & Language Switcher */}
        <div className={styles.headerArea}>
          <h2 className={styles.sectionHeadline}>
            {isBn ? 'নতুন কী প্রকাশ পেল' : "Discover What's New"}
          </h2>

          {/* Language Selector for Shorts Channels */}
          <div className={styles.langSelectorRow}>
            <div className={styles.langSwitchPill} role="tablist" aria-label="Shorts Channel Language">
              <button
                type="button"
                role="tab"
                aria-selected={selectedLang === 'bn'}
                className={`${styles.langTab} ${selectedLang === 'bn' ? styles.langTabActive : ''}`}
                onClick={() => setSelectedLang('bn')}
              >
                <span className={styles.langTabTitle}>{CHANNELS.bn.label}</span>
                <span className={styles.langTabBadge}>{CHANNELS.bn.badge}</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={selectedLang === 'en'}
                className={`${styles.langTab} ${selectedLang === 'en' ? styles.langTabActive : ''}`}
                onClick={() => setSelectedLang('en')}
              >
                <span className={styles.langTabTitle}>{CHANNELS.en.label}</span>
                <span className={styles.langTabBadge}>{CHANNELS.en.badge}</span>
              </button>
            </div>

            <div className={styles.channelMetaHint}>
              <Youtube size={16} className={styles.ytRedIcon} />
              <span>
                {selectedLang === 'bn' ? 'Toon Fable Bangla Shorts' : 'Toon Fable English Shorts'}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Large Signature Green Franchise Cards with Direct YouTube Shorts Links */}
        <div className={`${styles.cardsGrid} ${loading ? styles.cardsLoading : ''}`}>
          {currentVideos.map((video, idx) => {
            const youtubeUrl = `https://www.youtube.com/shorts/${video.youtubeId}`;

            return (
              <a
                key={video.id || idx}
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storyCard}
                title={`Watch ${video.title} on YouTube Shorts`}
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

                  {/* Badge */}
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
                    {video.title}
                  </h3>

                  <span className={styles.whitePillBtn}>
                    <span>{isBn && selectedLang === 'bn' ? 'ইউটিউবে দেখুন' : 'Watch Now'}</span>
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

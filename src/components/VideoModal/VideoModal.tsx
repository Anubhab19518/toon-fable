'use client';

import React from 'react';
import { VideoStory } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { X, Youtube, Share2, Sparkles, Clock, Eye, Calendar } from 'lucide-react';
import styles from './VideoModal.module.css';

interface VideoModalProps {
  video: VideoStory | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const { isBn, isEn } = useLanguage();

  if (!video) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: video.description,
        url: `https://www.youtube.com/watch?v=${video.youtubeId}`,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${video.youtubeId}`);
      alert('Video link copied to clipboard!');
    }
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        {/* Video Player Frame */}
        <div className={styles.playerWrapper}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          />
        </div>

        {/* Story Metadata & Details */}
        <div className={styles.detailsArea}>
          <div className={styles.metaTop}>
            <div className={styles.badgesRow}>
              <span className={styles.categoryBadge}>
                {isBn ? video.categoryLabel.bn : video.categoryLabel.en}
              </span>
              {video.duration && (
                <span className={styles.metaPill}>
                  <Clock size={13} />
                  {video.duration}
                </span>
              )}
              {video.publishedAt && (
                <span className={styles.metaPill}>
                  <Calendar size={13} />
                  {video.publishedAt}
                </span>
              )}
            </div>

            <button onClick={handleShare} className={styles.shareBtn} title="Share Tale">
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>

          <h2 className={styles.storyTitle}>
            {isBn ? video.titleBn : video.title}
          </h2>

          <p className={styles.storySynopsis}>
            {isBn ? video.descriptionBn : video.description}
          </p>

          {video.characters && video.characters.length > 0 && (
            <div className={styles.charactersSection}>
              <span className={styles.charsLabel}>
                {isBn ? 'গল্পের চরিত্রসমূহ:' : 'Characters in this Episode:'}
              </span>
              <div className={styles.charPills}>
                {video.characters.map((char, i) => (
                  <span key={i} className={styles.charPill}>
                    <Sparkles size={12} className={styles.sparkle} />
                    {char}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className={styles.bottomActions}>
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ytDirectBtn}
            >
              <Youtube size={18} />
              <span>{isBn ? 'ইউটিউবে লাইক ও সাবস্ক্রাইব করুন' : 'Watch & Subscribe on YouTube'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { STUDIO_INFO } from '@/data/fallbackData';
import { Youtube, Instagram, Facebook, MessageSquare, Sparkles, CheckCircle2, Vote, Flame } from 'lucide-react';
import styles from './JoinTheStory.module.css';

export const JoinTheStory: React.FC = () => {
  const { isBn, isEn, isDual } = useLanguage();
  const [selectedPoll, setSelectedPoll] = useState<number | null>(null);
  const [pollVoted, setPollVoted] = useState(false);

  const pollOptions = [
    { id: 1, text: 'The Mystery of Sundarban Tiger-Spirit', textBn: 'সুন্দরবনের বাঘ-ভূত ও অতিলৌকিক মায়াজাল', votes: '46%' },
    { id: 2, text: 'The Cursed Mirror of Nadia Zamindar', textBn: 'নদিয়ার জমিদারের অভিশপ্ত আয়না', votes: '32%' },
    { id: 3, text: 'Mecho Bhoot vs Fisherman Comic Quest', textBn: 'মেছো ভূত ও চালাক জেলের কৌতুক গল্প', votes: '22%' },
  ];

  const handleVote = (id: number) => {
    setSelectedPoll(id);
    setPollVoted(true);
  };

  return (
    <section id="community" className={styles.communitySection}>
      <div className="site-container">
        {/* Header */}
        <div className={styles.headerArea}>

          <h2 className="section-headline">
            {isBn
              ? 'আমাদের অ্যানিমেশন পরিবারের সাথে যুক্ত হোন'
              : 'Join the Story'}
          </h2>

          <p className="section-lead">
            {isEn
              ? 'Over 500,000 folklore lovers gather across our YouTube, Instagram, and Facebook channels.'
              : 'আমাদের অ্যানিমেশন কমিউনিটিতে অংশ নিয়ে ঠিক করুন পরবর্তী পর্বের গল্প ও রহস্য!'}
          </p>
        </div>

        {/* Community Grid: Social Cards + Audience Story Poll */}
        <div className={styles.communityGrid}>
          {/* Left Column: Social Hub Cards */}
          <div className={styles.socialCardsCol}>
            {/* YouTube Card */}
            <a
              href={STUDIO_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBigCard} ${styles.ytCard}`}
            >
              <div className={styles.socialCardIconWrap}>
                <Youtube size={32} />
              </div>
              <div className={styles.socialCardContent}>
                <span className={styles.platformBadge}>YouTube Channel</span>
                <h3 className={styles.cardTitle}>Toon Fable Bangla</h3>
                <p className={styles.cardDesc}>
                  {isBn ? 'সাপ্তাহিক নতুন অ্যানিমেশন গল্প ও শর্টস দেখতে সাবস্ক্রাইব করুন।' : 'Weekly original animated episodes, teasers, and folklore animations.'}
                </p>
                <span className={styles.joinAction}>
                  {isBn ? 'চ্যানেলে যোগ দিন' : 'Subscribe on YouTube'} →
                </span>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={STUDIO_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBigCard} ${styles.igCard}`}
            >
              <div className={styles.socialCardIconWrap}>
                <Instagram size={32} />
              </div>
              <div className={styles.socialCardContent}>
                <span className={styles.platformBadge}>Instagram</span>
                <h3 className={styles.cardTitle}>@toonfable</h3>
                <p className={styles.cardDesc}>
                  {isBn ? 'ক্যারাক্টার আর্ট, বিহাইন্ড দ্য সিন্স ও অ্যানিমেশন স্কেচ।' : 'Character sketches, behind-the-scenes artwork, and story reveals.'}
                </p>
                <span className={styles.joinAction}>
                  {isBn ? 'ফলো করুন' : 'Follow on Instagram'} →
                </span>
              </div>
            </a>

            {/* Facebook Card */}
            <a
              href={STUDIO_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBigCard} ${styles.fbCard}`}
            >
              <div className={styles.socialCardIconWrap}>
                <Facebook size={32} />
              </div>
              <div className={styles.socialCardContent}>
                <span className={styles.platformBadge}>Facebook Community</span>
                <h3 className={styles.cardTitle}>Toon Fable Cartoon Story</h3>
                <p className={styles.cardDesc}>
                  {isBn ? 'অনুরাগীদের সাথে গল্পের আলোচনা ও মতামত বিনিময়।' : 'Engage with fellow storytellers, discussions, and updates.'}
                </p>
                <span className={styles.joinAction}>
                  {isBn ? 'লাইক ও শেয়ার করুন' : 'Join on Facebook'} →
                </span>
              </div>
            </a>
          </div>

          {/* Right Column: Interactive Story Poll Box */}
          <div className={styles.pollBox}>
            <div className={styles.pollHeader}>
              <div className={styles.pollIconCircle}>
                <Vote size={22} />
              </div>
              <div>
                <span className={styles.pollTag}>
                  {isBn ? 'অনুরাগীদের ভোট' : 'COMMUNITY STORY POLL'}
                </span>
                <h3 className={styles.pollTitle}>
                  {isBn ? 'পরবর্তী পর্বে কোন গল্পটি দেখতে চান?' : 'Which Story World Should We Animate Next?'}
                </h3>
              </div>
            </div>

            <p className={styles.pollLead}>
              {isBn
                ? 'আপনার পছন্দের বিষয়ে ভোট দিন। সর্বোচ্চ ভোট পাওয়া বিষয়টি নিয়ে আমাদের পরবর্তী বিশেষ পর্ব নির্মিত হবে।'
                : 'Cast your vote to guide our storyboard team for next month\'s special animated premiere!'}
            </p>

            <div className={styles.pollOptionsList}>
              {pollOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleVote(opt.id)}
                  className={`${styles.pollOptionBtn} ${selectedPoll === opt.id ? styles.pollSelected : ''}`}
                >
                  <div className={styles.optTextGroup}>
                    <span className={styles.optTitle}>
                      {isBn ? opt.textBn : opt.text}
                    </span>
                  </div>
                  {pollVoted && (
                    <span className={styles.votePercentBadge}>{opt.votes}</span>
                  )}
                </button>
              ))}
            </div>

            {pollVoted && (
              <div className={styles.votedNotice}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>
                  {isBn ? 'ধন্যবাদ! আপনার ভোটটি যুক্ত হয়েছে।' : 'Thank you! Your vote has been counted in our studio tally.'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

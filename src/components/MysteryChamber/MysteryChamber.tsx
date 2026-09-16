'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MYSTERY_RIDDLE } from '@/data/fallbackData';
import { Flame, Sparkles, Key, Lock, Unlock, Compass, Eye, CheckCircle2, AlertCircle } from 'lucide-react';
import styles from './MysteryChamber.module.css';

export const MysteryChamber: React.FC = () => {
  const { isBn, isEn, isDual } = useLanguage();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleOptionClick = (optionId: string, isCorrect: boolean) => {
    setSelectedOption(optionId);
    if (isCorrect) {
      setIsUnlocked(true);
      setErrorMessage(false);
    } else {
      setIsUnlocked(false);
      setErrorMessage(true);
    }
  };

  return (
    <section id="mystery" className={styles.mysterySection}>
      {/* Background Mysterious Dark Landscape Overlay */}
      <div className={styles.chamberBg} />
      <div className={styles.mistOverlay} />
      <div className="ambient-glow-crimson" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className={`site-container ${styles.mysteryContainer}`}>
        {/* Atmosphere Eyebrow */}
        <div className={styles.mysteryBadge}>
          <Key size={14} className={styles.keyIcon} />
          <span>{isBn ? 'গোপন রহস্যের দুয়ার' : 'THE UNSEEN CHAMBER'}</span>
        </div>

        {/* Cinematic Mystery Statement */}
        <h2 className={styles.mysteryHeading}>
          <span className={styles.line1}>Some stories are meant to be heard.</span>
          <span className={styles.line2}>Some are meant to be discovered.</span>
        </h2>

        <p className={styles.mysterySubtitleBn}>
          {isEn
            ? 'A riddle whispered by the midnight wind of Bengal. Answer correctly to unlock uncharted lore.'
            : 'বাংলার নিশুতি রাতের বাতাস বয়ে আনে এক প্রাচীন ধাঁধা। সঠিক উত্তর দিয়ে উন্মোচন করুন অপ্রকাশিত উপাখ্যান।'}
        </p>

        {/* Interactive Chamber Box */}
        <div className={styles.chamberPortal}>
          <div className={styles.portalHeader}>
            <div className={styles.lockStatus}>
              {isUnlocked ? (
                <>
                  <Unlock size={20} className={styles.unlockedIcon} />
                  <span className={styles.unlockedText}>
                    {isBn ? 'গুপ্ত পুঁথি উন্মোচিত!' : 'Secret Lore Unlocked!'}
                  </span>
                </>
              ) : (
                <>
                  <Lock size={20} className={styles.lockedIcon} />
                  <span>{isBn ? 'ধাঁধার সমাধান করুন' : 'Solve the Midnight Riddle'}</span>
                </>
              )}
            </div>
            <span className={styles.portalCode}>LORE ARCHIVE #1842</span>
          </div>

          <div className={styles.portalBody}>
            {/* The Riddle Text */}
            <p className={styles.riddleQuestion}>
              &ldquo;{isBn ? MYSTERY_RIDDLE.questionBn : isEn ? MYSTERY_RIDDLE.question : MYSTERY_RIDDLE.questionBn}&rdquo;
            </p>

            {/* Riddle Options Grid */}
            <div className={styles.optionsGrid}>
              {MYSTERY_RIDDLE.options.map((opt) => {
                const isSelected = selectedOption === opt.id;
                const showSuccess = isSelected && opt.isCorrect;
                const showError = isSelected && !opt.isCorrect;

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionClick(opt.id, opt.isCorrect)}
                    className={`${styles.optionBtn} ${showSuccess ? styles.optionCorrect : ''} ${
                      showError ? styles.optionWrong : ''
                    }`}
                  >
                    <div className={styles.optionMarker}>
                      {showSuccess ? (
                        <CheckCircle2 size={16} className={styles.checkIcon} />
                      ) : showError ? (
                        <AlertCircle size={16} className={styles.wrongIcon} />
                      ) : (
                        <Flame size={14} className={styles.lanternFlame} />
                      )}
                    </div>
                    <span className={styles.optionLabel}>
                      {isBn ? opt.textBn : isEn ? opt.text : opt.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Wrong Answer Hint */}
            {errorMessage && (
              <div className={styles.hintMessage}>
                <AlertCircle size={16} />
                <span>
                  {isBn
                    ? 'রাত এখনো তার রহস্য গোপন রাখছে... অন্য প্রদীপে আলো ফেলুন!'
                    : 'The shadows keep their secret... try listening closer to the night!'}
                </span>
              </div>
            )}

            {/* Unlocked Secret Story Scroll */}
            {isUnlocked && (
              <div className={styles.unlockedBox}>
                <div className={styles.unlockedBadge}>
                  <Sparkles size={14} />
                  <span>{MYSTERY_RIDDLE.unlockedStory.badge}</span>
                </div>
                <h4 className={styles.unlockedTitle}>
                  {isBn
                    ? MYSTERY_RIDDLE.unlockedStory.titleBn
                    : MYSTERY_RIDDLE.unlockedStory.title}
                </h4>
                <p className={styles.unlockedTeaser}>
                  {isBn
                    ? MYSTERY_RIDDLE.unlockedStory.teaserBn
                    : MYSTERY_RIDDLE.unlockedStory.teaser}
                </p>
                <div className={styles.unlockedAction}>
                  <a
                    href="https://www.youtube.com/@toonfablebangla?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>{isBn ? 'এই রহস্যের পুরো ভিডিও দেখুন' : 'Watch Full Episode on YouTube'}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

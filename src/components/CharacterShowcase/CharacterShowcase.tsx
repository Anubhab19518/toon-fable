'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CHARACTERS } from '@/data/fallbackData';
import { Character } from '@/types';
import { Sparkles, Users, Quote, Shield, Flame, BookOpen, ChevronRight, X } from 'lucide-react';
import styles from './CharacterShowcase.module.css';

export const CharacterShowcase: React.FC = () => {
  const { isBn, isEn, isDual } = useLanguage();
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(CHARACTERS[0]);
  const [modalCharacter, setModalCharacter] = useState<Character | null>(null);

  return (
    <section id="characters" className={styles.characterSection}>
      {/* Ambient background glow */}
      <div className="ambient-glow-amber" style={{ top: '20%', right: '-8%' }} />
      <div className="ambient-glow-forest" style={{ bottom: '15%', left: '-5%' }} />

      <div className="site-container">
        {/* Header */}
        <div className={styles.headerArea}>
          <div className="section-tag">
            <Users />
            <span>{isBn ? 'অ্যানিমেশন ভুবনের চরিত্রমালা' : 'LORE & ROSTER'}</span>
          </div>

          <h2 className="section-title">
            Characters of the Universe
          </h2>

          <p className="section-subtitle-bn">
            {isEn
              ? 'Meet the spirits, investigators, and storytellers who inhabit the world of Toon Fable Bangla.'
              : 'বাংলার প্রাচীন ভূত-প্রেত, অতিলৌকিক সত্ত্বা ও নির্ভীক রহস্য সন্ধানীদের পরিচয়।'}
          </p>

          {isDual && (
            <p className="section-desc">
              From the scholar spirit Brahmodaittya in sacred banyans to the courageous investigator Anirban, each character brings deep folklore roots and animated life.
            </p>
          )}
        </div>

        {/* Interactive Character Spotlight Layout */}
        <div className={styles.showcaseContainer}>
          {/* Character Selection Cards Carousel / Grid */}
          <div className={styles.rosterGrid}>
            {CHARACTERS.map((char) => {
              const isSelected = selectedCharacter.id === char.id;
              return (
                <div
                  key={char.id}
                  className={`${styles.rosterCard} ${isSelected ? styles.rosterActive : ''}`}
                  onClick={() => setSelectedCharacter(char)}
                  style={{ '--char-accent': char.accentColor } as React.CSSProperties}
                >
                  <div className={styles.avatarWrap}>
                    <Image
                      src={char.image}
                      alt={char.name}
                      width={64}
                      height={64}
                      className={styles.avatarImg}
                    />
                  </div>
                  <div className={styles.rosterText}>
                    <h4 className={styles.rosterName}>
                      {isBn ? char.nameBn : char.name}
                    </h4>
                    <span className={styles.rosterRole}>
                      {isBn ? char.roleBn : char.role}
                    </span>
                  </div>
                  <ChevronRight size={18} className={styles.rosterChevron} />
                </div>
              );
            })}
          </div>

          {/* Large Interactive Feature Stage */}
          <div
            className={styles.stageFrame}
            style={{ '--stage-accent': selectedCharacter.accentColor } as React.CSSProperties}
          >
            <div
              className={styles.stageBg}
              style={{ backgroundImage: `url(${selectedCharacter.image})` }}
            />
            <div className={styles.stageOverlay} />

            <div className={styles.stageContent}>
              {/* Category & Origin */}
              <div className={styles.stageTopRow}>
                <span className={styles.originBadge}>
                  <Flame size={13} />
                  {isBn ? selectedCharacter.originBn : selectedCharacter.origin}
                </span>

                <button
                  className={styles.fullLoreBtn}
                  onClick={() => setModalCharacter(selectedCharacter)}
                >
                  <span>{isBn ? 'সম্পূর্ণ ইতিহাস' : 'Full Lore & Traits'}</span>
                  <ChevronRight size={14} />
                </button>
              </div>

              {/* Title & Bengali Name */}
              <div className={styles.stageTitleBlock}>
                <h3 className={styles.stageName}>
                  {selectedCharacter.name}
                  <span className={styles.stageNameBn}> / {selectedCharacter.nameBn}</span>
                </h3>
                <p className={styles.stageRole}>
                  {isBn ? selectedCharacter.roleBn : selectedCharacter.role}
                </p>
              </div>

              {/* Character Quote */}
              <blockquote className={styles.stageQuote}>
                <Quote size={24} className={styles.quoteIcon} />
                <p>
                  {isBn
                    ? `"${selectedCharacter.quoteBn}"`
                    : isEn
                    ? `"${selectedCharacter.quote}"`
                    : `"${selectedCharacter.quoteBn}"`}
                </p>
              </blockquote>

              {/* Description Excerpt */}
              <p className={styles.stageDescription}>
                {isBn ? selectedCharacter.descriptionBn : selectedCharacter.description}
              </p>

              {/* Key Traits Badges */}
              <div className={styles.traitsRow}>
                {(isBn ? selectedCharacter.traitsBn : selectedCharacter.traits).map((trait, i) => (
                  <span key={i} className={styles.traitPill}>
                    <Sparkles size={12} className={styles.traitSparkle} />
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Lore Modal */}
      {modalCharacter && (
        <div className={styles.modalBackdrop} onClick={() => setModalCharacter(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setModalCharacter(null)}>
              <X size={20} />
            </button>

            <div
              className={styles.modalImageBanner}
              style={{ backgroundImage: `url(${modalCharacter.image})` }}
            >
              <div className={styles.bannerOverlay} />
              <div className={styles.bannerTitleInfo}>
                <span className={styles.bannerOrigin}>{modalCharacter.origin}</span>
                <h2>{modalCharacter.name} ({modalCharacter.nameBn})</h2>
                <p>{modalCharacter.role}</p>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.loreBlock}>
                <h4>{isBn ? 'লোকগাথার উৎপত্তি ও পরিচয়' : 'Folklore Heritage & Story'}</h4>
                <p>{modalCharacter.description}</p>
                <p className={styles.loreBn}>{modalCharacter.descriptionBn}</p>
              </div>

              <div className={styles.loreBlock}>
                <h4>{isBn ? 'চারিত্রিক বৈশিষ্ট্য ও শক্তি' : 'Supernatural Traits & Abilities'}</h4>
                <div className={styles.traitsRow}>
                  {modalCharacter.traits.map((t, idx) => (
                    <span key={idx} className={styles.traitPill}>
                      <Shield size={12} /> {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.loreQuoteBox}>
                <Quote size={20} />
                <p>"{modalCharacter.quote}"</p>
                <p className={styles.loreQuoteBn}>"{modalCharacter.quoteBn}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

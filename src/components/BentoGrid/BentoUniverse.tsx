'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { STORY_WORLDS } from '@/data/fallbackData';
import { StoryWorld } from '@/types';
import { Sparkles, Compass, Ghost, Search, Moon, BookOpen, Radio, Shield, ArrowUpRight, X } from 'lucide-react';
import styles from './BentoUniverse.module.css';

export const BentoUniverse: React.FC = () => {
  const { isBn, isEn, isDual } = useLanguage();
  const [activeModalWorld, setActiveModalWorld] = useState<StoryWorld | null>(null);

  const getIconForWorld = (id: string) => {
    switch (id) {
      case 'horror':
        return <Ghost size={20} className={styles.worldIcon} />;
      case 'mystery':
        return <Search size={20} className={styles.worldIcon} />;
      case 'dark-fantasy':
        return <Moon size={20} className={styles.worldIcon} />;
      case 'moral':
        return <BookOpen size={20} className={styles.worldIcon} />;
      case 'paranormal':
        return <Radio size={20} className={styles.worldIcon} />;
      case 'adventure':
        return <Shield size={20} className={styles.worldIcon} />;
      default:
        return <Sparkles size={20} className={styles.worldIcon} />;
    }
  };

  return (
    <section id="universe" className={styles.universeSection}>
      {/* Subtle Background Glow Elements */}
      <div className="ambient-glow-amber" style={{ top: '10%', right: '-5%' }} />
      <div className="ambient-glow-forest" style={{ bottom: '10%', left: '-10%' }} />

      <div className="site-container">
        {/* Section Header */}
        <div className={styles.headerArea}>
          <div className="section-tag">
            <Compass />
            <span>{isBn ? 'গল্পের ভুবন ও দিগন্ত' : 'ENTER THE UNIVERSE'}</span>
          </div>

          <h2 className="section-title">
            Six Realms of Bengali Storytelling
          </h2>

          <p className="section-subtitle-bn">
            {isEn
              ? 'From haunted zamindar estates to moonlit banyan groves — step into our connected realms.'
              : 'ভৌতিক আতঙ্ক থেকে রূপকথার মায়াবী অরণ্য — টুন ফেবল বাংলার ছয়টি অনন্য ভুবন।'}
          </p>

          {isDual && (
            <p className="section-desc">
              Every story belongs to an expansive folklore universe. Explore the archetypes, mysteries, and moral sagas waiting beyond each doorway.
            </p>
          )}
        </div>

        {/* Bento Grid Architecture */}
        <div className={styles.bentoGrid}>
          {/* Card 1: Featured Major Horror Card (Large 2-column or 2-row) */}
          <div
            className={`${styles.bentoCard} ${styles.cardHorror}`}
            onClick={() => setActiveModalWorld(STORY_WORLDS[0])}
          >
            <div className={styles.cardImageBg} style={{ backgroundImage: `url(${STORY_WORLDS[0].coverImage})` }} />
            <div className={styles.cardOverlay} />
            
            <div className={styles.cardTop}>
              <div className={styles.categoryBadge} style={{ borderColor: STORY_WORLDS[0].accentColor }}>
                {getIconForWorld(STORY_WORLDS[0].id)}
                <span>{isBn ? 'প্রধান অধ্যায় • ভৌতিক' : 'FEATURED REALM • HORROR'}</span>
              </div>
              <span className={styles.elementBadge}>{STORY_WORLDS[0].elementCount}</span>
            </div>

            <div className={styles.cardBottom}>
              <span className={styles.taglineBn}>
                {isBn ? STORY_WORLDS[0].taglineBn : isEn ? STORY_WORLDS[0].tagline : `${STORY_WORLDS[0].tagline} • ${STORY_WORLDS[0].taglineBn}`}
              </span>
              <h3 className={styles.cardTitle}>
                {isBn ? STORY_WORLDS[0].titleBn : STORY_WORLDS[0].title}
              </h3>
              <p className={styles.cardDesc}>
                {isBn ? STORY_WORLDS[0].descriptionBn : STORY_WORLDS[0].description}
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.exploreText}>{isBn ? 'অধ্যায় উন্মোচন করুন' : 'Step Inside Story World'}</span>
                <span className={styles.arrowCircle}><ArrowUpRight size={18} /></span>
              </div>
            </div>
          </div>

          {/* Card 2: Mystery & Suspense (Wide Card) */}
          <div
            className={`${styles.bentoCard} ${styles.cardMystery}`}
            onClick={() => setActiveModalWorld(STORY_WORLDS[1])}
          >
            <div className={styles.cardImageBg} style={{ backgroundImage: `url(${STORY_WORLDS[1].coverImage})` }} />
            <div className={styles.cardOverlay} />
            
            <div className={styles.cardTop}>
              <div className={styles.categoryBadge} style={{ borderColor: STORY_WORLDS[1].accentColor }}>
                {getIconForWorld(STORY_WORLDS[1].id)}
                <span>{isBn ? 'রহস্য ও রোমাঞ্চ' : 'MYSTERY & SUSPENSE'}</span>
              </div>
              <span className={styles.elementBadge}>{STORY_WORLDS[1].elementCount}</span>
            </div>

            <div className={styles.cardBottom}>
              <span className={styles.taglineBn}>
                {isBn ? STORY_WORLDS[1].taglineBn : STORY_WORLDS[1].tagline}
              </span>
              <h3 className={styles.cardTitle}>
                {isBn ? STORY_WORLDS[1].titleBn : STORY_WORLDS[1].title}
              </h3>
              <p className={styles.cardDesc}>
                {isBn ? STORY_WORLDS[1].descriptionBn : STORY_WORLDS[1].description}
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.exploreText}>{isBn ? 'রহস্য সন্ধান' : 'Investigate Unsolved Tales'}</span>
                <span className={styles.arrowCircle}><ArrowUpRight size={18} /></span>
              </div>
            </div>
          </div>

          {/* Card 3: Dark Fantasy & Folklore (Tall Card) */}
          <div
            className={`${styles.bentoCard} ${styles.cardFantasy}`}
            onClick={() => setActiveModalWorld(STORY_WORLDS[2])}
          >
            <div className={styles.cardImageBg} style={{ backgroundImage: `url(${STORY_WORLDS[2].coverImage})` }} />
            <div className={styles.cardOverlay} />
            
            <div className={styles.cardTop}>
              <div className={styles.categoryBadge} style={{ borderColor: STORY_WORLDS[2].accentColor }}>
                {getIconForWorld(STORY_WORLDS[2].id)}
                <span>{isBn ? 'ডার্ক ফ্যান্টাসি' : 'DARK FANTASY'}</span>
              </div>
              <span className={styles.elementBadge}>{STORY_WORLDS[2].elementCount}</span>
            </div>

            <div className={styles.cardBottom}>
              <span className={styles.taglineBn}>
                {isBn ? STORY_WORLDS[2].taglineBn : STORY_WORLDS[2].tagline}
              </span>
              <h3 className={styles.cardTitle}>
                {isBn ? STORY_WORLDS[2].titleBn : STORY_WORLDS[2].title}
              </h3>
              <p className={styles.cardDesc}>
                {isBn ? STORY_WORLDS[2].descriptionBn : STORY_WORLDS[2].description}
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.exploreText}>{isBn ? 'মায়াজগতে প্রবেশ' : 'Enter Folklore Realm'}</span>
                <span className={styles.arrowCircle}><ArrowUpRight size={18} /></span>
              </div>
            </div>
          </div>

          {/* Card 4: Moral Tales & Fables */}
          <div
            className={`${styles.bentoCard} ${styles.cardMoral}`}
            onClick={() => setActiveModalWorld(STORY_WORLDS[3])}
          >
            <div className={styles.cardImageBg} style={{ backgroundImage: `url(${STORY_WORLDS[3].coverImage})` }} />
            <div className={styles.cardOverlay} />
            
            <div className={styles.cardTop}>
              <div className={styles.categoryBadge} style={{ borderColor: STORY_WORLDS[3].accentColor }}>
                {getIconForWorld(STORY_WORLDS[3].id)}
                <span>{isBn ? 'নীতিকথা ও রূপকথা' : 'MORAL FABLES'}</span>
              </div>
              <span className={styles.elementBadge}>{STORY_WORLDS[3].elementCount}</span>
            </div>

            <div className={styles.cardBottom}>
              <h3 className={styles.cardTitle}>
                {isBn ? STORY_WORLDS[3].titleBn : STORY_WORLDS[3].title}
              </h3>
              <p className={styles.cardDesc}>
                {isBn ? STORY_WORLDS[3].descriptionBn : STORY_WORLDS[3].description}
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.exploreText}>{isBn ? 'গল্পের নীতি' : 'Discover Lessons'}</span>
                <span className={styles.arrowCircle}><ArrowUpRight size={18} /></span>
              </div>
            </div>
          </div>

          {/* Card 5: Paranormal Expeditions */}
          <div
            className={`${styles.bentoCard} ${styles.cardParanormal}`}
            onClick={() => setActiveModalWorld(STORY_WORLDS[4])}
          >
            <div className={styles.cardImageBg} style={{ backgroundImage: `url(${STORY_WORLDS[4].coverImage})` }} />
            <div className={styles.cardOverlay} />
            
            <div className={styles.cardTop}>
              <div className={styles.categoryBadge} style={{ borderColor: STORY_WORLDS[4].accentColor }}>
                {getIconForWorld(STORY_WORLDS[4].id)}
                <span>{isBn ? 'অলৌকিক অনুসন্ধান' : 'PARANORMAL'}</span>
              </div>
              <span className={styles.elementBadge}>{STORY_WORLDS[4].elementCount}</span>
            </div>

            <div className={styles.cardBottom}>
              <h3 className={styles.cardTitle}>
                {isBn ? STORY_WORLDS[4].titleBn : STORY_WORLDS[4].title}
              </h3>
              <p className={styles.cardDesc}>
                {isBn ? STORY_WORLDS[4].descriptionBn : STORY_WORLDS[4].description}
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.exploreText}>{isBn ? 'অভিযান দেখুন' : 'Explore Expeditions'}</span>
                <span className={styles.arrowCircle}><ArrowUpRight size={18} /></span>
              </div>
            </div>
          </div>

          {/* Card 6: Animation Adventures */}
          <div
            className={`${styles.bentoCard} ${styles.cardAdventure}`}
            onClick={() => setActiveModalWorld(STORY_WORLDS[5])}
          >
            <div className={styles.cardImageBg} style={{ backgroundImage: `url(${STORY_WORLDS[5].coverImage})` }} />
            <div className={styles.cardOverlay} />
            
            <div className={styles.cardTop}>
              <div className={styles.categoryBadge} style={{ borderColor: STORY_WORLDS[5].accentColor }}>
                {getIconForWorld(STORY_WORLDS[5].id)}
                <span>{isBn ? 'অ্যানিমেশন অভিযান' : 'CARTOON ADVENTURE'}</span>
              </div>
              <span className={styles.elementBadge}>{STORY_WORLDS[5].elementCount}</span>
            </div>

            <div className={styles.cardBottom}>
              <h3 className={styles.cardTitle}>
                {isBn ? STORY_WORLDS[5].titleBn : STORY_WORLDS[5].title}
              </h3>
              <p className={styles.cardDesc}>
                {isBn ? STORY_WORLDS[5].descriptionBn : STORY_WORLDS[5].description}
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.exploreText}>{isBn ? 'রোমাঞ্চ যাত্রা' : 'Start Journey'}</span>
                <span className={styles.arrowCircle}><ArrowUpRight size={18} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* World Lore Interactive Modal */}
      {activeModalWorld && (
        <div className={styles.modalBackdrop} onClick={() => setActiveModalWorld(null)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveModalWorld(null)}>
              <X size={20} />
            </button>
            <div
              className={styles.modalBanner}
              style={{ backgroundImage: `url(${activeModalWorld.coverImage})` }}
            >
              <div className={styles.modalBannerOverlay} />
              <div className={styles.modalCategory}>
                {getIconForWorld(activeModalWorld.id)}
                <span>{isBn ? activeModalWorld.titleBn : activeModalWorld.title}</span>
              </div>
            </div>
            <div className={styles.modalBody}>
              <h3 className={styles.modalTitle}>
                {isBn ? activeModalWorld.titleBn : activeModalWorld.title}
              </h3>
              <p className={styles.modalTagline}>
                {isBn ? activeModalWorld.taglineBn : activeModalWorld.tagline}
              </p>
              <p className={styles.modalText}>
                {isBn ? activeModalWorld.descriptionBn : activeModalWorld.description}
              </p>
              
              <div className={styles.modalStoriesList}>
                <span className={styles.listTitle}>
                  {isBn ? 'এই জগতের উল্লেখযোগ্য উপাখ্যান:' : 'Featured Stories in this Realm:'}
                </span>
                <div className={styles.storyPills}>
                  {activeModalWorld.stories.map((story, i) => (
                    <span key={i} className={styles.storyPill}>
                      <Sparkles size={13} className={styles.pillSparkle} />
                      {story}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.modalActions}>
                <a href="#tales" className="btn-primary" onClick={() => setActiveModalWorld(null)}>
                  {isBn ? 'এই জগতের গল্পগুলি শুনুন' : 'Watch Tales from this Realm'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

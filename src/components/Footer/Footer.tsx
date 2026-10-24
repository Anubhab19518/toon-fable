'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { STUDIO_INFO } from '@/data/fallbackData';
import { Youtube, Instagram, Facebook, ArrowUp, MapPin, Phone, Mail, Heart } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { isBn } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="about" className={styles.footer}>
      <div className="site-container">
        {/* Top Franchise Banner */}
        <div className={styles.footerBanner}>
          <div className={styles.bannerLeft}>
            <h3 className={styles.bannerHeadline}>
              {isBn
                ? 'বাংলা অ্যানিমেশনের নতুন ভুবনে আপনাকে স্বাগতম'
                : 'Step Inside the World of Toon Fable Bangla'}
            </h3>
            <p className={styles.bannerSub}>
              {isBn
                ? 'প্রতি সপ্তাহে নতুন ভৌতিক ও রহস্যের গল্প দেখতে আমাদের সাথে থাকুন।'
                : 'Subscribe on YouTube and follow our social channels for weekly animated storytelling.'}
            </p>
          </div>
          <a
            href="https://www.youtube.com/@toonfablebangla?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-franchise-gold"
          >
            <Youtube size={20} />
            <span>{isBn ? 'ইউটিউব সাবস্ক্রাইব' : 'Subscribe on YouTube'}</span>
          </a>
        </div>

        {/* Footer Main Columns Grid */}
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.brandLogoRow}>
              <div className={styles.logoBadgeWrap}>
                <Image
                  src="/toon-fable-Picsart-BackgroundRemover.jpeg"
                  alt="Toon Fable Bangla Official Logo"
                  width={85}
                  height={70}
                  className={styles.logoImg}
                  priority
                />
              </div>
              <div className={styles.brandTitles}>
                <span className={styles.brandTitle}>TOON FABLE BANGLA</span>
                <span className={styles.brandTagline}>Stories Beyond Imagination</span>
              </div>
            </div>

            <p className={styles.brandBio}>
              {isBn
                ? 'বাংলার প্রাচীন লোকগাথা, ভৌতিক বিস্ময়, নীতিকথা আর ডার্ক ফ্যান্টাসির অনন্য অ্যানিমেশন ভুবন।'
                : 'A Bengali animated storytelling franchise blending horror, folklore, mystery, and fantasy for audiences worldwide.'}
            </p>

            {/* Social Buttons */}
            <div className={styles.socialsRow}>
              <a
                href={STUDIO_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.yt}`}
                aria-label="YouTube Channel"
              >
                <Youtube size={20} />
              </a>
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.ig}`}
                aria-label="Instagram Profile"
              >
                <Instagram size={20} />
              </a>
              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.fb}`}
                aria-label="Facebook Page"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Nav 1: Story Categories */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>{isBn ? 'গল্পের ভুবন' : 'Story Realms'}</h4>
            <ul className={styles.linksList}>
              <li><a href="#blog">{isBn ? 'কাহিনী ও ব্লগ' : 'Fable Chronicles (Blog)'}</a></li>
              <li><a href="#genres">{isBn ? 'ভৌতিক ও ভূতের গল্প' : 'Horror & Ghost Stories'}</a></li>
              <li><a href="#genres">{isBn ? 'রহস্য ও রোমাঞ্চ' : 'Mystery & Suspense'}</a></li>
              <li><a href="#genres">{isBn ? 'ডার্ক ফ্যান্টাসি' : 'Dark Fantasy Epics'}</a></li>
              <li><a href="#genres">{isBn ? 'নীতিকথা ও রূপকথা' : 'Moral Fables'}</a></li>
            </ul>
          </div>

          {/* Quick Nav 2: Characters */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Characters</h4>
            <ul className={styles.linksList}>
              <li><a href="#characters">Bolai Pagol</a></li>
              <li><a href="#characters">Kali Tantrik</a></li>
              <li><a href="#characters">Kanai Khuro</a></li>
              <li><a href="#characters">Officer Gopal Chandra</a></li>
              <li><a href="#characters">Sadu Baba</a></li>
              <li><a href="#characters">Srilata</a></li>
            </ul>
          </div>

          {/* Studio Kolkata HQ & Contact */}
          <div className={styles.hqCol}>
            <h4 className={styles.colTitle}>{isBn ? 'স্টুডিও প্রধান কার্যালয়' : 'Studio Headquarters'}</h4>
            <div className={styles.hqItem}>
              <MapPin size={18} className={styles.hqIcon} />
              <span>{STUDIO_INFO.hq}</span>
            </div>
            <div className={styles.hqItem}>
              <Phone size={18} className={styles.hqIcon} />
              <a href={`tel:${STUDIO_INFO.phone}`}>{STUDIO_INFO.phone}</a>
            </div>
            <div className={styles.hqItem}>
              <Mail size={18} className={styles.hqIcon} />
              <a href={`mailto:${STUDIO_INFO.email}`}>{STUDIO_INFO.email}</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className={styles.footerBottom}>
          <div className={styles.culturalSignoff}>
            <Heart size={15} className={styles.heartIcon} />
            <span>{isBn ? 'বাঙালির চিরায়ত রূপকথা • আধুনিক অ্যানিমেশন উপস্থাপনা' : 'Bengali Folklore Reimagined for the World'}</span>
          </div>

          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} Toon Fable Bangla. All rights reserved.
          </p>

          <button onClick={scrollToTop} className={styles.backToTopBtn} aria-label="Back to top">
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';
import { BLOG_POSTS } from '@/data/blogData';
import { useLanguage } from '@/context/LanguageContext';
import {
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react';
import styles from './BlogSection.module.css';

export const BlogSection: React.FC = () => {
  const { isBn } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Chronicles', labelBn: 'সব গল্প ও প্রবন্ধ' },
    { id: 'folklore', label: 'Folklore & Legends', labelBn: 'লোকগাথা ও পৌরাণিক' },
    { id: 'culture', label: 'Historic Lore', labelBn: 'ঐতিহাসিক রহস্য' },
    { id: 'animation', label: 'Studio Insights', labelBn: 'অ্যানিমেশন ক্রাফট' },
  ];

  const filteredPosts =
    activeCategory === 'all'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <section id="blog" className={styles.blogSection}>
      <div className="site-container">
        {/* Section Header */}
        <div className={styles.headerArea}>
          <h2 className={styles.sectionTitle}>
            {isBn
              ? 'বাংলার লোকগাথা, রহস্য ও অ্যানিমেশন ব্লগ'
              : 'Chronicles of Bengal: Stories, Lore & Craft'}
          </h2>

          <p className={styles.sectionSubtitle}>
            {isBn
              ? 'প্রাচীন বটগাছ, জমিদার বাড়ির রহস্য, শান্ত নদী এবং গ্রামীণ রূপকথা নিয়ে আমাদের বিশেষ নিবন্ধসমূহ পড়ুন।'
              : 'Dive into behind-the-scenes tales, ancient banyan tree mysteries, aristocratic secrets, and the cultural soul powering Toon Fable.'}
          </p>

          {/* Category Filter Pills */}
          <div className={styles.filterPillsRow}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`${styles.filterPill} ${
                  activeCategory === cat.id ? styles.activeFilterPill : ''
                }`}
              >
                <span>{isBn ? cat.labelBn : cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className={styles.blogGrid}>
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className={styles.blogCard}
            >
              {/* Card Cover Image */}
              <div className={styles.cardImageContainer}>
                <Image
                  src={post.coverImage}
                  alt={isBn ? post.titleBn : post.title}
                  fill
                  className={styles.cardCoverImg}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className={styles.cardOverlayGradient} />

                {/* Floating Category Pill */}
                <div className={styles.imageFloatingTop}>
                  <span className={styles.cardCategoryBadge}>
                    {isBn ? post.categoryLabel.bn : post.categoryLabel.en}
                  </span>
                  <span className={styles.cardReadTimeBadge}>
                    <Clock size={12} />
                    {isBn ? post.readTimeBn : post.readTime}
                  </span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className={styles.cardBody}>
                <div className={styles.cardMetaRow}>
                  <span className={styles.cardAuthor}>
                    {isBn ? post.authorBn : post.author}
                  </span>
                  <span className={styles.metaDot}>•</span>
                  <span className={styles.cardDate}>
                    {isBn ? post.publishedDateBn : post.publishedDate}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>
                  {isBn ? post.titleBn : post.title}
                </h3>

                <p className={styles.cardExcerpt}>
                  {isBn ? post.excerptBn : post.excerpt}
                </p>

                {/* Card Action Link */}
                <div className={styles.cardActionRow}>
                  <span className={styles.readArticleLink}>
                    <span>{isBn ? 'সম্পূর্ণ পড়ুন' : 'Read Article'}</span>
                    <ArrowRight size={16} className={styles.arrowIcon} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

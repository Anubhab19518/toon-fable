'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blogData';
import { useLanguage } from '@/context/LanguageContext';
import { Footer } from '@/components/Footer/Footer';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Check,
  Quote,
  BookOpen,
  Tag,
  ArrowRight,
} from 'lucide-react';
import styles from './BlogPostPage.module.css';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { isBn } = useLanguage();
  const [copied, setCopied] = useState(false);

  // Find post by slug or id
  const post = BLOG_POSTS.find(
    (p) => p.slug === slug || p.id === slug
  );

  if (!post) {
    return (
      <div className={styles.blogPageWrapper}>
        <div className={styles.notFoundContainer}>
          <BookOpen size={48} color="#1B7A42" />
          <h1 className={styles.notFoundTitle}>
            {isBn ? 'গল্পটি খুঁজে পাওয়া যায়নি' : 'Story Not Found'}
          </h1>
          <p className={styles.notFoundText}>
            {isBn
              ? 'আপনি যে নিবন্ধটি খুঁজছেন তা সরানো হয়েছে অথবা লিংকটি ভুল।'
              : 'The tale or article you are searching for might have been moved or does not exist.'}
          </p>
          <Link href="/#blog" className={styles.backHomeLink}>
            <ArrowLeft size={16} />
            <span>{isBn ? 'মূল পাতায় ফিরে যান' : 'Back to Home / Blog'}</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    const title = isBn ? post.titleBn : post.title;
    const text = isBn ? post.excerptBn : post.excerpt;
    const url = typeof window !== 'undefined' ? window.location.href : '';

    if (navigator.share) {
      navigator
        .share({
          title,
          text,
          url,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id);
  const contentParagraphs = isBn ? post.contentBn : post.content;
  const keyTakeaways = isBn ? post.keyTakeaways?.bn : post.keyTakeaways?.en;
  const tags = isBn ? post.tagsBn : post.tags;

  return (
    <div className={styles.blogPageWrapper}>
      {/* Top Floating Navigation Bar */}
      <header className={styles.topNavWrap}>
        <div className={styles.navInner}>
          <div className={styles.navLeftGroup}>
            <Link href="/#blog" className={styles.backHomeLink}>
              <ArrowLeft size={16} />
              <span>{isBn ? 'সব গল্প দেখুন' : 'Back to Chronicles'}</span>
            </Link>

            <Link href="/" className={styles.brandLogoLink}>
              <Image
                src="/toon-fable-Picsart-BackgroundRemover.jpeg"
                alt="Toon Fable Logo"
                width={70}
                height={55}
                className={styles.logoImg}
                priority
              />
            </Link>
          </div>

          <div className={styles.navRightGroup}>
            <button
              onClick={handleShare}
              className={`${styles.shareBtn} ${copied ? styles.copiedBtn : ''}`}
              title="Share Tale"
              aria-label="Share article"
            >
              {copied ? <Check size={16} /> : <Share2 size={16} />}
              <span>{copied ? (isBn ? 'কপি হয়েছে' : 'Copied!') : (isBn ? 'শেয়ার' : 'Share')}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Cover Banner Featuring the Photo */}
      <section className={styles.heroCoverSection}>
        <Image
          src={post.coverImage}
          alt={isBn ? post.titleBn : post.title}
          fill
          className={styles.heroCoverImage}
          priority
        />
        <div className={styles.heroGradientOverlay} />

        <div className={styles.heroContentContainer}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs}>
            <Link href="/" className={styles.crumbLink}>
              {isBn ? 'হোম' : 'Home'}
            </Link>
            <span className={styles.crumbDivider}>/</span>
            <Link href="/#blog" className={styles.crumbLink}>
              {isBn ? 'কাহিনী ও ব্লগ' : 'Chronicles'}
            </Link>
            <span className={styles.crumbDivider}>/</span>
            <span className={styles.crumbCurrent}>
              {isBn ? post.titleBn : post.title}
            </span>
          </nav>

          {/* Badges */}
          <div className={styles.badgesRow}>
            <span className={styles.categoryBadge}>
              {isBn ? post.categoryLabel.bn : post.categoryLabel.en}
            </span>
            <span className={styles.readTimeBadge}>
              <Clock size={13} />
              {isBn ? post.readTimeBn : post.readTime}
            </span>
          </div>

          {/* Article Title */}
          <h1 className={styles.articleHeadline}>
            {isBn ? post.titleBn : post.title}
          </h1>
        </div>
      </section>

      {/* Main Article Content Container */}
      <main className={styles.articleMainContainer}>
        {/* Author Status Bar */}
        <div className={styles.authorStatusBar}>
          <div className={styles.authorCol}>
            <div className={styles.authorAvatarRing}>
              <User size={22} />
            </div>
            <div className={styles.authorInfoMeta}>
              <span className={styles.authorName}>
                {isBn ? post.authorBn : post.author}
              </span>
              <span className={styles.authorRole}>
                {isBn ? post.authorRoleBn : post.authorRole}
              </span>
            </div>
          </div>

          <div className={styles.dateCol}>
            <Calendar size={16} className={styles.calIcon} />
            <span>{isBn ? post.publishedDateBn : post.publishedDate}</span>
          </div>
        </div>

        {/* Lead Excerpt */}
        <div className={styles.leadExcerptCard}>
          <p className={styles.leadExcerptText}>
            {isBn ? post.excerptBn : post.excerpt}
          </p>
        </div>

        {/* Story Text Paragraphs */}
        <div className={styles.storyTextSection}>
          {contentParagraphs.map((paragraph, index) => (
            <p key={index} className={styles.storyParagraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Featured Story Quote */}
        {post.quote && (
          <div className={styles.featuredQuoteBox}>
            <Quote size={32} className={styles.quoteIcon} />
            <blockquote className={styles.quoteText}>
              &ldquo;{isBn ? post.quote.textBn : post.quote.text}&rdquo;
            </blockquote>
            <span className={styles.quoteAttribution}>
              — {isBn ? post.quote.attributionBn : post.quote.attribution}
            </span>
          </div>
        )}

        {/* Key Lore Insights Checklist */}
        {keyTakeaways && keyTakeaways.length > 0 && (
          <div className={styles.keyInsightsCard}>
            <div className={styles.insightsHeader}>
              <BookOpen size={22} className={styles.insightsIcon} />
              <h3>{isBn ? 'মূল শিক্ষণীয় ও পৌরাণিক সারসংক্ষেপ' : 'Key Story Lore & Insights'}</h3>
            </div>
            <ul className={styles.insightsList}>
              {keyTakeaways.map((item, idx) => (
                <li key={idx} className={styles.insightItem}>
                  <span className={styles.bulletNumber}>{idx + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags and Share Row */}
        <div className={styles.bottomMetaSection}>
          <div className={styles.tagsWrap}>
            <span className={styles.tagLabel}>
              <Tag size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} />
              {isBn ? 'ট্যাগসমূহ:' : 'Tags:'}
            </span>
            <div className={styles.tagPills}>
              {tags.map((tag, i) => (
                <span key={i} className={styles.tagPill}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={handleShare}
            className={`${styles.shareBtn} ${copied ? styles.copiedBtn : ''}`}
          >
            {copied ? <Check size={16} /> : <Share2 size={16} />}
            <span>{copied ? (isBn ? 'লিংক কপি হয়েছে' : 'Copied!') : (isBn ? 'বন্ধুদের সাথে শেয়ার করুন' : 'Share Story')}</span>
          </button>
        </div>

        {/* More Stories Grid */}
        <section className={styles.moreStoriesSection}>
          <div className={styles.moreSectionHeader}>
            <h3 className={styles.moreTitle}>
              {isBn ? 'আরও রূপকথা ও কাহিনী পড়ুন' : 'Explore More Chronicles'}
            </h3>
            <Link href="/#blog" className={styles.viewAllLink}>
              <span>{isBn ? 'সব কাহিনী দেখুন' : 'View All Stories'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.moreCardsGrid}>
            {otherPosts.slice(0, 3).map((other) => (
              <Link
                key={other.id}
                href={`/blog/${other.slug}`}
                className={styles.moreCard}
              >
                <div className={styles.moreCardImgWrap}>
                  <Image
                    src={other.coverImage}
                    alt={isBn ? other.titleBn : other.title}
                    fill
                    className={styles.moreCardImg}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.moreCardBody}>
                  <span className={styles.moreCardCategory}>
                    {isBn ? other.categoryLabel.bn : other.categoryLabel.en}
                  </span>
                  <h4 className={styles.moreCardTitle}>
                    {isBn ? other.titleBn : other.title}
                  </h4>
                  <div className={styles.moreCardAction}>
                    <span>{isBn ? 'পড়ুন' : 'Read Tale'}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Franchise Footer */}
      <Footer />
    </div>
  );
}

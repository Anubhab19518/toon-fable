'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BlogPost } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import {
  X,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  Check,
  ArrowRight,
  BookOpen,
  Sparkles,
  Quote,
} from 'lucide-react';
import styles from './BlogModal.module.css';

interface BlogModalProps {
  post: BlogPost | null;
  allPosts: BlogPost[];
  onClose: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  allPosts,
  onClose,
  onSelectPost,
}) => {
  const { isBn } = useLanguage();
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

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

  // Find next article
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const nextIndex = (currentIndex + 1) % allPosts.length;
  const nextPost = allPosts[nextIndex];

  const contentParagraphs = isBn ? post.contentBn : post.content;
  const keyTakeaways = isBn ? post.keyTakeaways?.bn : post.keyTakeaways?.en;
  const tags = isBn ? post.tagsBn : post.tags;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        {/* Floating Top Bar with Category & Close */}
        <div className={styles.topStickyHeader}>
          <div className={styles.headerLeftMeta}>
            <span className={styles.categoryPill}>
              {isBn ? post.categoryLabel.bn : post.categoryLabel.en}
            </span>
            <span className={styles.readTimePill}>
              <Clock size={13} />
              {isBn ? post.readTimeBn : post.readTime}
            </span>
          </div>

          <div className={styles.headerRightActions}>
            <button
              onClick={handleShare}
              className={`${styles.actionBtn} ${copied ? styles.copiedBtn : ''}`}
              title="Share article"
              aria-label="Share article"
            >
              {copied ? <Check size={16} /> : <Share2 size={16} />}
              <span>{copied ? (isBn ? 'কপি হয়েছে' : 'Copied!') : (isBn ? 'শেয়ার' : 'Share')}</span>
            </button>

            <button
              onClick={onClose}
              className={styles.closeBtn}
              title="Close article"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Article Scrollable Body */}
        <div className={styles.scrollArea}>
          {/* Hero Cover Banner */}
          <div className={styles.coverImageWrap}>
            <Image
              src={post.coverImage}
              alt={isBn ? post.titleBn : post.title}
              fill
              className={styles.coverImg}
              priority
            />
            <div className={styles.coverGradient} />
            <div className={styles.coverCaption}>
              <h1 className={styles.articleMainTitle}>
                {isBn ? post.titleBn : post.title}
              </h1>
            </div>
          </div>

          {/* Author & Publication Info */}
          <div className={styles.authorMetaRow}>
            <div className={styles.authorProfile}>
              <div className={styles.authorAvatar}>
                <User size={18} />
              </div>
              <div className={styles.authorDetails}>
                <span className={styles.authorName}>
                  {isBn ? post.authorBn : post.author}
                </span>
                <span className={styles.authorRole}>
                  {isBn ? post.authorRoleBn : post.authorRole}
                </span>
              </div>
            </div>

            <div className={styles.dateMeta}>
              <Calendar size={15} className={styles.calIcon} />
              <span>{isBn ? post.publishedDateBn : post.publishedDate}</span>
            </div>
          </div>

          {/* Excerpt Lead Paragraph */}
          <div className={styles.excerptBox}>
            <p className={styles.excerptText}>
              {isBn ? post.excerptBn : post.excerpt}
            </p>
          </div>

          {/* Article Main Text Content */}
          <div className={styles.articleContentArea}>
            {contentParagraphs.map((paragraph, index) => (
              <p key={index} className={styles.contentParagraph}>
                {paragraph}
              </p>
            ))}

            {/* Stylized Story Quote */}
            {post.quote && (
              <div className={styles.quoteCard}>
                <Quote size={28} className={styles.quoteIcon} />
                <p className={styles.quoteText}>
                  &ldquo;{isBn ? post.quote.textBn : post.quote.text}&rdquo;
                </p>
                <span className={styles.quoteAuthor}>
                  — {isBn ? post.quote.attributionBn : post.quote.attribution}
                </span>
              </div>
            )}

            {/* Key Takeaways Section */}
            {keyTakeaways && keyTakeaways.length > 0 && (
              <div className={styles.takeawaysCard}>
                <div className={styles.takeawaysHeading}>
                  <BookOpen size={20} className={styles.takeawayBookIcon} />
                  <h4>{isBn ? 'মূল শিক্ষণীয় ও সারসংক্ষেপ' : 'Key Story Insights & Lore'}</h4>
                </div>
                <ul className={styles.takeawaysList}>
                  {keyTakeaways.map((item, idx) => (
                    <li key={idx} className={styles.takeawayItem}>
                      <span className={styles.bulletNumber}>{idx + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Tags */}
            <div className={styles.tagsArea}>
              <span className={styles.tagsLabel}>
                {isBn ? 'ট্যাগসমূহ:' : 'Story Tags:'}
              </span>
              <div className={styles.tagPillList}>
                {tags.map((tag, i) => (
                  <span key={i} className={styles.tagPill}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Next Story Recommendation Footer */}
          {nextPost && (
            <div className={styles.nextArticleFooter}>
              <div className={styles.nextFooterInfo}>
                <span className={styles.nextEyebrow}>
                  {isBn ? 'পরবর্তী গল্প পড়ুন' : 'Up Next in Chronicles'}
                </span>
                <h4 className={styles.nextTitle}>
                  {isBn ? nextPost.titleBn : nextPost.title}
                </h4>
              </div>
              <button
                onClick={() => {
                  onSelectPost(nextPost);
                  const scrollable = document.querySelector(`.${styles.scrollArea}`);
                  if (scrollable) scrollable.scrollTop = 0;
                }}
                className={styles.nextStoryBtn}
              >
                <span>{isBn ? 'পরবর্তী পড়ুন' : 'Read Next'}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

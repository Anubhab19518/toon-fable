'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { STUDIO_INFO } from '@/data/fallbackData';
import { Sparkles, MapPin, Phone, Mail, Instagram, Facebook, Youtube, Send, CheckCircle } from 'lucide-react';
import styles from './AboutStudio.module.css';

export const AboutStudio: React.FC = () => {
  const { isBn, isEn, isDual } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const pillars = [
    {
      title: 'Bengali Folklore Reimagined',
      titleBn: 'বাংলার সমৃদ্ধ লোকগাথা',
      desc: 'Reviving timeless regional ghost lore, rural oral myths, and dark fables through modern cinematic storytelling.',
      descBn: 'গ্রামবাংলার প্রাচীন ভুতুড়ে উপকথা আর লোকগাথাকে আধুনিক অ্যানিমেশনের মাধ্যমে নতুন প্রজন্মের কাছে পৌঁছে দেওয়া।',
    },
    {
      title: 'Original Voice & Soundscapes',
      titleBn: 'মৌলিক কণ্ঠ ও আবহ সঙ্গীত',
      desc: 'Authentic Bengali voice actors paired with immersive, spine-chilling atmospheric acoustic composition.',
      descBn: 'অভিজ্ঞ বাঙালি কণ্ঠশিল্পী ও নিপুণ আবহ শব্দের মেলবন্ধনে তৈরি জীবন্ত গল্পকথার সুর।',
    },
    {
      title: 'Connected Animation Universe',
      titleBn: 'পরস্পর সংযুক্ত গল্পের ভুবন',
      desc: 'Building recurring heroes, spirits, and sprawling mystery arcs that expand into comics, storybooks, and lore.',
      descBn: 'একটি পূর্ণাঙ্গ বাংলা অ্যানিমেশন ইউনিভার্স— যেখানে রয়েছে চেনা চরিত্র, রহস্যময় অভিযান ও রোমাঞ্চ।',
    },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      {/* Background Glows */}
      <div className="ambient-glow-forest" style={{ top: '15%', right: '-8%' }} />
      <div className="ambient-glow-amber" style={{ bottom: '10%', left: '-8%' }} />

      <div className="site-container">
        {/* Main Brand Manifesto Layout */}
        <div className={styles.manifestoGrid}>
          {/* Left Narrative Column */}
          <div className={styles.manifestoLeft}>
            <div className="section-tag">
              <Sparkles />
              <span>{isBn ? 'আমাদের দর্শন ও যাত্রা' : 'STUDIO MANIFESTO'}</span>
            </div>

            <h2 className="section-title">
              Crafting Bengal&apos;s Animated Mythos
            </h2>

            <p className={styles.manifestoQuote}>
              &ldquo;{isBn
                ? 'টুন ফেবল বাংলা শুধু আরেকটি ভূতের গল্প বলে না— এটি গড়ে তুলছে এমন এক অ্যানিমেশন ভুবন যেখানে প্রতিটি পর্ব উন্মোচন করে নতুন বিস্ময়।'
                : 'Toon Fable Bangla isn\'t simply telling another ghost story. It is building a world of Bengali animated stories where every episode brings a new mystery.'}&rdquo;
            </p>

            <p className={styles.manifestoBody}>
              {isBn
                ? 'আমাদের লক্ষ্য হলো বাংলার শতাব্দীপ্রাচীন রূপকথা, অতিলৌকিক গাথা ও রহস্যকাহিনিকে আধুনিক ডিজিটাল প্রজন্মের উপযোগী আকর্ষণীয় এবং আন্তর্জাতিক মানের অ্যানিমেশনে রূপ দেওয়া।'
                : 'Born in Kolkata, Toon Fable Bangla merges rich heritage with cutting-edge visual craft. We explore the shadows of rural Bengal, the majesty of ancient banyan trees, and the human emotions behind every folklore encounter.'}
            </p>

            {/* 3 Pillars List */}
            <div className={styles.pillarsList}>
              {pillars.map((pillar, idx) => (
                <div key={idx} className={styles.pillarItem}>
                  <div className={styles.pillarIndex}>0{idx + 1}</div>
                  <div className={styles.pillarText}>
                    <h4 className={styles.pillarTitle}>
                      {isBn ? pillar.titleBn : isEn ? pillar.title : `${pillar.title} • ${pillar.titleBn}`}
                    </h4>
                    <p className={styles.pillarDesc}>
                      {isBn ? pillar.descBn : pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual & Studio Card Column */}
          <div className={styles.manifestoRight}>
            <div className={styles.brandHeroCard}>
              <div className={styles.brandCardImgWrapper}>
                <Image
                  src="/toon-fable-Picsart-BackgroundRemover.jpeg"
                  alt="Toon Fable Studio"
                  width={140}
                  height={140}
                  className={styles.brandLogoBig}
                />
              </div>

              <h3 className={styles.studioCardTitle}>Toon Fable Bangla</h3>
              <span className={styles.studioTagline}>
                {isBn ? 'কল্পনাতীত সব গল্প' : 'Stories Beyond Imagination'}
              </span>

              {/* Studio HQ Info */}
              <div id="contact" className={styles.contactDetails}>
                <div className={styles.contactRow}>
                  <MapPin size={20} className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>{isBn ? 'স্টুডিও ঠিকানা:' : 'Studio Headquarters:'}</span>
                    <p className={styles.contactVal}>{STUDIO_INFO.hq}</p>
                  </div>
                </div>

                <div className={styles.contactRow}>
                  <Phone size={18} className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>{isBn ? 'ফোন নম্বর:' : 'Direct Phone:'}</span>
                    <a href={`tel:${STUDIO_INFO.phone}`} className={styles.contactLink}>{STUDIO_INFO.phone}</a>
                  </div>
                </div>

                <div className={styles.contactRow}>
                  <Mail size={18} className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>{isBn ? 'ইমেইল যোগাযোগ:' : 'Official Inquiries:'}</span>
                    <a href={`mailto:${STUDIO_INFO.email}`} className={styles.contactLink}>{STUDIO_INFO.email}</a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className={styles.socialsGroup}>
                <a
                  href={STUDIO_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  title="YouTube Channel"
                >
                  <Youtube size={19} />
                  <span>YouTube</span>
                </a>
                <a
                  href={STUDIO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  title="Instagram"
                >
                  <Instagram size={19} />
                  <span>Instagram</span>
                </a>
                <a
                  href={STUDIO_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  title="Facebook"
                >
                  <Facebook size={19} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Quick Contact / Story Suggestion Form */}
            <div className={styles.suggestionFormBox}>
              <h4 className={styles.formTitle}>
                {isBn ? 'গল্পের ভাবনা বা বার্তা পাঠান' : 'Share a Folklore Tale or Inquiry'}
              </h4>
              
              {formSubmitted ? (
                <div className={styles.formSuccess}>
                  <CheckCircle size={22} className={styles.successIcon} />
                  <span>{isBn ? 'ধন্যবাদ! আপনার বার্তাটি আমাদের স্টুডিওতে পৌঁছেছে।' : 'Thank you! Your story suggestion has been received by our studio.'}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <input
                    type="text"
                    required
                    placeholder={isBn ? 'আপনার নাম' : 'Your Name'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.input}
                  />
                  <input
                    type="email"
                    required
                    placeholder={isBn ? 'আপনার ইমেইল' : 'Your Email'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.input}
                  />
                  <textarea
                    rows={3}
                    required
                    placeholder={isBn ? 'আপনার প্রিয় ভুতুড়ে অভিজ্ঞতা বা গল্পের ভাবনা লিখুন...' : 'Write your ghost story idea or studio message...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={styles.textarea}
                  />
                  <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                    <Send size={16} />
                    <span>{isBn ? 'বার্তা পাঠান' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

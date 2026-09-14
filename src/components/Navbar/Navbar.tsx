'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Play } from 'lucide-react';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#stories', label: 'Stories' },
    { href: '#characters', label: 'Characters' },
    { href: '#genres', label: 'Genres' },
    { href: '#episodes', label: 'Episodes' },
    { href: '#about', label: 'About' },
    { href: '#community', label: 'Community' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`site-container ${styles.headerInner}`}>
        {/* Franchise Logo */}
        <Link href="#home" className={styles.logoLink}>
          <div className={styles.logoBadge}>
            <Image
              src="/toon-fable.jpeg"
              alt="Toon Fable Bangla"
              width={46}
              height={46}
              className={styles.logoImg}
              priority
            />
          </div>
          <div className={styles.brandTitleWrap}>
            <span className={styles.brandMain}>TOON FABLE</span>
            <span className={styles.brandSub}>BANGLA</span>
          </div>
        </Link>

        {/* Clean Entertainment Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className={styles.navItem}>
              <span className={styles.navText}>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className={styles.headerRight}>
          {/* Prominent Watch Stories Pill CTA */}
          <a href="#episodes" className={styles.watchPill}>
            <div className={styles.playIconCircle}>
              <Play size={14} className={styles.playIcon} />
            </div>
            <span>WATCH STORIES</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileMenuToggle}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNavLinks}>
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.mobileNavItem}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className={styles.mobileBottomActions}>
            <a
              href="#episodes"
              className="btn-franchise-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Play size={18} />
              <span>WATCH STORIES</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

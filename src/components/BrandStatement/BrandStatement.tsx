'use client';

import React from 'react';
import styles from './BrandStatement.module.css';

export const BrandStatement: React.FC = () => {
  return (
    <section className={styles.statementSection}>
      <div className={`site-container ${styles.statementInner}`}>
        <blockquote className={styles.bigQuote}>
          “Every episode brings a new mystery, every character has a story, and every ending leaves something to remember.”
        </blockquote>

        <div className={styles.brandAuthor}>
          <span className={styles.authorName}>TOON FABLE BANGLA</span>
          <span className={styles.authorSub}>Stories Beyond Imagination</span>
        </div>
      </div>
    </section>
  );
};

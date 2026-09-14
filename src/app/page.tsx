'use client';

import React, { useEffect } from 'react';
import { Hero } from '@/components/Hero/Hero';
import { WhatIsToonFable } from '@/components/BrandIntro/WhatIsToonFable';
import { StoryCategories } from '@/components/Categories/StoryCategories';
import { HorrorWorld } from '@/components/HorrorWorld/HorrorWorld';
import { MysterySection } from '@/components/Mystery/MysterySection';
import { CharacterRoster } from '@/components/Characters/CharacterRoster';
import { WorldOfToonFable } from '@/components/WorldTiles/WorldOfToonFable';
import { LatestEpisodes } from '@/components/Episodes/LatestEpisodes';
import { BengaliStorytelling } from '@/components/CulturalRoot/BengaliStorytelling';
import { JoinTheStory } from '@/components/Community/JoinTheStory';
import { BrandStatement } from '@/components/BrandStatement/BrandStatement';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  // Ensure the page always starts at the Hero top section on initial load and refreshes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      
      // If there is an anchor hash on full reload, clear it and scroll to top
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-cream)' }}>
      {/* Section 01: Fullscreen Video Hero with Floating Franchise Navbar, Award Seal & Promo Card */}
      <Hero />

      {/* Section 02: What is Toon Fable? (Editorial Brand Story) */}
      <WhatIsToonFable />

      {/* Section 03: Discover Our Stories (Discover What's New 3-Card Landscape Grid) */}
      <StoryCategories />

      {/* Section 04: Horror World (Atmospheric Midnight Section & Story Slider) */}
      <HorrorWorld />

      {/* Section 05: Mystery & Suspense (Unfolding Secret Case Cards) */}
      <MysterySection />

      {/* Section 06: Meet the Characters (Meet Our Characters with Character Cutouts) */}
      <CharacterRoster />

      {/* Section 07: The World of Toon Fable (4-Grid Bento Layout) */}
      <WorldOfToonFable />

      {/* Section 08: Latest Stories / Episodes (Featured Cinema Showcase + YouTube Grid) */}
      <LatestEpisodes />

      {/* Section 09: Rooted in Bengali Storytelling (Cultural Celebration) */}
      <BengaliStorytelling />

      {/* Section 10: Join the Story (Community, Social Hub & Audience Poll) */}
      <JoinTheStory />

      {/* Section 11: Brand Statement (Cinematic Franchise Quote) */}
      <BrandStatement />

      {/* Franchise Footer */}
      <Footer />
    </main>
  );
}

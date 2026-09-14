'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isBn: boolean;
  isEn: boolean;
  isDual: boolean;
  t: (en: string, bn?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Enforce English mode
  useEffect(() => {
    try {
      localStorage.setItem('toon_fable_lang', 'en');
    } catch {
      // ignore
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('toon_fable_lang', lang);
    } catch {
      // ignore
    }
  };

  const isBn = language === 'bn';
  const isEn = language === 'en';
  const isDual = language === 'dual';

  const t = (en: string, bn?: string): string => {
    if (language === 'bn') return bn || en;
    return en;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        isBn,
        isEn,
        isDual,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

import React from 'react';
import '../styles/HeroSection.css';
import { useTranslation } from 'react-i18next';
const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          {t('hero')}
        </h1>
        <p className="hero-subtitle">
          {t('hero2')}
        </p>
        <button className="btn btn-lg">
          {t('hero3')}
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 
import React from 'react';
import '../styles/AboutSection.css';
import { useTranslation } from 'react-i18next';
const AboutSection = () => {
   const { t } = useTranslation();
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">{t("miss")}</h2>
        <p className="about-text">
          {t("miss1")}
        </p>
        <p className="about-text">
          {t("miss2")}
        </p>
        <button className="about-button">
          {t("learn")}
        </button>
      </div>
    </section>
  );
};

export default AboutSection; 
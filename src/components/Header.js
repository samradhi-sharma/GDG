import React, { useState } from 'react';
import '../styles/Header.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './language-selector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  return (

    <header className="header">
      <div className="container header-container">
        {/* Logo */}
        <div className="logo">
          <svg className="logo-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.649 5.286a9.936 9.936 0 0 0-3.667-2.283 10.111 10.111 0 0 0-5.143-.108c-1.646.398-3.125 1.195-4.432 2.37C3.161 7.33 1.837 9.811 1.837 12.7c0 1.46.331 2.894.996 4.238.63 1.272 1.482 2.395 2.555 3.358 1.125 1.006 2.42 1.805 3.87 2.355a11.532 11.532 0 0 0 4.226.786c1.13 0 2.233-.14 3.295-.419 1.063-.28 2.077-.699 3.036-1.252a.726.726 0 0 0 .31-.968.752.752 0 0 0-.976-.304a9.764 9.764 0 0 1-2.53 1.046c-.906.232-1.853.348-2.826.348-1.198 0-2.383-.213-3.525-.635-1.142-.422-2.188-1.024-3.126-1.794-.938-.771-1.693-1.695-2.246-2.75-1.379-2.63-1.379-5.698 0-8.33a8.713 8.713 0 0 1 1.632-2.153 8.568 8.568 0 0 1 2.357-1.61 8.899 8.899 0 0 1 3.273-.722 9.218 9.218 0 0 1 2.674.266 8.89 8.89 0 0 1 2.417.965c.763.422 1.459.94 2.088 1.549a.751.751 0 0 0 1.059-.039.726.726 0 0 0-.04-1.047 10.49 10.49 0 0 0-2.48-1.845z" />
          </svg>
          <span className="logo-text">HealthConnect</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
  <a href="#home" className="nav-link">{t("h")}</a>
  <a href="#about" className="nav-link">{t("a")}</a>
  <a href="#services" className="nav-link">{t("s")}</a>
  <a href="#contact" className="nav-link">{t("c")}</a>
  <a href="#donate" className="nav-link">{t("d")}</a>
  <div className="btn-lang-wrapper">
    <button className="btn btn-help">{t("gh")}</button>
    <LanguageSelector />
  </div>
</nav>

      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <a href="#home" className="mobile-nav-link">{t("h")}</a>
            <a href="#about" className="mobile-nav-link">{t("a")}</a>
            <a href="#services" className="mobile-nav-link">{t("s")}</a>
            <a href="#contact" className="mobile-nav-link">{t("c")}</a>
            <a href="#donate" className="mobile-nav-link">{t("d")}</a>
            <div className="btn-lang-wrapper">
              <button className="btn btn-help">{t("gh")}</button>
              <LanguageSelector />
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 
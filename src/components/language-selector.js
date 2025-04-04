import React from 'react';
import i18next from 'i18next';

const languages = [
  { code: 'en', lang: 'English' },
  { code: 'hi', lang: 'Hindi' },
  { code: 'bn', lang: 'বাংলা' },
  { code: 'ta', lang: 'தமிழ்' },
  { code: 'te', lang: 'తెలుగు' },
  { code: 'ml', lang: 'മലയാളം' },
  { code: 'mr', lang: 'मराठी' },
  { code: 'gu', lang: 'ગુજરાતી' },
];

const LanguageSelector = () => {
  const handleChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleChange} className="language-select">
      {languages.map((lng) => (
        <option key={lng.code} value={lng.code}>
          {lng.lang}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;

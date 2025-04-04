import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Bringing Healthcare Closer to Underserved Communities
        </h1>
        <p className="hero-subtitle">
          Innovative, scalable, and sustainable solutions to improve access to healthcare.
        </p>
        <button className="btn btn-lg">
          Explore Solutions
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 
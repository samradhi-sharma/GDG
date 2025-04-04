import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">About Our Mission</h2>
        <p className="about-text">
          At HealthConnect, we believe that access to quality healthcare is a fundamental right, not a privilege. 
          Our mission is to bridge the healthcare gap in underserved communities through technology, 
          education, and community-based initiatives. We work with local healthcare providers, 
          community organizations, and technology partners to develop sustainable solutions that 
          address the unique challenges faced by each community.
        </p>
        <p className="about-text">
          Our vision is a world where everyone has equal access to the healthcare they need, 
          regardless of their geographic location, socioeconomic status, or other barriers. 
          We're committed to empowering individuals and communities with the resources, 
          knowledge, and tools they need to take control of their health.
        </p>
        <button className="about-button">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutSection; 
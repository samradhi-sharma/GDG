import React from 'react';
import '../styles/DoctorCards.css';
import { useTranslation } from 'react-i18next';
const DoctorCards = ({ isVisible, onClose }) => {
  const { t } = useTranslation();
  const doctors = [
    {
      id: 1,
      name: t('sj'),
      specialization: t('cardio'),
      rating: 4.8,
      price: '$150',
      image: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      id: 2,
      name: t('mc'),
      specialization: t('neuro'),
      rating: 4.9,
      price: '$180',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: t('ap'),
      specialization: t('ped'),
      rating: 4.7,
      price: '$120',
      image: 'https://randomuser.me/api/portraits/women/67.jpg'
    },
    {
      id: 4,
      name: t('rw'),
      specialization: t('or'),
      rating: 4.6,
      price: '$220',
      image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    {
      id: 5,
      name: t('er'),
      specialization: t('dr'),
      rating: 4.9,
      price: '$160',
      image: 'https://randomuser.me/api/portraits/women/23.jpg'
    },
    {
      id: 6,
      name: t('dw'),
      specialization: t('ps'),
      rating: 4.7,
      price: '$190',
      image: 'https://randomuser.me/api/portraits/men/78.jpg'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="doctor-cards-overlay">
      <div className="doctor-cards-container">
        <div className="doctor-cards-header">
          <h2>Our Healthcare Professionals</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="doctor-cards-grid">
          {doctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-card-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              <div className="doctor-card-content">
                <h3>{doctor.name}</h3>
                <p className="doctor-specialization">{doctor.specialization}</p>
                <div className="doctor-rating">
                  <span className="star">★</span>
                  <span>{doctor.rating}</span>
                </div>
                <div className="doctor-price">{doctor.price} per session</div>
                <button className="book-button">Book Appointment</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorCards; 
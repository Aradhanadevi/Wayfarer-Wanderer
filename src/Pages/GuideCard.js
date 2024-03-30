import React from 'react';
import '../components/GuideCard.css';

const GuideCard = ({ guide, onSelect, isSelected }) => {

  const handleBooking = () => {
  
  };

  return (
    <div className={`guide-card ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(guide)}>
      <img src={guide.imgUrl} alt={guide.name} className='profile'></img>
      <div className="content-box">
        <h3>{guide.name}</h3>
        <p>Age: {guide.age}</p>
        <p>Specialisation: {guide.specialisation}</p>
        <p>Available Slots: {guide.availableSlots}</p>
      </div>
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default GuideCard;

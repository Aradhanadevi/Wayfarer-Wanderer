import React from 'react';
import '../components/Hotel.css';

function Hotel() {
  return (
    <div className='main-body'>
    <div className="hotel-search-container">
      <h2>Find Your Dream Hotel</h2>
      <div className="search-form">
        <div className="form-group">
          <label htmlFor="location" className='text-hotel'>Location:</label>
          <input type="text" id="location" placeholder="Enter destination" />
        </div>
        <div className="form-group">
          <label htmlFor="check-in" className='text-hotel'>Check-in Date:</label>
          <input type="date" id="check-in" />
        </div>
        <div className="form-group">
          <label htmlFor="check-out" className='text-hotel'>Check-out Date:</label>
          <input type="date" id="check-out" />
        </div>
        <div className="form-group">
          <label htmlFor="guests" className='text-hotel'>Guests:</label>
          <select id="guests">
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price-range" className='text-hotel'>Price Range:</label>
          <input type="range" id="price-range" min="0" max="1000" step="50" />
          {/* This input could be replaced with a more advanced slider component */}
        </div>
        <button className="search-btn">Search</button>
      </div>
    </div>
    </div>
  );
}

export default Hotel;

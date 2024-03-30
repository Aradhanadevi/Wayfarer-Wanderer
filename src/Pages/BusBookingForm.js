// BusBookingForm.js
import React, { useState } from 'react';

const BusBookingForm = () => {
  // State variables to store user input
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data here, e.g., send it to a backend server
    console.log('Origin:', origin);
    console.log('Destination:', destination);
    console.log('Date:', date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Origin:
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </label>
      <br />
      <label>
        Destination:
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Book Bus</button>
    </form>
  );
};

export default BusBookingForm;

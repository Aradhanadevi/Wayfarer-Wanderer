import React, { useState } from 'react';

const TrainBookingForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
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
      <button type="submit">Book Train</button>
    </form>
  );
};

export default TrainBookingForm;

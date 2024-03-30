import React, { useState } from 'react';
import '../components/Transport.css';
import TrainBookingForm from './TrainBookingForm'; 
import BusBookingForm from './BusBookingForm';

function Transport() {
  const [transportationOptions, setTransportationOptions] = useState([
    { id: 1, name: 'Bus', description: 'Exclusive bus travels provided to people booking from this website' },
    { id: 2, name: 'Train', description: 'Public transportation by train.' },
  ]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [result, setResult] = useState('');
  const [showTrainBookingForm, setShowTrainBookingForm] = useState(false); 
  const [showBusBookingForm, setShowBusBookingForm] = useState(false);
  const [travelDetailsForBooking, setTravelDetailsForBooking] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option.name === 'Train') {
      setShowTrainBookingForm(true);
      setShowBusBookingForm(false); 
    } else if (option.name === 'Bus') {
      setShowTrainBookingForm(false); 
      setShowBusBookingForm(true);
    } else {
      setShowTrainBookingForm(false);
      setShowBusBookingForm(false);
    }
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSearch = () => {
    if (origin && destination) {
      const travelDetails = `Traveling from ${origin} to ${destination} by ${selectedOption.name}`;
      setResult(travelDetails);
      setTravelDetailsForBooking(travelDetails); // New state to store concatenated values
    } else {
      setResult('Please enter both origin and destination.');
    }
  };

  const renderTransportationOptions = () => {
    return transportationOptions.map(option => (
      <div key={option.id} className={`travel-block ${selectedOption === option ? 'selected' : ''}`} onClick={() => handleOptionSelect(option)}>
        <h3 className='travel-medium'>{option.name}</h3>
        <p className='travel-info'>{option.description}</p>
      </div>
    ));
  };

  return (
    <div className='main-container'>
      <h1 className='main-heading'>Transportation Options</h1>
      <div className='options-container'>
        {renderTransportationOptions()}
      </div>
      {selectedOption && (
        <div className='search-form'>
          <div className="origin-destination">
            <input type='text' placeholder='Origin' value={origin} onChange={handleOriginChange} />
            <input type='text' placeholder='Destination' value={destination} onChange={handleDestinationChange} />
          </div>
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
      {result && (
        <div className='search-result'>
          <p>{result}</p>
        </div>
      )}
      {showTrainBookingForm && <TrainBookingForm />} 
      {showBusBookingForm && <BusBookingForm />}
    </div>
  );
}

export default Transport;

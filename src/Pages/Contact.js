import React, { useState } from 'react';

import './Contact.css';
const Contact = () => {
const [formData, setFormData] = useState({
    name: "", 
    email: "",
    age: "",
    phone: "",
    purpose: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    budget: "",
    accommodationType: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="portfolio-page">  
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Travel Inquiry Form</h5>
                <p>Please fill out the form below to inquire about travel booking:</p>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
  <label htmlFor="name">Name:</label>
  <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
</div>
<div className="form-group">
  <label htmlFor="email">Email:</label>
  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
</div>
<div className="form-group">
  <label htmlFor="age">Age:</label>
  <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
</div>
<div className="form-group">
  <label htmlFor="phone">Phone Number:</label>
  <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
</div>
<div className="form-group">
  <label htmlFor="purpose">Purpose of Travel:</label>
  <textarea className="form-control" id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required />
</div>
<div className="form-group">
  <label htmlFor="destination">Destination:</label>
  <input type="text" className="form-control" id="destination" name="destination" value={formData.destination} onChange={handleChange} required />
</div>
<div className="form-group">
  <label htmlFor="departureDate">Departure Date:</label>
  <input type="date" className="form-control" id="departureDate" name="departureDate" value={formData.departureDate} onChange={handleChange} required />
</div>
<div className="form-group">
  <label htmlFor="returnDate">Return Date:</label>
  <input type="date" className="form-control" id="returnDate" name="returnDate" value={formData.returnDate} onChange={handleChange} required />
</div>
<div className="form-group">
  <label htmlFor="budget">Budget:</label>
  <input type="text" className="form-control" id="budget" name="budget" value={formData.budget} onChange={handleChange} required />
</div>
<div className="form-group">
  <label htmlFor="accommodationType">Accommodation Type:</label>
  <select className="form-control" id="accommodationType" name="accommodationType" value={formData.accommodationType} onChange={handleChange} required>
    <option value="">Select</option>
    <option value="Hotel">Hotel</option>
    <option value="Hostel">Hostel</option>
    <option value="Airbnb">Airbnb</option>
    <option value="Resort">Resort</option>
  </select>
</div>
<button type="submit" className="btn btn-primary">Submit</button>

                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };

export default Contact;
import React from 'react';

import './CustomerDetails.css'; // Import CSS file for styling
import Adminheader from './Adminheader';

const CustomerDetails = () => {
  // Sample data (replace with your actual data)
  const customers = [
    {
      id: 1,
      name: 'John Doe',
      city: 'New York',
      product: 'Widget A',
      price: '$100',
      paid: 'Yes'
    },
    {
      id: 2,
      name: 'Jane Smith',
      city: 'Los Angeles',
      product: 'Widget B',
      price: '$150',
      paid: 'No'
    }
    // Add more customer objects as needed
  ];

  return (
    
      <div className="customer-details">
        <Adminheader/>
        {/* Render headings */}
        <div className="customer-row heading-row">
          <div className="customer-cell"><strong>Name</strong></div>
          <div className="customer-cell"><strong>City</strong></div>
          <div className="customer-cell"><strong>Product</strong></div>
          <div className="customer-cell"><strong>Price</strong></div>
          <div className="customer-cell"><strong>Paid</strong></div>
        </div>
        {/* Render customer details */}
        {customers.map(customer => (
          <div key={customer.id} className="customer-row">
            <div className="customer-cell">{customer.name}</div>
            <div className="customer-cell">{customer.city}</div>
            <div className="customer-cell">{customer.product}</div>
            <div className="customer-cell">{customer.price}</div>
            <div className="customer-cell">{customer.paid}</div>
          </div>
        ))}
      </div>
  );
}

export default CustomerDetails;

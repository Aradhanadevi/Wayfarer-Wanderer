import React from 'react';
import './CustomerDetails.css'; // Import CSS file for styling
import Adminheader from './Adminheader';

const Query = () => {
  const customers = [
    {
      id: 1,
      name: 'John Doe',
      que: 'What are you after service?',
      reply: '',
   
    },
    {
      id: 2,
      name: 'Jane Smith',
      que: 'Can i get any discount on product?',
      reply: '',
    }
    // Add more customer objects as needed
  ];

  return (
    <div className="customer-details">
      {/* Render headings */}
      <Adminheader/>
      <div className="customer-row heading-row">
        <div className="customer-cell"><strong>Name</strong></div>
        <div className="customer-cell"><strong>Question</strong></div>
        <div className="customer-cell"><strong>Reply</strong></div>
      </div>
      {/* Render customer details */}
      {customers.map(customer => (
        <div key={customer.id} className="customer-row">
          <div className="customer-cell">{customer.name}</div>
          <div className="customer-cell">{customer.que}</div>
          <div className="customer-cell">{customer.reply}</div>

        </div>
      ))}
    </div>
  );
}

export default Query;

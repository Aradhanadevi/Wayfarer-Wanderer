import React from 'react';
import Adminheader from './Adminheader';
function Visitors() {
  const visitorsData = {
    totalVisitors: 100,
    ordersPlaced: 50,
    delivered: 40,
    userRating: 4.5
  };

  return (
    <>
      <Adminheader />
      <div className="visitors-container">
        <h2>Visitors Data</h2>
        <div className="visitors-table">
          <div className="visitors-row">
            <div className="visitors-label">Total visitors:</div>
            <div className="visitors-value">{visitorsData.totalVisitors}</div>
          </div>
          <div className="visitors-row">
            <div className="visitors-label">Orders placed:</div>
            <div className="visitors-value">{visitorsData.ordersPlaced}</div>
          </div>
          <div className="visitors-row">
            <div className="visitors-label">Delivered:</div>
            <div className="visitors-value">{visitorsData.delivered}</div>
          </div>
          <div className="visitors-row">
            <div className="visitors-label">Rating of user:</div>
            <div className="visitors-value">{visitorsData.userRating}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visitors;

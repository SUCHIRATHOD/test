import React from 'react';
import '../styles/Customers.css'; // Import the CSS file

const Customers = () => {
  const images = [
    "https://assets.licious.in/oms/771bdb4d-95c9-fc34-2a5a-2da7a0b3c5a3/original/1714641102145.png",
    "https://assets.licious.in/oms/5bf3f0ef-70be-4498-4acb-cee8ad2bbba5/original/1714641145708.png",
    "https://assets.licious.in/oms/bd10cee8-f8ba-96a1-50ed-465bf0986008/original/1714641062748.png",
    "https://assets.licious.in/oms/af88fb24-cc35-10a8-0078-a9dfd8f38efb/original/1714640932931.png",
    "https://assets.licious.in/oms/cd63a44b-a5d9-ab51-2e9e-385afe535a86/original/1714641007912.png"
  ];

  return (
    <div className="bestsellers-section">
      <h2 className="bestsellers-title">What Our Customers Say</h2>
      <p className="bestsellers-subtitle">Hear it directly from people like you</p>
      <div className="bestsellers-container">
        {images.map((image, index) => (
          <div className="bestsellers-card" key={index}>
            <img src={image} alt={`Product ${index + 1}`} className="bestsellers-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;

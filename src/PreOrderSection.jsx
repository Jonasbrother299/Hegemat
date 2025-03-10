import React, { useState } from 'react';
import PreOrderModal from './PreOrderModal'; // Your modal component

function PreOrderSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePreOrderSubmit = (data) => {
    // Process your pre-order submission (send data to a backend, etc.)
    console.log('Pre-order data:', data);
  };

  return (
    <section className="preorder-section">
      <div className="preorder-container">
        <div className="preorder-image">
          <img src="../public/ProductImage.jpg" alt="Product Preview" />
        </div>
        <div className="preorder-details">
          <h2>Pre-Order Now</h2>
          <h3>Experience Innovation Firsthand</h3>
          <p className="preorder-price">$299.99</p>
          <button className="preorder-button" onClick={() => setModalOpen(true)}>
            Pre-Order
          </button>
        </div>
      </div>
      {isModalOpen && (
        <PreOrderModal 
          onClose={() => setModalOpen(false)} 
          onSubmit={handlePreOrderSubmit} 
        />
      )}
    </section>
  );
}

export default PreOrderSection;
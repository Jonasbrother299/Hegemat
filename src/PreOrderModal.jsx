import React, { useState } from 'react';


function PreOrderModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // You can send data to your backend or email service
    onClose();
  };

  return (
    <div className="preorder-modal-overlay">
      <div className="preorder-modal">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Pre-Order Now!</h2>
        <p>Be among the first to get our innovative feeding machine.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Shipping Address:
            <textarea 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
            />
          </label>
          <button type="submit">Submit Pre-Order</button>
        </form>
      </div>
    </div>
  );
}

export default PreOrderModal;
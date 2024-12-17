import React, { useState } from "react";
import "../style/OrderModal.css";

const OrderModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    items: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Order</h2>
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
            Items:
            <input
              type="text"
              name="items"
              value={formData.items}
              onChange={handleChange}
              placeholder="Comma-separated items"
              required
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </label>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;

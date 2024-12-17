import React, { useState } from "react";
import "./App.css";
import OrderTable from "./components/OrderTable";
import OrderModal from "./components/OrderModal"; 
import { addOrder } from "./api/axiosConfig"; 

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddOrder = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const handleSaveOrder = async (newEmployee) => {
    try {
      await addOrder(newEmployee); 
      setIsModalOpen(false); 
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>List Orders</h1>
      <button className="add-employee-btn" onClick={handleAddOrder}>
        Add Order
      </button>
      <OrderTable />
      {isModalOpen && (
        <OrderModal
          onClose={handleCloseModal}
          onSave={handleSaveOrder}
        />
      )}
    </div>
  );
};

export default App;

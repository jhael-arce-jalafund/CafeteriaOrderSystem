import React, { useState } from "react";
import "./App.css";
import OrderTable from "./components/OrderTable";
import Header from "./components/Header"; 
import OrderModal from "./components/OrderModal"; 

import { addOrder } from "./request/OrderRequest"

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddOrder = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const handleSaveOrder = async (newOrder) => {
    try {
      const savedOrder = await addOrder(newOrder); 
      setIsModalOpen(false); 
      alert("Order added successfully");
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Error saving order");
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  return (
    <div className="app-container">
      <Header onSearch={handleSearch} onAddOrder={handleAddOrder} />
      <OrderTable searchTerm={searchTerm} />
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

import React from "react";
import "../style/Header.css";

const Header = ({ onAddOrder }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Coffe&Te</h1>
      </div>
      <div className="search-main-container">
        <div className="search-searcher-container">
          <input type="text" placeholder="Search orders..." />
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M10 2a8 8 0 105.293 14.293l5.707 5.707 1.414-1.414-5.707-5.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
            </svg>
          </button>
        </div>
      </div>
      <button className="add-order-btn" onClick={onAddOrder}>
        Add Order
      </button>
    </header>
  );
};

export default Header;

import React from "react";
import "../style/Button.css";

const Button = ({ type, onClick }) => {
  const buttonText = {
    update: "Update",
    delete: "Delete",
    add: "Add Order",
  };

  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {buttonText[type]}
    </button>
  );
};

export default Button;

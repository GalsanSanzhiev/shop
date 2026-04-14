import React from "react";

const Card = ({ image, price, name, onClick, onAddToCart }) => {
  return (
    <div className="card">
      <div className="card-clickable" onClick={onClick}>
        <img className="cardImg" src={image} alt={name} />
        <h2 className="cardName">{name}</h2>
        <p className="price">{price}</p>
      </div>
      <button 
        className="cardButton" 
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart();
        }}
      >
        Buy now
      </button>
    </div>
  );
};

export default Card;
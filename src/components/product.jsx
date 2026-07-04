import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Product = ({ products, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || null,
  );
  const [hoverColor, setHoverColor] = useState(null);

  if (!product) {
    return (
      <div>
        <h1>Товар не найден</h1>
      </div>
    );
  }

  const currentColor = hoverColor || selectedColor;
  const currentImage = product.colorImages[currentColor];

  const getColorCode = (colorName) => {
    const colors = {
      orange: "#FF6B35",
      black: "#161339",
      white: "#d8d8d8",
      gold: "#F5C542",
      purple: "#3e2280",
      titan: "#8A8A8A",
      red: "#FF3B30",
      blue: "#007AFF",
      green: "#34C759",
      yellow: "#FFCC00",
      pink: "#FF2D55",
      silver: "#C0C0C0",
      spacegray: "#4A4A4A",
    };
    return colors[colorName.toLowerCase()] || "#CCCCCC";
  };

  return (
    <div className="productPage">
      <img className="pageImg" src={currentImage} alt="" />
      <div className="pageContent">
        <h1 className="pageTitle">{product.name}</h1>
        <p className="pagePrice">{product.price} ₽</p>

        <span className="colorSelect">Цвет</span>
        <div className="pageSelectColor">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              onMouseEnter={() => setHoverColor(color)}
              onMouseLeave={() => setHoverColor(null)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: getColorCode(color),
                border:
                  selectedColor === color
                    ? "3px solid #2a2833"
                    : "2px solid #e0e0e0",
                cursor: "pointer",
                transition: "all 0.2s ease",
                margin: "0 5px",
                boxShadow:
                  selectedColor === color
                    ? "0 0 0 2px white, 0 0 0 4px #000000"
                    : "none",
                transform: selectedColor === color ? "scale(1.1)" : "scale(1)",
              }}
              title={color} // всплывающая подсказка с названием цвета
            />
          ))}
        </div>

        <p className="pageDescr">
          <strong>Описание:</strong> {product.description}
          {product.characteristics}
        </p>
        <button className="pageButton" onClick={() => addToCart(product)}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default Product;

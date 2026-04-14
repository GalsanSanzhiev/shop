import React, { useEffect } from "react";

const ProductModal = ({ product, onClose, onAddToCart }) => {
  // Закрытие по Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Закрытие по клику вне окна
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!product) return null; // Важно! Проверка наличия продукта

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-product">
          <img src={product.image} alt={product.name} className="modal-image" />
          <div className="modal-info">
            <h2>{product.name}</h2>
            <p className="modal-price">${product.price}</p>
            <p className="modal-description">{product.description || "No description available"}</p>
            <button className="modal-add-to-cart" onClick={onAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
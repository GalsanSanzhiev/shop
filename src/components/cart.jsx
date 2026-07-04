import React from "react";


const Cart = ({ cart, onRemoveFromCart, onUpdateQuantity, onClose, onCheckout }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Корзина</h2>
          <button className="cart-close" onClick={onClose}>×</button>
        </div>
        
        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Корзина пуста</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">{item.price} ₽</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div className="cart-item-total">
                    <p>{(item.price * item.quantity).toFixed(2)} ₽</p>
                  </div>
                  <button className="cart-item-remove" onClick={() => onRemoveFromCart(item.id)}>
                    <img className="trash" src="./img/trash.png" alt="" />
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <strong>Общая стоимость:</strong> {getTotalPrice().toFixed(2)} ₽
              </div>
              <button className="cart-checkout" onClick={() => onCheckout(getTotalPrice())}>
                Оплатить
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
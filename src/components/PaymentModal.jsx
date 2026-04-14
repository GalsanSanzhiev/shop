import React, { useState } from "react";

const PaymentModal = ({ onClose, onConfirm, totalPrice }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (paymentMethod === "card") {
      if (!cardNumber || !expiryDate || !cvv) {
        alert("Please fill in all card details");
        return;
      }
      if (cardNumber.replace(/\s/g, '').length !== 16) {
        alert("Please enter a valid 16-digit card number");
        return;
      }
    }
    
    onConfirm(paymentMethod);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s/g, '').replace(/\D/g, '').slice(0, 16);
    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.slice(i, i + 4));
    }
    return parts.join(' ');
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) {
      return `${v.slice(0, 2)}/${v.slice(2)}`;
    }
    return v;
  };

  return (
    <div className="payment-overlay" onClick={onClose}>
      <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
        <button className="payment-close" onClick={onClose}>×</button>
        <h2>Payment Methods</h2>
        <p className="payment-total">Total: ${totalPrice.toFixed(2)}</p>
        
        <div className="payment-methods">
          <label className="payment-method">
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <img src="/img/mastercard.png" alt="Card" />
            Credit / Debit Card
          </label>
          
          <label className="payment-method">
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <img src="/img/PayPal_2.png" alt="PayPal" />
            PayPal
          </label>
          
          <label className="payment-method">
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <img src="/img/pay.png" alt="Cash" />
            Cash on Delivery
          </label>
        </div>

        {paymentMethod === "card" && (
          <form className="payment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                maxLength="19"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                  maxLength="5"
                />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="password"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                  maxLength="3"
                />
              </div>
            </div>
          </form>
        )}

        {paymentMethod === "paypal" && (
          <div className="payment-info">
            <p>You will be redirected to PayPal to complete your payment.</p>
          </div>
        )}

        {paymentMethod === "cash" && (
          <div className="payment-info">
            <p>Pay when you receive your order. Cash only.</p>
          </div>
        )}

        <button className="payment-confirm" onClick={handleSubmit}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
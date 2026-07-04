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
        alert("Пожалуйста заполните банковские данные");
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
        <h2>Способы оплаты</h2>
        <p className="payment-total">Стоимость: {totalPrice.toFixed(2)} ₽</p>
        
        <div className="payment-methods">
          <label className="payment-method">
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <img src="/img/mastercard.png" alt="Card" />
            Банковская карта
          </label>
          
          <label className="payment-method">
            <input
              type="radio"
              value="СБП"
              checked={paymentMethod === "СБП"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <img src="/img/sbp.png" alt="СБП" />
            СБП
          </label>

        </div>

        {paymentMethod === "card" && (
          <form className="payment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>номер карты</label>
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
                <label>дата истечения срока</label>
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

        <button className="payment-confirm" onClick={handleSubmit}>
          Подтвердить оплату
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
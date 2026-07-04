import React from "react";

const UserForm = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="userModal-overlay" onClick={handleOverlayClick}>
      <form
        className="userForm"
        action="URL"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="modalHeader">
          <h1>Войти</h1>
          <img
            onClick={onClose}
            className="closeImg"
            src="/img/close.png"
            alt=""
          />
        </div>

        <input className="userInput" type="text" placeholder="Имя" />
        <input className="userInput" type="tel" placeholder="Номер" />
        <input className="userInput" type="email" placeholder="Почта" />
        <button className="userModalButton">Войти</button>
        <span className="userRegistr">Зарегистрироваться</span>
      </form>
    </div>
  );
};

export default UserForm;

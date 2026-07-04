import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="firstColumn">
        <img src="/img/LogoWhite.png" alt="Изображение" />
        <p className="footerText">
          Мы — компания по продаже техники, расположенная в
          Новосибирске. 
        </p>
        <div className="contact">
          <img
            className="footerIcon"
            src="/img/telegram-logo.png"
            alt="Instagram"
          />
          <img className="footerIcon" src="/img/vk-logo.png" alt="Instagram" />
          <img
            className="footerIcon"
            src="/img/whatsapp-sign-logo.png"
            alt="Instagram"
          />
        </div>
        <p className="tel">+7 999 999 99 99</p>
      </div>
      <div className="secondColumn">
        <h3 className="footerTitleOfList">Услуги </h3>
        <ul className="footerList">
          <li className="footerText">Бонусная программа</li>
          <li className="footerText">Подарочные карты </li>
          <li className="footerText">Кредит и платежи</li>
          <li className="footerText">Договоры на оказание услуг</li>
          <li className="footerText">Оплата</li>
        </ul>
      </div>
      <div className="thirdColumn">
        <h3 className="footerTitleOfList">Помощь покупателю </h3>
        <ul className="footerList">
          <li className="footerText">Найти заказ</li>
          <li className="footerText">Условия доставки</li>
          <li className="footerText">Обмен и возврат товара</li>
          <li className="footerText">Гарантия </li>
          <li className="footerText">Часто задаваемые вопросы </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

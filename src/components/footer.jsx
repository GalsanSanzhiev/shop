import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="firstColumn">
        <img src="./img/LogoWhite.png" alt="Изображение" />
        <p className="footerText">
          We are a residential interior design firm located in Portland. Our
          boutique-studio offers more than
        </p>
        <div className="contact">
          <img className="footerIcon" src="./img/telegram-logo.png" alt="Instagram" />
          <img className="footerIcon" src="./img/vk-logo.png" alt="Instagram" />
          <img className="footerIcon" src="./img/whatsapp-sign-logo.png" alt="Instagram" />
      </div>
      <p className="tel">+7 999 999 99 99</p>
      </div>
      <div className="secondColumn">
            <h3 className="footerTitleOfList">Services</h3>
            <ul className="footerList">
                <li className="footerText" >Bonus program</li>
                <li className="footerText" >Gift cards</li>
                <li className="footerText" >Credit and payment</li>
                <li className="footerText" >Service contracts</li>
                <li className="footerText" >Non-cash account</li>
                <li className="footerText" >Payment</li>
            </ul>
      </div>
      <div className="thirdColumn">
            <h3 className="footerTitleOfList">Assistance to the buyer</h3>
            <ul className="footerList">
                <li className="footerText" >Find an order</li>
                <li className="footerText" >Terms of delivery</li>
                <li className="footerText" >Exchange and return of goods</li>
                <li className="footerText" >Guarantee</li>
                <li className="footerText" >Frequently asked questions</li>
                <li className="footerText" >Terms of use of the site</li>
            </ul>
      </div>
      
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="firstColumn">
        <img src="./img/LogoWhite.png" alt="" />
        <p className="footerText">
          We are a residential interior design firm located in Portland. Our
          boutique-studio offers more than
        </p>
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
      <div className="contact">

      </div>
    </div>
  );
};

export default Footer;

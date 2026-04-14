import React from "react";

const Main = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="main">
      <div className="mainText">
        <span className="mainSpan">Pro.Beyond.</span>
        <h1 className="mainTitle"><span className="mainTitle_span">IPhone 14</span> Pro</h1>
        <p className="mainDescr">
          Created to change everything for the better. For everyone
        </p>
        <button className="mainButton" onClick={scrollToProducts}>Shop Now</button>
      </div>
      <img className="mainImg" src="./img/Iphone.png" alt="Изображение" />
    </div>
  );
};

export default Main;
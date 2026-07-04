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
        <span className="mainSpan">Cyber рекомендует </span>
        <h1 className="mainTitle"><span className="mainTitle_span">IPhone 17</span> Pro</h1>
        <p className="mainDescr">
          Новый флагман для тех, кто ценит инновации
        </p>
        <button className="mainButton" onClick={scrollToProducts}>Купить сейчас</button>
      </div>
      <img className="mainImg" src="./img/iph17.png" alt="Изображение" />
    </div>
  );
};

export default Main;
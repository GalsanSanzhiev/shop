import React from "react";

const Sale = () => {

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
    <div className="sale">
      <img className="saleImg" src="./img/Background.png" alt="Изображение" />
      <div className="saleText">
        <h1 className="saleTitle">Большая летняя <span>распродажа</span></h1>
        <p className="saleDescr">
          Следите за новостями, чтобы не упустить распродажу
        </p>
        <button className="saleButton" onClick={scrollToProducts}>
            Купить сейчас
        </button>
      </div>
    </div>
  );
}

export default Sale;

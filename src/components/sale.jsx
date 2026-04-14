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
        <h1 className="saleTitle">Big Summer <span>Sale</span></h1>
        <p className="saleDescr">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className="saleButton" onClick={scrollToProducts}>
            Shop Now
        </button>
      </div>
    </div>
  );
}

export default Sale;

import React from "react";

const Sale = () => {
  return (
    <div className="sale">
      <img className="saleImg" src="./img/Background.png" alt="" />
      <div className="saleText">
        <h1 className="saleTitle">Big Summer <span>Sale</span></h1>
        <p className="saleDescr">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className="saleButton">
            Shop Now
        </button>
      </div>
    </div>
  );
};

export default Sale;

import React from "react";

const Banners = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="banners">
      <div className="bannersLeft">
        <div className="banner_1">
          <img className="PS5_banner-mobile" src="./img/PlayStation5.png" alt="" />
          <img
            className="bannerImg PS5_banner"
            src="./img/PlayStation.png"
            alt="PlayStation 5"

          />
          <div className="bannerText">
            <h2 className="bannerTitle">Playstation 5</h2>
            <p className="bannerDescr">
              Невероятно мощные центральные и графические процессоры, а также
              твердотельный накопитель со встроенным модулем ввода-вывода
              изменят ваше представление о PlayStation.
            </p>
          </div>
        </div>

        <div className="banner_2">
          <img
            className="bannerImg"
            src="./img/halfAirpods.png"
            alt="AirPods Max"
          />
          <div className="bannerText">
            <h2 className="bannerTitle">
              Apple <br /> AirPods <br /> Max
            </h2>
            <p className="bannerDescr">
              Вычислительный звук. Послушайте, это мощно
            </p>
          </div>
        </div>

        <div className="banner_3">
          <img
            className="bannerImg"
            src="./img/appleVision.png"
            alt="Apple Vision Pro"
          />
          <div className="bannerText">
            <h2 className="bannerTitle">
              Apple <br /> Vision Pro
            </h2>
            <p className="bannerDescr">
              Полное погружение в мир развлечений
            </p>
          </div>
        </div>
      </div>

      <div className="banner_4">
        <div className="bannerText">
        <img className="MacBook_mobile" src="./img/MacBook Pro_mobile.png" alt="" />
          <h2 className="bannerTitle">
            Macbook <br className="br_mcbookTitle" /> Air
          </h2>
          <p className="bannerDescr">
            В новом 15-дюймовом MacBook Air больше места для того, что вам
            нравится, благодаря большому дисплею Liquid Retina.
          </p>
          <button className="banner_4-Btn" onClick={scrollToProducts}>
            Купить сейчас
          </button>
        </div>
        <img
          className="bannerImg MacBook"
          src="./img/halfMacbook.png"
          alt="MacBook Air"
        />
      </div>
    </div>
  );
};

export default Banners;

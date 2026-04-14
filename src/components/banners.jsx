import React from "react";

const Banners = () => {
  return (
    <div className="banners">
      <div className="bannersLeft">
        <div className="banner_1">
          <img className="bannerImg" src="./img/PlayStation.png" alt="" />
          <div className="bannerText">
            <h2 className="bannerTitle">Playstation 5</h2>
            <p className="bannerDescr">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>

        <div className="banner_2">
          <img className="bannerImg" src="./img/halfAirpods.png" alt="" />
          <div className="bannerText">
            <h2 className="bannerTitle">Apple <br /> AirPods <br /> Max</h2>
            <p className="bannerDescr">
              Computational audio. Listen, it's powerful
            </p>
          </div>
        </div>

        <div className="banner_3">
          <img className="bannerImg" src="./img/appleVision.png" alt="" />
          <div className="bannerText">
            <h2 className="bannerTitle">Apple <br /> Vision Pro</h2>
            <p className="bannerDescr">
              An immersive way to experience entertainment
            </p>
          </div>
        </div>
      </div>

      <div className="banner_4">
        <div className="bannerText">
          <h2 className="bannerTitle">Macbook <br /> Air</h2>
          <p className="bannerDescr">
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button className="banner_4-Btn">Shop now</button>
        </div>
        <img className="bannerImg" src="./img/halfMacbook.png" alt="" />
      </div>
    </div>
  );
};

export default Banners;

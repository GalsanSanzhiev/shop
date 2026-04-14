import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav className="navigation">
        <img className="headerLogo" src="./img/Logo.png" alt="" />
        <div className="search">
          <input className="searchHeader" type="text" placeholder="Search" />
          <img className="magnifier" src="./img/magnifier.png" alt="" />
        </div>
        <a className="navLink" href="#">
          Home
        </a>
        <a className="navLink" href="#">
          About
        </a>
        <a className="navLink" href="#">
          Contact Us
        </a>
        <a className="navLink" href="#">
          Blog
        </a>
        <div className="navImages">
          <img className="navImg" src="./img/heart.png" alt="" />
          <img className="navImg" src="./img/Cart1.png" alt="" />
          <img className="navImg" src="./img/user.png" alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Header;

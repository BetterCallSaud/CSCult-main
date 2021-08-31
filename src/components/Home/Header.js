import React from "react";
import "./Header.css";
import logo from "../../image/header-logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
      </div>
      <div className="header__right">
        <a href="#home"><div className="header__option">Home</div></a>
        <a href="#community"><div className="header__option">Community</div></a>
        <a href="#events"><div className="header__option">Events</div></a>
        <a href="#products"><div className="header__option">Products</div></a>
        <a href="#about"><div className="header__option">About</div></a>
      </div>
    </div>
  );
}

export default Header;

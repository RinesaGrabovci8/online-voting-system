import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../CSS/header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <img src={logo} alt="" id="mainLogo" />
          </div>
          <div className="toggle-switch">
            <span className="sq">SQ</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="en">EN</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

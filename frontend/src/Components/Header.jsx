import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../CSS/header.css'; 
// // import '../CSS/Responsive/ressponsive.css'; 
// =======
// /*import '//CSS/ressponsive.css';*/ 

function Header() {
  

  return (
    <header>
      <div className='container'>
        <div className="header-wrapper">
          <Link to="/home" className='logo-link'>
            <img src={logo} alt="logo" id="mainLogo" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

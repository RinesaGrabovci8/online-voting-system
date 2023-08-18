import React, { useState } from 'react';
import '../CSS/PersonalPage.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

function PersonalPage() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className="AccountCard">
      <div className="ProfileIcon">
        <FaUser size={50} />
      </div>
      <h1>12345</h1>
      <Link to="/change-password">Change Password?</Link>
      <br />
      <Link to="/change-id">Change ID?</Link>
    </div>
    <Footer/>
    </>
  );
}

export default PersonalPage;




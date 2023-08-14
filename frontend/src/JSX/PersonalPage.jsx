import React, { useState } from 'react';
import '../CSS/personalpage.css';
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

function ChangePassword() {
  const handlePasswordChange = () => {
    // Simulate password change logic here
    alert('Password updated successfully!');
  };

  return (
    <div className="ChangeForm">
      <h2>Change Password</h2>
      <label htmlFor="newPassword">New Password:</label>
      <input type="password" id="newPassword" />
      <button onClick={handlePasswordChange}>Update Password</button>
    </div>
  );
}

function ChangeId() {
  const handleChangeId = () => {
    // Simulate ID change logic here
    alert('ID updated successfully!');
  };

  return (
    <div className="ChangeForm">
      <h2>Change ID</h2>
      <label htmlFor="newId">New ID:</label>
      <input type="text" id="newId" />
      <button onClick={handleChangeId}>Update ID</button>
    </div>
  );
}

export default PersonalPage;

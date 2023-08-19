import React, { Component, useState } from 'react';
import '../CSS/personalpage.css';
import React, { useState } from 'react';
import '../CSS/PersonalPage.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import { experimentalStyled } from '@mui/material';

class PersonalPage extends Component {
  componentDidMount(){
    fetch("http://localhost:5000/userData", {
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
        .then((res) =>res.json())
        .then((data) => {
            console.log(data, "userData");
        })
  }
  render(){
    return (
      <>
      <div className="AccountCard">
        <div className="ProfileIcon">
          <FaUser size={50} />
        </div>
        <h1>12345</h1>
        <Link to="/change-password">Change Password?</Link>
        <br />
        <Link to="/change-id">Change ID?</Link>
      </div>
      </>
    );
  }
}

export default PersonalPage;




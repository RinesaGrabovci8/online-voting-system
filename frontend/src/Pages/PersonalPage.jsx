import React, { Component, useEffect, useState } from 'react';
import '../CSS/personalpage.css';
import '../CSS/personalpage.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import { experimentalStyled } from '@mui/material';

function PersonalPage() {
  const[userData, setuserdata] = useState("");
  const [admin, setadmin] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        if (data.data.role === "Admin") {
          setadmin(true);
        }
        setuserdata(data.data);
        if (data.data === "token expired") {
          alert("Token expired log in again");
          window.localStorage.clear();
          window.location.href = "/log-in";
        }
      });
  }, []);
  
    return (
      <>
      {admin? (<div className="AccountCard">
                <div className="ProfileIcon">
                  <FaUser size={50} />
                </div>
                <h1>{userData.personalnumber}</h1>
                <h3>{userData.role}</h3>
                <Link to="/change-password">Change Password?</Link>
                <br />
                <Link to="/change-id">Change ID?</Link>
              </div>) :  (<div className="AccountCard">
                          <div className="ProfileIcon">
                            <FaUser size={50} />
                          </div>
                          <h1>{userData.personalnumber}</h1>
                          <Link to="/change-password">Change Password?</Link>
                          <br />
                          <Link to="/change-id">Change ID?</Link>
                        </div>)}
      
      </>
    );
  
}

export default PersonalPage;




import React, { useEffect, useState } from 'react';
import '../CSS/personalpage.css';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function PersonalPage() {
  const [userData, setUserData] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5001/auth/userData", {
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
          setIsAdmin(true);
        }
        setUserData(data.data);
        if (data.data === "token expired") {
          alert("Token expired. Please log in again.");
          window.localStorage.clear();
          window.location.href = "/log-in";
        }
      });
  }, []);

  return (
    <div className="AccountCard">
      <div className="ProfileIcon">
        <FaUser size={50} />
      </div>
      <h1>{userData.personalnumber}</h1>
      {isAdmin ? (
        <>
          <h3>{userData.role}</h3>
          <Link to={`/updateUserPass/${userData._id}`}>Change Password?</Link>
        </>
      ) : (
        <Link to={`/updateUserPass/${userData._id}`}>Change Password?</Link>
      )}
    </div>
  );
}

export default PersonalPage;

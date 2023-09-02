import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FaUser } from 'react-icons/fa';
import '../CSS/changepass.css';

function Changepass() {

  const [data, setData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleNewPasswordChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log("data", data)
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = window.localStorage.getItem("token");
  
    // Fetch user data to get the user's ID
    axios.post("http://localhost:5000/auth/userData", {
      token: token,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: {
        token: token,
      },
    })
      .then((response) => {
        if (response.data.status === "ok") {
          const id = response.data.data._id; // Assuming the user ID is stored in "_id"
  
          const newPasswordData = {
            newPassword: data.newPassword,
          };
  
          // Reset the password using the retrieved user ID
          axios.post(`http://localhost:5000/auth/reset-password/${id}`, newPasswordData, {
            headers: {
              'Content-Type': 'application/json',
            }
          })
            .then((response) => {
              console.log(response);
              // Handle success or error response as needed
            })
            .catch((err) => {
              console.log(err);
              // Handle error
            });
        } else {
          // Handle error response from fetching user data
        }
      })
      .catch((err) => {
        console.log(err);
        // Handle error
      });
  };
  


  return (
    <div className='changepass'>
      <div className="ProfileIcon">
        <FaUser size={50} />
      </div>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          className='current-password'
          type="password"
          placeholder="Current password"
          value={data.currentPassword}
          name="currentPassword"
          onChange={handleNewPasswordChange}
        />
        <input
          className='new-password'
          type="password"
          placeholder="New Password"
          value={data.newPassword}
          name="newPassword"
          onChange={handleNewPasswordChange}
        />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}

export default Changepass;

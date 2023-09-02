import React, { useState } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import '../CSS/changepass.css';

function Changepass() {
  const [data, setData] = useState({
    newPassword: '', // Remove currentPassword
  });

  const handlePasswordChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = window.localStorage.getItem('token');
    const { newPassword } = data; // Remove currentPassword

    // Set the 'Authorization' header with the token
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Include 'token' in the headers
    };

    axios
      .post(
        'http://localhost:5000/auth/updateUserPass',
        { newPassword }, // Remove currentPassword
        {
          headers,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="changepass">
      <div className="ProfileIcon">
        <FaUser size={50} />
      </div>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="new-password"
          type="password"
          placeholder="New Password"
          value={data.newPassword}
          name="newPassword"
          onChange={handlePasswordChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Changepass;

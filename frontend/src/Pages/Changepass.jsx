import React, { useState } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import '../CSS/changepass.css';
import { useNavigate, useParams } from 'react-router';

function Changepass() {
  const { id } = useParams();
  console.log('ID:', id);
  const [dataForm, setDataForm] = useState({
    newPassword: ""
  });

  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log('Button Clicked');
    axios.put(`http://localhost:5000/auth/updateUserPass/${id}`, dataForm) // Use the id from useParams
      .then((res) => {
        console.log('res', res);
        navigate('/personalpage'); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  console.log('dataForm', dataForm);

  const changes = (e) => {
    setDataForm({ ...dataForm, newPassword: e.target.value });
  }

  return (
    <div className="changepass">
      <div className="ProfileIcon">
        <FaUser size={50} />
      </div>
      <h2>Change Password</h2>
      <form onSubmit={handleButtonClick}>
        <input
          className="new-password"
          type="password"
          placeholder="New Password"
          value={dataForm.newPassword}
          name="newPassword"
          onChange={(e) => changes(e)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Changepass;

import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import { FaUser } from 'react-icons/fa';
import '../CSS/changepass.css';
function Changepass(){     
    return (
      <div className='changepass'>
       
        <div className="ProfileIcon">
          <FaUser size={50} />
        </div>
        <h2>Change Password</h2>
        <form >
        <input
            className='current-password'
            type="text"
            placeholder="Current password"  
        />
        <input
            className='new-password'
            type="password"
            placeholder="New Password"  
        />
        <button  type='submit'>Save</button> 
        </form>
      </div>
    )
}

export default Changepass;
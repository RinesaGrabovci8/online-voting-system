import React, { Component } from 'react'
import { FaUser } from 'react-icons/fa';
import '../CSS/changepass.css';
export default class Changepass extends Component {
  render() {
    return (
      <div className='changepass'>
        <div className="ProfileIcon">
          <FaUser size={50} />
        </div>
        <h2>Change Password</h2>
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
        <button >Save</button>
      </div>
    )
  }
}

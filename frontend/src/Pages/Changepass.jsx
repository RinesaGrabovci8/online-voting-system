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
        <form onSubmit={this.handleSubmit}>
        <input
            className='current-password'
            type="text"
            placeholder="Current password"
            onChange={e => this.setState({password: e.target.value})}  
        />
        <input
            className='new-password'
            type="password"
            placeholder="New Password"
            onChange={e => this.setState({newPassword: e.target.value})}  
        />
        <button  type='submit'>Save</button>
        </form>
      </div>
    )
  }
}

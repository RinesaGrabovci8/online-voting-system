import React, { Component } from 'react'
import { FaUser } from 'react-icons/fa';
import '../CSS/changeid.css';
export default class Changeid extends Component {
  render() {
    return (
      <div className='changeid'>
        <div className="ProfileIcon">
          <FaUser size={50} />
        </div>
        <h2>Change ID</h2>
        <input
            className='current-id'
            type="text"
            placeholder="Current ID"
        />
        <input
            className='new-id'
            type="password"
            placeholder="New ID"
        />
        <button >Save</button>
      </div>
    )
  }
}

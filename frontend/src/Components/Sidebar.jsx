import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/sidebar.css';
import { FaUser, FaHome, FaVoteYea, FaFlag, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import { BsFillBellFill } from 'react-icons/bs';
import { FiChevronRight } from 'react-icons/fi';
import Home from '../Pages/Home';
import PersonalPage from '../Pages/PersonalPage';
import Voto from '../Pages/Votoketu';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className='sidebar-ul'>
        <li className='li1'>
          <Link to="/personalpage">
            <FaUser />
            Informatat Personale
          </Link>
        </li>
        <li className='li2'>
          <Link to="/">
            <FaHome />
            Kryefaqja
          </Link>
        </li>
        <li className='li3'>
          <Link to="/voto-ketu">
            <FaVoteYea />
            Voto Ketu!
          </Link>
        </li>
        <li className='li4'>
          <Link to="/elections">
            <FaFlag />
            Zgjedhjet
          </Link>
        </li>
        <li className='li7'>
          <Link to="/dashboard">
            <FaChartLine />
            Grafiket
          </Link>
        </li>
        <li className='li9'>
          <Link to="/logout">
            <FaSignOutAlt />
            Shkyçu
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;

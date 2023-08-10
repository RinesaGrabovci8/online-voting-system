import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/sidebar.css';
import { FaUser, FaHome, FaVoteYea, FaFlag, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import { BsFillBellFill } from 'react-icons/bs';
import { FiChevronRight } from 'react-icons/fi';
import Home from '../JSX/Home';
import PersonalPage from '../JSX/PersonalPage';
import Voto from '../JSX/Votoketu';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className='sidebar-ul'>
        <li className='li1'>
          <Link to="/personal-information">
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
          <ul>
            <li className='li5'><Link to="/local-elections">Local Elections</Link></li>
            <li className='li6'><Link to="/central-elections">Central Elections</Link></li>
          </ul>
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

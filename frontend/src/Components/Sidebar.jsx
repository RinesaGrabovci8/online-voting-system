import React from 'react';
import '../CSS/sidebar.css';
import { FaUser } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaVoteYea } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaNewspaper } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { BsFillBellFill } from 'react-icons/bs';
import { FiChevronRight } from 'react-icons/fi';


function Sidebar() {
  return (
    <div className="sidebar">
      <ul className='sidebar-ul'>
        <li className='li1'>
          <a href="/personal-information">
          <FaUser/>
            Informatat Personale
          </a>
        </li>
        <li className='li2'>
          <a href="/">
            <FaHome/>
            Kryefaqja
          </a>
        </li>
        <li className='li3'>
          <a href="/">
            <FaVoteYea/>
            Voto Ketu!
          </a>
        </li>
        <li className='li4'>
          <a href="/elections">
            <FaFlag/>
            Zgjedhjet
          </a>
          <ul>
            <li className='li5'><a href="/local-elections">Local Elections</a></li>
            <li className='li6'><a href="/central-elections">Central Elections</a></li>
          </ul>
        </li>
        <li className='li7'>
          <a href="/dashboard">
            <FaChartLine/>
            Grafiket
          </a>
        </li>

        <li className='li9'>
          <a href="/logout">
            <FaSignOutAlt/>
            Shkyçu
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;

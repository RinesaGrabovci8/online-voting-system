import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import '../CSS/sidebar.css';
import { FaUser, FaHome, FaVoteYea, FaFlag, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import { BsFillBellFill } from 'react-icons/bs';
import { FiChevronRight } from 'react-icons/fi';
import Home from '../Pages/Home';
import PersonalPage from '../Pages/PersonalPage';
import Voto from '../Pages/Votoketu';
import '../CSS/sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      isResponsive: false, // Add a state to track responsiveness
    };
  }

  componentDidMount() {
    axios.post("http://localhost:5000/auth/userData", {
      token: window.localStorage.getItem("token"),
    })
    .then((response) => {
      console.log(response.data, "userData");
      this.setState({ userData: response.data.data });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }

    // ... (Your existing code for fetching user data)
  

  logOut = () => {window.localStorage.clear();
    window.location.href = "/log-in";
    // ... (Your existing logout code)
  };

  handleToggleSidebar = () => {
    this.setState((prevState) => ({ isResponsive: !prevState.isResponsive }));
  };
  render() {
    const { userData, isResponsive } = this.state;
    const isAdmin = userData && userData.role === 'Admin';

    return (
      <div className={`sidebar ${isResponsive ? 'responsive' : ''}`}>
        {/* Toggle button, show only when responsive */}
        {isResponsive && (
          <button id="toggleSidebar" onClick={this.handleToggleSidebar}>
            {isResponsive ? <FiChevronRight /> : <BsFillBellFill />}
          </button>
        )}

        <ul className='sidebar-ul'>
          <li className='li1'>
            <Link to="/personalpage">
              <FaUser />
              Informatat Personale
            </Link>
          </li>
          <li className='li2'>
            <Link to="/home">
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
            <Link to="/charts">
              <FaChartLine />
              Grafiket
            </Link>
          </li>
          {isAdmin && (
            <li className='li8'>
              <Link to="/admin-page">
                <FaUser />
                Menagment Page
              </Link>
            </li>
          )}
          <li className='li9'>
            <Link to="/log-out" onClick={this.logOut}>
              <FaSignOutAlt />
              Shkyçu
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}



export default Sidebar;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Voto from './Pages/Votoketu';
import Votozgjedhjetqendrore from './Pages/zgjedhjetqendrore';
import Chart from './Pages/Grafiket';
import PersonalPage from './Pages/PersonalPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Zgjedhjetlokale from './Pages/zgjedhjetlokale';
import Zgjedhjet from './Pages/Zgjedhjetpage'
import Changepass from './Pages/Changepass';
import Changeid from './Pages/Changeid';



function App() {
  const isLoggedIn = window.localStorage.getItem("loggedin");
  
  return (
    
    <Router>
      <Routes>
        <Route exact path='/' element={isLoggedIn == false?<PersonalPage/>:<Zgjedhjet/>}/>
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" exact element={<Register />} />
        <Route path="/personalpage" element={<PersonalPage />} />
        <Route path="/change-password" element={<Changepass/>}/>
        <Route path="/change-id" element={<Changeid/>}/>
      </Routes>
  </Router>
  );
}

export default App;

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



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/log-in' element={<Login/>}/>
        <Route path='/sign-up' element={<Register/>}/>
        <Route path='/personalpage' element={<PersonalPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Home from './JSX/Home';
import Voto from './JSX/Votoketu';
import Votozgjedhjetqendrore from './JSX/zgjedhjetqendrore';
import Chart from './JSX/Grafiket';
import PersonalPage from './JSX/PersonalPage';
import Register from './JSX/Register';
import Login from './JSX/Login';
import Zgjedhjetlokale from './JSX/zgjedhjetlokale';
import Zgjedhjet from './JSX/Zgjedhjetpage'



function App() {
  return (
    <Router>
        <div className="App">
         <PersonalPage/>
      </div>
    </Router>
  );
}

export default App;

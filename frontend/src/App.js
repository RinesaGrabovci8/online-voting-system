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
import './App.css';
import Zgjedhjetlokale from './JSX/zgjedhjetlokale';
import kandidatet from './JSX/kandidatet';



function App() {
  return (
    <Router>
        <div className="App">
         <Zgjedhjetlokale/>
      </div>
    </Router>
  );
}

export default App;

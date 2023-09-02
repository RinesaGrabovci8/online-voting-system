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
import CandidateCard from './Components/CandidateCard';
import ShtoKandidat from './Crud/shtoKandidat';
import ShtoParti from './Crud/shtoParti';
import UpdateKandidat from './Crud/updateKandidat';
import UpdateParti from './Crud/updateParti';
import Zgjedhjetqendrorecand from './Components/Zgjedhjetqendrorecand';
import ZgjedhjetQendrore from './Pages/zgjedhjetqendrore';
import Zgjedhjetqendrorepr from './Components/Zgjedhjetqendrorecand';
import MenagmentPage from './Pages/MenagmentPage';





function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    
    <Router>
      {isLoggedIn && <Header />}
      {isLoggedIn && <Sidebar />}
      
      <Routes>
        <Route exact path='/' element={isLoggedIn == true?<PersonalPage/>:<Login/>}/>
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" exact element={<Register />} />
        <Route path="/personalpage" element={<PersonalPage />} />
        <Route path="/change-password" element={<Changepass/>}/>
        <Route path="/change-id" element={<Changeid/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path='/voto-ketu' element={<Voto/>}/>
        <Route path='/elections' element={<Zgjedhjet/>}/>
        <Route path='/charts' element={<Chart/>}/>
        <Route path='/admin-page' element={<MenagmentPage/>}/>
        <Route path='/shtokandidat' element={<ShtoKandidat/>}/>
        <Route path='/upadatecandidate' element={<UpdateKandidat/>}/>
      </Routes>
       
      {isLoggedIn && <Footer />}
  </Router>
  );
}

export default App;

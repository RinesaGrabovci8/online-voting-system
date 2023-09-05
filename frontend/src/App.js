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
import Zgjedhjetqendrore from './Pages/zgjedhjetqendrore';
import Zgjedhjetqendrorepr from './Components/Zgjedhjetqendrorecand';
import MenagmentPage from './Pages/MenagmentPage';
import Zgjedhjetprishtine from './Pages/Zgjedhjetprishtine';
import Zgjedhjetskenderaj from './Pages/Zgjedhjetskenderaj';
import Zgjedhjetferizaj from './Pages/Zgjedhjetferizaj';
import Zgjedhjetgjakove from './Pages/Zgjedhjetgjakove';
import Zgjedhjetgjilan from './Pages/Zgjedhjetgjilan';
import Zgjedhjetprizren from './Pages/Zgjedhjetprizren';
import Zgjedhjetpodujeve from './Pages/Zgjedhjetpodujeve';
import Zgjedhjetpeje from './Pages/Zgjedhjetpeje';
import Zgjedhjetmitrovice from './Pages/Zgjedhjetmitrovice';
import Test from './Pages/testt';





function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    
    
    <Router>
      < Header/>
      {/*
      {isLoggedIn && <Header />}
      {isLoggedIn && <Sidebar />}
      
      <Routes>
       <Route exact path='/' element={isLoggedIn == true?<PersonalPage/>:<Login/>}/>
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" exact element={<Register />} />
        <Route path="/personalpage" element={<PersonalPage />} />
        <Route path="/updateUserPass/:id" element={<Changepass/>}/>
        <Route path="/change-id" element={<Changeid/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path='/voto-ketu' element={<Voto/>}/>
        <Route path='/zgjedhjetqendrore' element={<Zgjedhjetqendrore/>}/>
        <Route path='/zgjedhjetlokale' element={<Zgjedhjetlokale/>}/>
        <Route path='/zgjedhjetprishtine' element={<Zgjedhjetprishtine/>}/>
        <Route path='/zgjedhjetgjakove' element={<Zgjedhjetgjakove/>}/>
        <Route path='/zgjedhjetferizaj' element={<Zgjedhjetferizaj/>}/>
        <Route path='/zgjedhjetgjilan' element={<Zgjedhjetgjilan/>}/>
        <Route path='/zgjedhjetprizren' element={<Zgjedhjetprizren/>}/>
        <Route path='/zgjedhjetpodujeve' element={<Zgjedhjetpodujeve/>}/>
        <Route path='/zgjedhjetpeje' element={<Zgjedhjetpeje/>}/>
        <Route path='/zgjedhjetmitrovice' element={<Zgjedhjetmitrovice/>}/>
        <Route path='/zgjedhjetskenderaj' element={<Zgjedhjetskenderaj/>}/>
        <Route path='/elections' element={<Zgjedhjet/>}/>
        <Route path='/charts' element={<Chart/>}/>
        <Route path='/admin-page' element={<MenagmentPage/>}/>
        <Route path='/shtokandidat' element={<ShtoKandidat/>}/>
        <Route path='/shtoparti' element={<ShtoParti/>}/>
        <Route path='/updateparty/:id' element={<UpdateParti/>}/>
        <Route path='/upadatecandidate/:id' element={<UpdateKandidat/>}/>
        <Route path='/updateparty/:id' element={<UpdateParti/>}/>
      </Routes>
       
      {isLoggedIn && <Footer /> */} 
  
  </Router>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Voto from './Pages/Votoketu';
import Chart from './Pages/Grafiket';
import PersonalPage from './Pages/PersonalPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Zgjedhjetlokale from './Pages/zgjedhjetlokale';
import Zgjedhjet from './Pages/Zgjedhjetpage'
import Changepass from './Pages/Changepass';
import ShtoKandidat from './Crud/shtoKandidat';
import ShtoParti from './Crud/shtoParti';
import UpdateKandidat from './Crud/updateKandidat';
import UpdateParti from './Crud/updateParti';
import Zgjedhjetqendrore from './Pages/zgjedhjetqendrore';
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
import DeletePage from './Pages/DeletePage';
import UpdateTeam from './Crud/updateTeam';
import UpdatePlayer from './Crud/updatePlayer';
import ShtoPlayer from './Crud/shtoPlayer';
import ShtoTeam from './Crud/shtoTeam';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(window.localStorage.getItem("loggedIn") === "false");

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (

    <Router>
      <Routes>
        <Route exact path='/' element={isLoggedIn ? <PersonalPage /> : <Login onLogin={handleLogin} />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" exact element={<Register />} />
        <Route path="/personalpage" element={<PersonalPage />} />
        <Route path="/updateUserPass/:id" element={<Changepass />} />
        <Route path="/home" element={<Home />} />
        <Route path='/voto-ketu/:id' element={<Voto />} />
        <Route path='/zgjedhjetqendrore/:id/:qendroreId' element={<Zgjedhjetqendrore />} />
        <Route path='/zgjedhjetlokale/:id/:lokaleId' element={<Zgjedhjetlokale />} />
        <Route path='/zgjedhjetprishtine/:id/:lokaleId' element={<Zgjedhjetprishtine />} />
        <Route path='/zgjedhjetgjakove/:id/:lokaleId' element={<Zgjedhjetgjakove />} />
        <Route path='/zgjedhjetferizaj/:id/:lokaleId' element={<Zgjedhjetferizaj />} />
        <Route path='/zgjedhjetgjilan/:id/:lokaleId' element={<Zgjedhjetgjilan />} />
        <Route path='/zgjedhjetprizren/:id/:lokaleId' element={<Zgjedhjetprizren />} />
        <Route path='/zgjedhjetpodujeve/:id/:lokaleId' element={<Zgjedhjetpodujeve />} />
        <Route path='/zgjedhjetpeje/:id/:lokaleId' element={<Zgjedhjetpeje />} />
        <Route path='/zgjedhjetmitrovice/:id/:lokaleId' element={<Zgjedhjetmitrovice />} />
        <Route path='/zgjedhjetskenderaj/:id/:lokaleId' element={<Zgjedhjetskenderaj />} />
        <Route path='/elections' element={<Zgjedhjet />} />
        <Route path='/charts' element={<Chart />} />
        <Route path='/admin-page' element={<MenagmentPage />} />
        <Route path='/shtokandidat' element={<ShtoKandidat />} />
        <Route path='/shtoparti' element={<ShtoParti />} />
        <Route path='/updateparty/:id' element={<UpdateParti />} />
        <Route path='/upadatecandidate/:id' element={<UpdateKandidat />} />
        <Route path='/updateparty/:id' element={<UpdateParti />} />
        <Route path='/delete' element={<DeletePage />} />
        <Route path='/shtonplayer' element={<ShtoPlayer />} />
        <Route path='/shtoteam' element={<ShtoTeam />} />
        <Route path='/updateteam/:id' element={<UpdateTeam />} />
        <Route path='/updateplayer/:id' element={<UpdatePlayer />} />
      </Routes>
    </Router>

  );
}

export default App;

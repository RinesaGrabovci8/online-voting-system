import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import '../CSS/zgjedhjetlokale.css'
function Zgjedhjetlokale() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className='zgjedhjet-lokale'>
        <div className='title'>
        <h1>Voto për Zgjedhjet Lokale</h1>
        </div>
        <div className='city-container'>
            <div class="city-buttons">
                <button><Link to='/zgjedhjetprishtine'>Prishtine</Link></button>
                <button><Link to='/zgjedhjetprizren'>Prizren</Link></button>
                <button><Link to='/zgjedhjetpeje'>Peje</Link></button>
                <button><Link to='/zgjedhjetmitrovice'>Mitrovice</Link></button>
                <button><Link to='/zgjedhjetgjakove'>Gjakove</Link></button>
                <button><Link to='/zgjedhjetskenderaj'>Skenderaj</Link></button>
                <button><Link to='/zgjedhjetferizaj'>Ferizaj</Link></button>
                <button><Link to='/zgjedhjetgjilan'>Gjilan</Link></button>
                <button><Link to='/zgjedhjetpodujeve'>Podujeve</Link></button>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Zgjedhjetlokale;

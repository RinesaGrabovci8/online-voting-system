import React  from 'react'
import { Link, useParams } from 'react-router-dom';
import '../CSS/zgjedhjetlokale.css'
import axios from 'axios';
function Zgjedhjetlokale() {
  
  return (
    <>
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
    </>
  )
}

export default Zgjedhjetlokale;

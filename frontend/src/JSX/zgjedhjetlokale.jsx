import React from 'react'
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
                <button>Prishtine</button>
                <button>Prizren</button>
                <button>Peje</button>
                <button>Mitrovice</button>
                <button>Gjakove</button>
                <button>Skenderaj</button>
                <button>Ferizaj</button>
                <button>Gjilan</button>
                <button>Podujeve</button>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Zgjedhjetlokale;

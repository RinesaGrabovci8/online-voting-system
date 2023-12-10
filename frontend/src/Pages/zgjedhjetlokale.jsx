import React  from 'react'
import { Link, useParams } from 'react-router-dom';
import '../CSS/zgjedhjetlokale.css'
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

function Zgjedhjetlokale() {
  const { id, lokaleId } = useParams();
  
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className='zgjedhjet-lokale'>
        <div className='title'>
        <h1>Voto për Zgjedhjet Lokale</h1>
        </div>
        <div className='city-container'>
            <div className="city-buttons">
                <button><Link to={`/zgjedhjetprishtine/${id}/${lokaleId}`}>Prishtine</Link></button>
                <button><Link to={`/zgjedhjetprizren/${id}/${lokaleId}`}>Prizren</Link></button>
                <button><Link to={`/zgjedhjetpeje/${id}/${lokaleId}`}>Peje</Link></button>
                <button><Link to={`/zgjedhjetmitrovice/${id}/${lokaleId}`}>Mitrovice</Link></button>
                <button><Link to={`/zgjedhjetgjakove/${id}/${lokaleId}`}>Gjakove</Link></button>
                <button><Link to={`/zgjedhjetskenderaj/${id}/${lokaleId}`}>Skenderaj</Link></button>
                <button><Link to={`/zgjedhjetferizaj/${id}/${lokaleId}`}>Ferizaj</Link></button>
                <button><Link to={`/zgjedhjetgjilan/${id}/${lokaleId}`}>Gjilan</Link></button>
                <button><Link to={`/zgjedhjetpodujeve/${id}/${lokaleId}`}>Podujeve</Link></button>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Zgjedhjetlokale;

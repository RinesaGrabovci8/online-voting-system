import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React from "react";
import '../CSS/votoketu.css';
import Zgjedhjetlokale from "./zgjedhjetlokale";
import ZgjedhjetQendrore from "./zgjedhjetqendrore";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Voto(){
    return (
        <>

            <Header/>
            <Sidebar/>
            <div className="votoketu">
                <div className="zgjedhjet">
                    <h1>Voto!</h1>
                    <Link to="/zgjedhjetqendrore">
                        <button className="zgjedhjetQendrore-btn">Zgjedhjet Qendrore</button>
                    </Link>
                    <Link  to="/zgjedhjetlokale">
                        <button className="zgjedhjetLokale-btn">Zgjedhjet Lokale</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Voto;

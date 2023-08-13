import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React from "react";
import '../CSS/votoketu.css';

function Voto(){
    return (
        <>
        <Header/>
        <Sidebar/>
        <div className="votoketu">
            <div className="zgjedhjet">
                <h1>Voto!</h1>
                <button className="zgjedhjetQendrore-btn">Zgjedhjet Qendrore</button>
                <button className="zgjedhjetLokale-btn">Zgjedhjet Lokale</button>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Voto;

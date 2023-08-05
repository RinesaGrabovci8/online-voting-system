import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React from "react";
import '../CSS/votoketu.css';

function Voto(){
    return(
    <div>
        <div className="zgjedhjet">
            <h1>Voto!</h1>
            <div className="zgjedhjetQendrore">
                <h3>Zgjedhjet Qendrore</h3>
            </div>
            <div className="zgjedhjetLokale">
                <h3>Zgjedhjet Lokale</h3>
            </div>
        </div>
    </div>
    )
}

export default Voto;
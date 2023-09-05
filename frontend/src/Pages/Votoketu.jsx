import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React from "react";
import '../CSS/votoketu.css';
import Zgjedhjetlokale from "./zgjedhjetlokale";
import ZgjedhjetQendrore from "./zgjedhjetqendrore";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import  axios from "axios";
import { useParams } from "react-router-dom";


function Voto(){
    const { id } = useParams();
    console.log('ID:', id);
    const [qendroreId, setQendroreId] = useState(null);
  const [lokaleId, setLokaleId] = useState(null);

  // Make axios requests to get the IDs
  useEffect(() => {
    // Axios request to get the ID for Zgjedhjet Qendrore
    axios.get(`http://localhost:5000/crud/centralelection`)
      .then((response) => {
        setQendroreId(response.data.id);
      })
      .catch((error) => {
        console.error("Error fetching Zgjedhjet Qendrore ID: ", error);
      });

    // Axios request to get the ID for Zgjedhjet Lokale
    axios.get(`http://localhost:5000/crud/centralelection`)
      .then((response) => {
        setLokaleId(response.data.id);
      })
      .catch((error) => {
        console.error("Error fetching Zgjedhjet Lokale ID: ", error);
      });
  }, []);
    return (
        <>
            <div className="votoketu">
                <div className="zgjedhjet">
                    <h1>Voto!</h1>
                    <div className="buttons">
                        <Link to={`/zgjedhjetqendrore/${id}/${qendroreId}`}>
                            <button className="zgjedhjetQendrore-btn">Zgjedhjet Qendrore</button>
                        </Link>
                        <Link  to={`/zgjedhjetlokale/${id}/${lokaleId}`}>
                            <button className="zgjedhjetLokale-btn">Zgjedhjet Lokale</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Voto;

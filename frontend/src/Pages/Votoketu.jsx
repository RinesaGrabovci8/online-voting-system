import React from "react";
import '../CSS/votoketu.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import  axios from "axios";
import { useParams } from "react-router-dom";


function Voto(){
    const { id } = useParams();
    console.log('ID:', id);
    const [qendroreId, setQendroreId] = useState(null);
  const [lokaleId, setLokaleId] = useState(null);

  useEffect(() => {
    
    axios.get(`http://localhost:5001/crud/centralelection`)
      .then((response) => {
        setQendroreId(response.data.id);
      })
      .catch((error) => {
        console.error("Error fetching Zgjedhjet Qendrore ID: ", error);
      });

    axios.get(`http://localhost:5001/crud/localelection`)
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

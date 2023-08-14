import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ak from '../img/ak.jpg';
import pr from '../img/pr.jpg';
import rh from '../img/ramush.png';
import ui from '../img/urani.jpg';
import bp from '../img/bexhii.jpg';
import fl from '../img/fatmir.jpeg';
import Header from '../Components/Header';
import '../CSS/kandidatetLokal.css';
import Sidebar from '../Components/Sidebar';

export class KandidatetLokal extends Component {


    render() {
        return (
            <>
                 <Header />
                <div className="div1">
                    <h1 className="headers1">Zgjedhjet Lokale jane HAPUR!</h1>

                    <div className="wrapper1">
                        <h2 className="candidatesHeader">Kandidatet e vitit 2024</h2>

                        <div className="row1">
                    <div className="column1 col">
                        <div className="cards">
                            <img
                                id="card-photos"
                                src={ak}
                                alt="Albin Kurti"
                            />
                            <div className="container">
                                <h2>Albin Kurti</h2>
                                <p className="title">Kryeminister</p>
                                <p>Kryeminister i Republikes se Kosoves nga 2021</p>
                                <p>albin.kurti@rks-gov.net</p>
                            </div>
                        </div>
                    </div>

                    <div className="column1">
                        <div className="cards">
                            <img
                                id="card-photos"
                                src={pr}
                                alt="Perparim Rama"
                            />
                            <div className="container">
                                <h2>Perparim Rama</h2>
                                <p className="title">Kryetar i Komunes se Prishtines</p>
                                <p>Kryetar i Komunes nga viti 2021</p>
                                <p>perparim.rama@rks-gov.net</p>
                            </div>
                        </div>
                    </div>

                    <div className="column1">
                        <div className="cards">
                            <img
                                id="card-photos"
                                src={ui}
                                alt="Uran Ismaili"
                            />
                            <div className="container">
                                <h2>Uran Ismaili</h2>
                                <p className="title">Politikan</p>
                                <p>Kryetar i partise PDK</p>
                                <p>uran.ismaili@rks-gov.net</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="column1">
                        <div className="cards">
                            <img
                                id="card-photos"
                                src={rh}
                                alt="Ramush Haradinaj"
                            />
                            <div className="container">
                                <h2>Ramush Haradinaj</h2>
                                <p className="title">Politikan</p>
                                <p>Kryetar i partise AAK</p>
                                <p>ramush.haradinaj@rks-gov.net</p>
                            </div>
                        </div>
                    </div>

                    <div className="column1">
                        <div className="cards">
                            <img
                                id="card-photos"
                                src={bp}
                                alt="Behgjet Pacolli"
                            />
                            <div className="container">
                                <h2>Behgjet Pacolli</h2>
                                <p className="title">Politikan</p>
                                <p>Kryetar i partise AKR</p>
                                <p>behgjet.pacolli@rks-gov.net</p>
                            </div>
                        </div>
                    </div>

                    <div className="column1">
                        <div className="cards">
                            <img
                                id="card-photos"
                                src={fl}
                                alt="Fatmir Limaj"
                            />
                            <div className="container">
                                <h2>Fatmir Limaj</h2>
                                <p className="title">Politikan</p>
                                <p>Kryetar i partise NISMA</p>
                                <p>fatmir.limaj@rks-gov.net</p>
                            </div>
                        </div>
                    </div>
                        <Link to="/voto">
                            <button className="my-button1">Voto tani!</button>
                        </Link>

                    </div>


                </div>

            </>
        );
    }
}
export default KandidatetLokal;
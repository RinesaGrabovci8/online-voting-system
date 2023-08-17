import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Ak from "../img/ak.jpg";
import Hth from "../img/hth.jpg";
import Ldk from "../img/LDK.png";
import Pdk from "../img/PDK.png";
import Pr from "../img/pr.jpg";
import Rh from "../img/rh.jpg";
import Rks from "../img/rks.png";
import Vota from "../img/vota.png";
import Vv from "../img/VV.png";
import "../CSS/home.css";

function Home(){
    return(
        <>
        <Header/>
        <Sidebar/>
        <div className="container">
            <div className="main-content">
                <p className="small-text">
                    Merrni pjese ne votime!<br></br>
                    Voto tani per nje te ardhme me te mire!
                </p>
                <img src={Vota} id="vota" alt="foto" />
            </div>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img
                            id="card-photos"
                            src={Ak}
                            alt="Albin Kurti"
                        />
                        <div className="container">
                            <h2>Albin Kurti</h2>
                            <p>Kryeminister i Republikes se Kosoves nga 2021 - VV</p>
                            <p>albin.kurti@rks-gov.net</p>
                            <p><button className="card-button">Lexo me shume...</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img
                            id="card-photos"
                            src={Pr}
                            alt="Perparim Rama"
                        />
                        <div className="container">
                            <h2>Perparim Rama</h2>
                            <p>Kryetar i Komunes se Prishtines nga viti 2021 - LDK</p>
                            <p>perparim.rama@rks-gov.net</p>
                            <p><button className="card-button">Lexo me shume...</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img
                            id="card-photos"
                            src={Rh}
                            alt="Ramush Haradinaj"
                        />
                        <div className="container">
                            <h2>Ramush Haradinaj</h2>
                            <p>Kryetar i partise ne Aleanca per Ardhmerine e Kosoves - AAK</p>
                            <p>ramush.haradinaj@rks-gov.net</p>
                            <p><button className="card-button">Lexo me shume...</button></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partite-row">
                <h2 className="partite-title">Partite Politike</h2>
                <div className="column">
                    <div className="p-card">
                        <img src={Vv} alt="VV" id="vv-photo" />
                        <p className="votat">51%</p>
                    </div>
                </div>
                <div className="column">
                    <div className="p-card">
                        <img src={Ldk} alt="LDK" id="ldk-photo" />
                        <p className="votat">39%</p>
                    </div>
                </div>
                <div className="column">
                    <div className="p-card">
                        <img src={Pdk} alt="PDK" id="pdk-photo" />
                        <p className="votat">10%</p>
                    </div>
                </div>
            </div>
            <div className="previous-elections__part">
                <h2 className="prev-elections__title">Zgjedhjet e Kaluara</h2>
                <div className="container2">
                    <div className="small-container">
                        <h3 className="small-container__title"><h3 className="desc-title">Zgjedhjet e vitit 2022
                            <br></br>Zgjedhjet Qendrore</h3>
                            <p className="desc">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,<br></br>
                                sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.<br></br>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br></br>
                                ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in <br></br>
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br>
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia <br></br> deserunt mollit anim id est laborum.</p>
                        </h3>
                        <img src={Hth} alt="Hashim Thaci" id="hth" />
                    </div>
                </div>
            </div>
            <div className="small-description">
                <p className="text-part">Sistemi yne i votimit online ofron nje votim te sigurt, transparent dhe
                    platforme gjitheperfshirese per votuesit. Sistemi yne ofron nje metode te re dhe
                    menyre e thjeshte per te hedhur votat ne menyre te sigurt dhe konfidenciale. Misioni yne eshte
                    per te ruajtur integritetin e procesit demokratik duke siguruar nje
                    platforme qe siguron rezultate te sakta dhe transparente te votimit!
                </p>
                <img src={Rks} alt="rks" id="rks" />
            </div>
        </div>
        <Footer/>
        </>
        
    )
}

export default Home;
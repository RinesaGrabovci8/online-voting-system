import React from "react";
import '../CSS/zgjedhjet.css';
import Zgjedhjetqendrorecand from "../Components/Zgjedhjetqendrorecand";
import Zgjedhjetlokalepr from "../Components/Zgjedhjetlokalepr";
import Zgjedhjetlokalefr from "../Components/Zgjedhjetlokalefr";
import Zgjedhjetlokaleprz from "../Components/Zgjedhjetlokaleprz";
import Zgjedhjetlokalepej from "../Components/Zgjedhjetlokalepej";
import Zgjedhjetlokalemtrv from "../Components/Zgjedhjetlokalemtrv";
import Zgjedhjetlokalegjk from "../Components/Zgjedhjetlokalegjk";
import Zgjedhjetlokaleskdr from "../Components/Zgjedhjetlokaleskdr";
import Zgjedhjetlokalegjl from "../Components/Zgjedhjetlokalegjl";
import Zgjedhjetlokalepd from "../Components/Zgjedhjetlokalepd";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Zgjedhjet() {
  return (
    <>
    <Header/>
    <Sidebar/>
        <div className="zgjedhjet-qendrore">
            <h1>Kandidatët për Zgjedhjet Qendrore</h1>
            <Zgjedhjetqendrorecand/>
        </div>
        <div className="zgjedhjet-lokale">
            <h1>Kandidatët për Zgjedhjet Lokale</h1>
            <Zgjedhjetlokalepr/>
            <Zgjedhjetlokaleprz/>
            <Zgjedhjetlokalepej/>
            <Zgjedhjetlokalemtrv/>
            <Zgjedhjetlokalegjk/>
            <Zgjedhjetlokaleskdr/>
            <Zgjedhjetlokalefr/>  
            <Zgjedhjetlokalegjl/>
            <Zgjedhjetlokalepd/>
        </div>
        <Footer/>
    </>
  );
}

export default Zgjedhjet;

import Hth from "../img/hth.jpg";
import Rks from "../img/rks.png";
import Vota from "../img/vota.png";
import "../CSS/home.css";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

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
            <div className="previous-elections__part">
                <h2 className="prev-elections__title">Zgjedhjet e Kaluara</h2>
                <div className="container2">
                    <div className="small-container">
                        <h3 className="small-container__title"><h3 className="desc-title">Zgjedhjet e vitit 2022
                            <br></br>Zgjedhjet Qendrore</h3>
                            <p className="desc">Hashim Thaçi ka fituar zgjedhjet në Kosovë me një fushatë të fortë dhe mbështetje të gjerë nga populli.
                             Ai ishte një kandidat i njohur dhe i besuar nga shumë qytetarë,
                             pasi kishte shërbyer si presidenti i Kosovës dhe kishte luajtur një rol kyç në pavarësinë e vendit.<br></br>
                             Në periudhën para zgjedhjeve, Hashim Thaçi prezantoi një platformë politike që fokusohet në rritjen ekonomike, 
                             luftën kundër korrupsionit dhe përmirësimin e infrastrukturës. Ai premtoi gjithashtu
                              të ndihmonte në përmirësimin e marrëdhënieve me vende të tjera dhe të ndërmerrej hapa të rëndësishëm në procesin e integrimit në BE..<br></br>
                             Me këtë fitore, Hashim Thaçi u bë përsëri figura kryesore në politikën e Kosovës dhe u angazhua të punonte për të përmbushur
                              premtimet e tij dhe për të ndihmuar në zhvillimin e vendit. Kosova hyri në një periudhë të re, me shpresa të mëdha për të ardhmen.<br></br>
                            </p>
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
import React, { Component } from 'react';
import footerlogo from '../img/footerlogo.png';
import appstore from '../img/appstore.svg';
import googleplay from '../img/googleplay.svg';
import '../CSS/footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <div className='footer-download'>
                        <img className='footerlogo' src={footerlogo} alt="Footer Logo"></img>
                        <p>Shkarkoni aplikacionin duke klikuar ne linkun e meposhtem:</p>
                        <img className='applestore' src={appstore} alt="AppStore Logo"></img>
                        <img className='googlestore' src={googleplay} alt="GooglePlay Logo"></img>
                    </div>
                    <div className="footer-links">
                        <h6>Faqet</h6>
                        <Link className="footerLinks" to='/personalpage'>Informatat personale</Link><br></br>
                        <Link className="footerLinks" to='/home'>Kryefaqja</Link><br></br>
                        <Link className="footerLinks" to='/voto-ketu'>Voto ketu</Link><br></br>
                        <Link className="footerLinks" to='/elections'>Zgjedhjet</Link><br></br>
                        <Link className="footerLinks" to='/charts'>Grafiket</Link><br></br>
                    </div>
                    <div className="footer-services">
                        <h6>Sherbimet</h6><br></br>
                        <Link className="footerLinks" to="/voto-ketu/:id">Votim</Link>
                    </div>
                    <div className="footer-info">
                        <h6>Kontakti</h6>
                        <p>Address: Dardania rr.Anton Arapi, Prishtine, State ZIP</p><br></br>
                        <p>Phone: 383-555-5555</p><br></br>
                        <p>Email: evoting-ks@rks.com</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;




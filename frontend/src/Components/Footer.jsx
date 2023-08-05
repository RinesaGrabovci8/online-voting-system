import React from 'react';
import footerlogo from '../img/footerlogo.png';
import appstore from '../img/appstore.svg';
import googleplay from '../img/googleplay.svg';
import '../CSS/footer.css';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className='footer-download'>
                    <img className='footerlogo' src={footerlogo} ></img>
                    <p>Shkarkoni aplikacionin duke klikuar ne linkun e meposhtem:</p>
                    <img className='applestore' src={appstore}></img>
                    <img className='googlestore' src={googleplay}></img>
                </div>
                <div className="footer-links">
                    <h6>Faqet</h6>
                    <a className="footerLinks" href="/">Informatat personale</a><br></br>
                    <a className="footerLinks" href="/about">Kryefaqja</a><br></br>
                    <a className="footerLinks" href="/contact">Voto ketu</a><br></br>
                    <a className="footerLinks" href="/contact">Zgjedhjet Lokale</a><br></br>
                    <a className="footerLinks" href="/contact">Zgjedhjet Qendrore</a><br></br>
                    <a className="footerLinks" href="/contact">Grafiket</a><br></br>
                    <a className="footerLinks" href="/contact">Artikujt</a><br></br>
                </div>
                <div className="footer-services">
                    <h6>Sherbimet</h6><br></br>
                    <a className="footerLinks" href="/">Votim</a>
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
export default Footer;
import React from 'react'
import { Link } from 'react-router-dom'
import ScrollTopToBottom from './parts/ScrollTopToBottom'

const Footer = () => {
  return (
    <>
      <footer className="footer bg-white">

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-logo wow slideInUp">
                <Link to='/'><img src="assets/img/logo.png" /></Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-menu wow slideInUp" data-wow-delay=".5s">
                <h3>Navigation</h3>
                <ul>
                  <li><Link to="/bewerberlnnen">Für Bewerber:innen</Link></li>
                  <li><Link to="/unternehmen">Für Unternehmen</Link></li>
                  <li><Link to="/kontakt">Kontakt</Link></li>
                  <li><Link to="/job">Jobportal</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-menu wow slideInUp" data-wow-delay=".6s">
                <h3>Öffnungszeiten</h3>
                <ul>
                  <li>Montag - Freitag</li>
                  <li>8:00-12:00 Uhr</li>
                  <li>13:30-17:30 Uhr</li>
                  <li>Wochenende</li>
                  <li>geschlossen</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-menu wow slideInUp" data-wow-delay=".7s">
                <h3>Unternehmen</h3>
                <ul>
                  <li className="address">worknet ag <br />Kanonengasse 30 <br />4051 Basel</li>
                  <li><Link to="tel:+41615601010">T: +41 61 560 10 10</Link></li>
                  <li><Link to="mailto:info@worknet.ag">E-Mail: info@worknet.ag</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-menu wow slideInUp" data-wow-delay=".8s">
                <h3>Partnerfirma</h3>
                <ul>
                  <li className="address">worknet services ag <br />Ringstrasse 8 <br />4600 Olten</li>
                  <li><Link to="tel:+41622951818">T: +41 62 295 18 18</Link></li>
                  <li><Link to="mailto:info@worknetservices.ch">E-Mail: info@worknetservices.ch</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row membership wow slideInUp">
            <div className="col-md-3">
              <div className="footer-menu">
                <h3>Mitgliedschaft</h3>
                <ul>
                  <li><Link to="/"><img src="assets/img/swissstaffing.png" alt="swissstaffing"
                    className="img-fluid" /></Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="social-icon wow slideInUp" data-wow-delay=".5s">
                <ul>
                  <li><Link to="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></Link></li>
                  <li><Link to="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link></li>
                  <li><Link to="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                  <li><Link to="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></Link></li>
                </ul>
              </div>

              <div className="sm-menu wow slideInUp" data-wow-delay=".6s">
                <ul>
                  <li><Link to="/coming-soon">Datenschutzerklärung</Link></li>
                  <li><Link to="/coming-soon">Cookies</Link></li>
                  <li><Link to="/coming-soon">Impressum</Link></li>
                  <li><Link to="/kontakt">Kontakt</Link></li>
                </ul>
              </div>

              <div className="copyright wow jello" data-wow-delay=".7s">
                <p>© 2022 worknet AG - all rights reserved</p>
              </div>
            </div>
          </div>
        </div>

      </footer>
      <ScrollTopToBottom />
    </>
  )
}

export default Footer
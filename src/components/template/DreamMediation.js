import React from 'react'
import { Link } from 'react-router-dom'

const DreamMediation = () => {
  return (
    <section className="separates bg-dark">
        <div className="container-fluid container-custom">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="separates-left">
                        <div className="title wow slideInUp">
                            <h2>Nur ein Schritt trennt Dich von Deiner nächsten Traum Vermittlung</h2>
                        </div>

                        <Link to="/job" className="cutsom-btn wow slideInUp">Finde Deinen nächsten Job <i
                                className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="separates-img">
                        <div className="img-style wow slideInRight">
                            <img src="assets/img/img4.jpg" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DreamMediation
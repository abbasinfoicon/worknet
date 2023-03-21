import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const JobportalDetails = () => {
    return (
        <div className='jbpgDtls'>
            <Helmet>
                <title>Jobportal Details React | Worknetag</title>
            </Helmet>
            
            <section className="jobportal bg-white custom-padding">
                <div className="container-fluid container-custom">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bredcrumb">
                                <ul>
                                    <li><img src="assets/img/navigate-prev.png" alt="" className="img-fluid prev" /> <Link
                                        to="/job">Zurück</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <div className="jobportal-details">
                                <div className="img-style wow slideInUp">
                                    <img src="assets/img/img9.jpg" alt="" className="img-fluid" />
                                </div>

                                <div className="content-style wow slideInUp">
                                    <h2>Job (m/w/d) - Jobdetails - Verdienst</h2>

                                    <div className="heead wow slideInUp">
                                        <h3>Jobdetails</h3>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir tempor.
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor.
                                        </p>
                                    </div>

                                    <ul className="custom_ul ul1 wow slideInUp">
                                        <li>
                                            <p><span>1</span> Referenznummer</p><span>xxx</span>
                                        </li>
                                        <li>
                                            <p><i className="fa-solid fa-location-dot"></i> Einsatzort</p><span>Lorem Ipsum</span>
                                        </li>
                                        <li>
                                            <p><i className="fa-solid fa-briefcase"></i> Entgeltgruppe</p><span>xx</span>
                                        </li>
                                        <li>
                                            <p><i className="fa-regular fa-clock"></i> Art der Anstellung</p><span>Lorem
                                                Ipsum</span>
                                        </li>
                                        <li>
                                            <p><i className="fa-solid fa-dollar-sign"></i> Verdienst</p><span>Lorem Ipsum</span>
                                        </li>
                                    </ul>
                                    <div className="heead wow slideInUp">
                                        <h3>Arbeitszeiten</h3>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir tempor.
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor.
                                        </p>
                                    </div>

                                    <ul className="custom_ul ul2 wow slideInUp">
                                        <li>Lorem ipsum dolor:</li>
                                        <li>Lorem ipsum dolor</li>
                                        <li>Lorem ipsum dolor</li>
                                        <li>Lorem ipsum dolor</li>
                                        <li>Lorem ipsum dolor</li>
                                        <li>Lorem ipsum dolor</li>
                                        <li>Lorem ipsum dolor</li>
                                    </ul>

                                    <div className="heead wow slideInUp">
                                        <h3>Arbeitgeberleistungen</h3>
                                    </div>

                                    <ul className="custom_ul ul3 wow slideInUp">
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor.</li>
                                    </ul>

                                    <div className="heead wow slideInUp">
                                        <h3>Ihre Aufgaben</h3>
                                    </div>

                                    <ul className="custom_ul ul3 wow slideInUp">
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor.</li>
                                    </ul>

                                    <div className="heead wow slideInUp">
                                        <h3>Ihr Profil</h3>
                                    </div>

                                    <ul className="custom_ul ul3 wow slideInUp">
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor.</li>
                                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor.</li>
                                    </ul>

                                    <div className="heead wow slideInUp">
                                        <h3>Kontaktdaten</h3>
                                        <p><strong>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                            nonumy</strong>
                                        </p>
                                        <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                                    </div>

                                    <ul className='wow slideInUp'>
                                        <li>
                                            <p><strong>Tel.:</strong></p>
                                        </li>
                                        <li>
                                            <p><strong>Fax.:</strong></p>
                                        </li>
                                        <li>
                                            <p><strong>E-Mail:</strong></p>
                                        </li>
                                        <li>
                                            <p><strong>Web:</strong></p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bredcrumb wow slideInUp">
                                    <ul>
                                        <li><img src="assets/img/navigate-prev.png" alt="<" className="img-fluid prev" /> <Link
                                            to="/">Zurück zur Startseite</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="jobportal-apply bg-gray wow slideInUp">
                                <h2>Sie möchten sich bewerben?</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>

                                <form action="" className="contact-form wow slideInUp">
                                    <div className="form-group">
                                        <select name="" id="" className="form-control">
                                            <option value="">Anrede</option>
                                            <option value="">Anrede</option>
                                            <option value="">Anrede</option>
                                            <option value="">Anrede</option>
                                        </select>
                                    </div>

                                    <div className="form-group wow slideInUp">
                                        <input type="text" name="" id="" className="form-control" placeholder="Ihr Vorname" />
                                    </div>

                                    <div className="form-group wow slideInUp">
                                        <input type="text" name="" id="" className="form-control" placeholder="Ihr Nachname" />
                                    </div>

                                    <div className="form-group wow slideInUp">
                                        <input type="email" name="" id="" className="form-control"
                                            placeholder="Ihre E-Mail Adresse" />
                                    </div>

                                    <div className="form-group wow slideInUp">
                                        <input type="number" name="" id="" className="form-control"
                                            placeholder="Ihre Telefonnummer" />
                                    </div>

                                    <div className="form-group wow slideInUp">
                                        <input type="number" name="" id="" className="form-control" placeholder="Ihre Mobilnummer" />
                                    </div>

                                    <h3>Anlagen</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                                    </p>

                                    <div className="form-group">
                                        <input type="file" id="real-file" hidden="hidden" />
                                        <button type="button" id="custom-button">Datei anhängen</button>
                                        <span id="custom-text"></span>
                                    </div>

                                    <div className="form-group agreement wow slideInUp">
                                        <input id="agreement" type="checkbox" />
                                        <label htmlFor="agreement">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                            nonumy. Lorem ipsum dolor sit amet.</label>
                                    </div>

                                    <div className="form-group wow slideInUp">
                                        <label>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</label>
                                    </div>

                                    <Link to="/" className="cutsom-btn hover wow slideInUp">Absenden <i
                                        className="fa-solid fa-arrow-right"></i></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default JobportalDetails
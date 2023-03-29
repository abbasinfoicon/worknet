import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Banner from '../components/template/Banner'
import WorkTogether from '../components/template/WorkTogether'
import WorkWithUs from '../components/template/WorkWithUs'

const Kontakt = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    tel: "",
    theme: "",
    msg: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, tel, theme, msg } = data;
    alert("Data Submited- " + " Name- " + data.name + ", Email- " + data.email + ", Tel- " + data.tel + ", Theme- " + data.theme + ", Msg- " + data.msg);
    console.log("Submit-", data);

    // after submit data
    setData({
      name: "",
      email: "",
      tel: "",
      theme: "",
      msg: "",
    });
  };

  return (
    <div className='kontakt'>
      <Helmet>
        <title>Kontakt React | Worknetag</title>
      </Helmet>

      <Banner page={"contact"} />

      <WorkWithUs />

      <section className="contact bg-white">
        <div className="container-fluid container-custom">
          <div className="row">
            <div className="col-md-12">
              <div className="title wow slideInUp">
                <p>worknet ag</p>
                <h2>Kontaktiere Uns</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 wow slideInUp">
                      <div className="form-group">
                        <label htmlFor="">Dein Name</label>
                        <input type="text" name="name" value={data.name} onChange={handleChange} id="" className="form-control" placeholder="Name" />
                      </div>
                    </div>

                    <div className="col-md-6 wow slideInUp">
                      <div className="form-group">
                        <label htmlFor="">Deine E-Mail Adresse</label>
                        <input type="email" name="email" value={data.email} onChange={handleChange} id="" className="form-control"
                          placeholder="E-Mail Adresse" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 wow slideInUp">
                      <div className="form-group">
                        <label htmlFor="">Deine Telefonnummer</label>
                        <input type="number" name="tel" value={data.tel} onChange={handleChange} id="" className="form-control"
                          placeholder="Telefonnummer" />
                      </div>
                    </div>

                    <div className="col-md-6 wow slideInUp">
                      <div className="form-group">
                        <label htmlFor="">Thema</label>
                        <select className='form-control' name="theme" onChange={handleChange}>
                          <option value="dienstleistung" selected>Dienstleistung</option>
                          <option value="elektriker">Elektriker/in</option>
                          <option value="kaufmannisch">Kaufmännisch</option>
                          <option value="maler">Maler/in</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group wow slideInUp">
                    <label htmlFor="">Deine Nachricht</label>
                    <textarea name="msg" value={data.msg} onChange={handleChange} id="" cols="30" rows="10" className="form-control"
                      placeholder="Deine Nachricht"></textarea>
                  </div>

                  <div className="row">
                    <div className="col-md-6 wow slideInUp">
                      <button type="submit" className="btn-submit" >Senden</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact bg-gray">
        <div className="container-fluid container-custom">
          <div className="row align-items-end">
            <div className="col-md-6">
              <div className="title wow slideInUp">
                <p>worknet ag</p>
                <h2>Wo du uns findest</h2>
              </div>
            </div>

            <div className="col-md-6">
              <div className="title pl80 wow slideInUp">
                <h5>Wir vernetzen Arbeit und bringen Menschen erfolgreich zusammen.</h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="contact-dtls">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="map wow slideInUp">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10771.80512890444!2d7.581636763496437!3d47.549276908822264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b853153bf59d%3A0xb2e30f19933a1b6e!2sworknet%20ag!5e0!3m2!1sen!2sin!4v1676978887069!5m2!1sen!2sin"
                        width="100%" height="647" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="contact-dtls-info pl80 wow slideInUp">
                      <div className="icon">
                        <img src="assets/img/phone.png" alt="phone" className="img-fluid" />
                      </div>
                      <div className="info">
                        <h3>Telefonnummer</h3>
                        <Link to="tel:+41615601010">+41 61 560 10 10</Link>
                        <Link to="tel:+41615601010" className="cutsom-btn hover">Anrufen <i
                          className="fa-solid fa-arrow-right"></i></Link>
                      </div>
                    </div>

                    <div className="contact-dtls-info pl80 wow slideInUp">
                      <div className="icon">
                        <img src="assets/img/email.png" alt="email" className="img-fluid" />
                      </div>
                      <div className="info">
                        <h3>E-Mail</h3>
                        <Link to="mailto:info@worknet.ag">info@worknet.ag</Link>
                        <Link to="mailto:info@worknet.ag" className="cutsom-btn hover">Kontakt <i
                          className="fa-solid fa-arrow-right"></i></Link>
                      </div>
                    </div>

                    <div className="contact-dtls-info pl80 wow slideInUp">
                      <div className="icon">
                        <img src="assets/img/map.png" alt="location" className="img-fluid" />
                      </div>
                      <div className="info">
                        <h3>worknet ag</h3>
                        <Link to="https://goo.gl/maps/gwMWDa6XeJwtWSjYA">Kanonengasse 30, 4051 Basel</Link>
                        <Link to="https://goo.gl/maps/gwMWDa6XeJwtWSjYA" className="cutsom-btn hover"
                          target="_blank">Navigieren <i className="fa-solid fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkTogether />
    </div>
  )
}

export default Kontakt
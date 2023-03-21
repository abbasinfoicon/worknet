import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axiosCall from '../components/Axios'
import Breadcreamb from '../components/parts/Breadcreamb'

const Jobportal = () => {
  const [isLoading, setLoading] = useState(true);
  const [job, setJob] = useState([]);

  useEffect(() => {
    axiosCall("job").then((res) => {
      setJob([...res.data]);
      setLoading(false);
    }
    );
  }, []);

  return (
    <div className='jbpg'>
      <Helmet>
        <title>Jobportal React | Worknetag</title>
      </Helmet>
      <section className="jobportal bg-white">
        <div className="container-fluid container-custom">
          <div className="row">
            <div className="col-md-12">
              <Breadcreamb />
            </div>
          </div>
          {
            isLoading ? <div className="loading"><img src='assets/img/loader.gif' alt='loading' /></div> :
              <div className="row">
                <div className="col-lg-6">
                  {
                    job.map((item, index) => {
                      return (
                        <div className="jobportal-list wow slideInUp" key={index}>
                          <h2>Job Titel</h2>
                          <Link to="/" className="department">Abteilung</Link>
                          <ul>
                            <li><i className="fa-solid fa-location-dot"></i> Einsatzort</li>
                            <li><i className="fa-regular fa-clock"></i> Art der Anstellung</li>
                          </ul>

                          <Link to="/job-details" className="cutsom-btn hover">Jetzt Bewerben <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                      )
                    })
                  }
                </div>

                <div className="col-lg-6">
                  <div className="contact-form pl80 wow slideInUp">
                    <div className="title">
                      <h2>Jobsuche</h2>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                      </p>
                    </div>

                    <div className="form-group">
                      <input type="text" name="" id="" className="form-control" placeholder="Welchen Job suchen Sie?" />
                    </div>

                    <div className="form-group">
                      <input type="text" name="" id="" className="form-control" placeholder="PLZ oder Ort" />
                    </div>

                    <div className="form-group">
                      <input type="text" name="" id="" className="form-control"
                        placeholder="Unternehmensbereich/Abteilung" />
                    </div>

                    <div className="form-group">
                      <select name="" id="" className="form-control">
                        <option value="">Art der Anstellung</option>
                        <option value="">Art der Anstellung</option>
                        <option value="">Art der Anstellung</option>
                        <option value="">Art der Anstellung</option>
                      </select>
                    </div>

                    <p className="all-fld">Alle Filter entfernen</p>

                    <div className="form-group text-end">
                      <Link to="/" className="cutsom-btn wow slideInUp">Filtern</Link>
                    </div>
                  </div>
                </div>
              </div>
          }
        </div>
      </section>
    </div>
  )
}

export default Jobportal
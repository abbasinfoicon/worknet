import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import axiosCall from '../components/Axios'
import Breadcreamb from '../components/parts/Breadcreamb'

const employ = [
  { value: 'festanstellung', label: 'Festanstellung' },
  { value: 'fulltime', label: 'Full time' },
  { value: 'minijob', label: 'Mini-job' },
  { value: 'nightshift', label: 'Night shifts' },
  { value: 'ptflexible', label: 'Part time - flexible' },
  { value: 'ptshift', label: 'Part time - shift' },
  { value: 'ptafternoon', label: 'Part time in the afternoon' },
  { value: 'ptevening', label: 'Part time in the evening' },
  { value: 'ptmonring', label: 'Part time in the morning' },
  { value: 'praktikum', label: 'Praktikum' },
  { value: 'shift', label: 'Shift' },
  { value: 'weekendshift', label: 'Shift / Night shifts / Weekends' },
  { value: 'teilzeit', label: 'Teilzeit' },
  { value: 'temporär', label: 'Temporär' },
  { value: 'temporör', label: 'Temporör' },
  { value: 'unbefristet', label: 'Unbefristet' },
  { value: 'vollzeit', label: 'Vollzeit, Teilzeit möglich' },
  { value: 'weekend', label: 'Weekend' },
  { value: 'wfh', label: 'Work from home/telework' },
];
const department = [
  { value: 'dienstleistung', label: 'Dienstleistung' },
  { value: 'elektriker', label: 'Elektriker/in' },
  { value: 'kaufmannisch', label: 'Kaufmännisch' },
  { value: 'maler', label: 'Maler/in' },
];

const Jobportal = () => {
  const [empOption, setEmpOption] = useState(null);
  const [depOption, setDepOption] = useState(null);
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
                          <h2>{item.title}</h2>
                          <Link to="/" className="department">{item.department}</Link>
                          <ul>
                            <li><i className="fa-solid fa-location-dot"></i> {item.location}</li>
                            <li><i className="fa-regular fa-clock"></i> {item.enployment}</li>
                          </ul>

                          <Link to={`/job/${item.slug}`} className="cutsom-btn hover">Jetzt Bewerben <i className="fa-solid fa-arrow-right"></i></Link>
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

                    <div className='form-group'>
                      <Select
                        defaultValue={empOption}
                        onChange={setEmpOption}
                        options={employ}
                        isMulti
                        placeholder="Unternehmensbereich/Abteilung"
                      />
                    </div>

                    <div className='form-group'>
                      <Select
                        defaultValue={depOption}
                        onChange={setDepOption}
                        options={department}
                        isMulti
                        placeholder="Art der Anstellung"
                      />
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
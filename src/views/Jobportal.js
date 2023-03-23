import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import Select from 'react-select';
import axiosCall from '../components/Axios';
import Breadcreamb from '../components/parts/Breadcreamb'
import JobList from '../components/template/JobList';


const Jobportal = () => {
  const selectDepartment = useRef();
  const selectEnpoyment = useRef();
  const [isLoading, setLoading] = useState(true);
  const [enployment, setEnployment] = useState([]);
  const [department, setDepartment] = useState([]);

  const [depOption, setDepOption] = useState([]);
  const [empOption, setEmpOption] = useState([]);

  const [job, setJob] = useState([]);
  const [query, setQuery] = useState(job);

  const [srval, setSrval] = useState({
    title: "",
    zipCity: ""
  });
  const handleChange = (e) => {
    setSrval({ ...srval, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, zipCity } = srval
    if (title || zipCity || empOption || depOption) {
      const filtered = job.filter((item) => {
        const titVal = item.title.toLocaleLowerCase().includes(title.toLowerCase());
        const zcVal = item.address.toLocaleLowerCase().includes(zipCity.toLowerCase());

        let depVal = true
        const dep = []
        if (depOption.length) {
          depOption.forEach(x => { dep.push(x.label.toLowerCase()) });
          depVal = dep.includes(item.department.toLowerCase());
        }

        let empVal = true
        const emp = []
        if (empOption.length) {
          empOption.forEach(y => { emp.push(y.label.toLowerCase()) });
          empVal = emp.includes(item.enployment.toLowerCase());
        }
        return titVal && zcVal && depVal && empVal
      });
      setQuery([...filtered]);
    } else {
      setQuery([...job]);
    }
  };

  const handleRemove = () => {
    setQuery([...job]);
    setSrval({
      title: "",
      zipCity: ""
    })

    selectDepartment.current.clearValue()
    selectEnpoyment.current.clearValue()
  }

  useEffect(() => {
    axiosCall("job").then((res) => {
      setJob([...res.data]);
      setQuery([...res.data]);
      setLoading(false);
    }
    );
  }, []);

  useEffect(() => {
    axiosCall("enployment").then((res) => { setEnployment([...res.data]); });
    axiosCall("department").then((res) => { setDepartment([...res.data]); });
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

          <div className="row">
            <div className="col-lg-6">
              <JobList jobData={query} loading={isLoading} />
            </div>

            <div className="col-lg-6">
              <div className="contact-form pl80 wow slideInUp">
                <div className="title">
                  <h2>Jobsuche</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" name="title" value={srval.title} onChange={handleChange} id="" className="form-control" placeholder="Welchen Job suchen Sie?" />
                  </div>

                  <div className="form-group">
                    <input type="text" name="zipCity" value={srval.zipCity} onChange={handleChange} id="" className="form-control" placeholder="PLZ oder Ort" />
                  </div>

                  <div className='form-group'>
                    <Select
                      ref={selectDepartment}
                      defaultValue={depOption}
                      onChange={setDepOption}
                      options={department}
                      isMulti
                      placeholder="Unternehmensbereich/Abteilung"
                    />
                  </div>

                  <div className='form-group'>
                    <Select
                      ref={selectEnpoyment}
                      defaultValue={empOption}
                      onChange={setEmpOption}
                      options={enployment}
                      isMulti
                      placeholder="Art der Anstellung"
                    />
                  </div>

                  <p className="all-fld" onClick={handleRemove}>Alle Filter entfernen</p>

                  <div className="form-group text-end">
                    <button type="submit" className="cutsom-btn wow slideInUp">Filtern</button>
                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Jobportal
import React, { useEffect, useState } from 'react'
import axiosCall from '../Axios';

const WorkWithUs = ({ clr }) => {
  const [isLoading, setLoading] = useState(true);
  const [workWith, setWorkWith] = useState([]);

  useEffect(() => {
    axiosCall("workwith").then((res) => {
      setWorkWith([...res.data]);
      setLoading(false);
    }
    );
  }, []);


  return (
    <section className={`workWith ${clr ? 'bg-white' : 'bg-gray pb50_pt80'}`}>
      <div className="container-fluid container-custom">
        <div className="row">
          <div className="col-md-12">
            <div className="title wow slideInUp">
              <h3>Warum solltest Du mit worknet ag zusammenarbeiten?</h3>
              <div className="line"></div>
            </div>
          </div>
        </div>
        {
          isLoading ? <div className="loading"><img src='assets/img/loader.gif' alt='loading' /></div> :
            <div className="row">
              {
                workWith.map((item, index) => {
                  return (
                    <div className="col-lg-3 col-md-6" key={index}>
                      <div className="workWith-content wow slideInUp" data-wow-delay={`.${index + 5}s`}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        }
      </div>
    </section>
  )
}

export default WorkWithUs
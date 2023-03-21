import React, { useEffect, useState } from 'react'
import axiosCall from '../Axios';


const AboutBx = () => {
  const [isLoading, setLoading] = useState(true);
  const [aboutBx, setAboutBx] = useState([]);

  useEffect(() => {
    axiosCall("aboutBx").then((res) => {
      setAboutBx([...res.data])
      setLoading(false);
    });

  }, []);

  return (
    <section className="aboutBx bg-gray">
      {
        isLoading ? <div className="loading"><img src='assets/img/loader.gif' alt='loading' /></div> :
          <div className="container-fluid container-custom">
            <div className="row">
              {
                aboutBx.map((item, index) => {
                  return (
                    <div className="col-md-6 col-lg-3" key={index}>
                      <div className="aboutBx-sec wow slideInUp" data-wow-delay={`.${index + 5}s`}>
                        <div className="img-style">
                          <img src={item.img} alt={item.heading} className="img-fluid" />
                        </div>

                        <h3>{item.heading}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      }
    </section>
  )
}

export default AboutBx
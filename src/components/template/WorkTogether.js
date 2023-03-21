import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosCall from '../Axios';

const WorkTogether = () => {
    const [isLoading, setLoading] = useState(true);
    const [workTogether, setWorkTogether] = useState([]);

    useEffect(() => {
        axiosCall("worktogether").then((res) => {
            setWorkTogether([...res.data]);
            setLoading(false);
        }
        );
    }, []);

    return (
        <section className="review bg-gray">
            <div className="container-fluid container-custom">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title d-flex justify-content-between align-items-center mb-5 wow slideInUp">
                            <h2>Lass uns zusammen arbeiten.</h2>
                            <Link to="/kontakt" className="cutsom-btn btn-right">Los geht’s <i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    {
                        isLoading ? <div className="loading"><img src='assets/img/loader.gif' alt='loading' /></div> :

                            workTogether.map((item, index) => {
                                return (
                                    <div className="col-md-4" key={index}>
                                        <div className="aboutBx-sec wow slideInUp" data-wow-delay={`.${index + 5}s`}>
                                            <div className="img-style">
                                                <p>0{index + 1}</p>
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
        </section>
    )
}

export default WorkTogether
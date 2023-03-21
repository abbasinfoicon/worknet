import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosCall from '../Axios';

const BestenTalente = ({ show }) => {
    const [isLoading, setLoading] = useState(true);
    const [service, setService] = useState([]);

    useEffect(() => {
        axiosCall("service").then((res) => {
            setService([...res.data]);
            setLoading(false);
        }
        );
    }, []);


    return (
        <section className="weWill bg-gray">
            {
                isLoading ? <div className="loading"><img src='assets/img/loader.gif' alt='loading' /></div> :
                    <div className="container-fluid container-custom">
                        <div className="row px-100">
                            <div className="col-md-12 text-center">
                                {
                                    show === 'startTwo' ? 
                                    <div className="title mx-auto w-50 wow slideInUp d-none">
                                        <h2>Finden Sie die besten Talente mit <span>worknet.ag</span></h2>
                                    </div> 
                                    : <div class="title mx-auto w-50 wow slideInUp">
                                        <p>Unsere Leistungen</p>
                                        <h2>Diese Aufgaben übernehmen wir für Dich</h2>
                                    </div>
                                }
                            </div>
                        </div>
                        <br />

                        {

                            service.slice(show === 'startTwo' ? 0 : 2, show === 'startTwo' ? 2 : service.length).map((item, index, row) => {
                                return (
                                    <div className={`row custom-padding ${(index + 1) % 2 == 0 ? 'flex-md-row-reverse order-change' : ''} ${index + 1 === row.length ? 'last' : "mb-160"}`} key={index}>
                                        <div className="col-lg-6">
                                            <div className="weWill-img wow slideInUp">
                                                <div className="img-style">
                                                    <img src={item.img} alt={item.subTitle} className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="weWill-content">
                                                <div className="title wow slideInUp">
                                                    <p>{item.subTitle}</p>
                                                    <h3>{item.title}</h3>
                                                </div>

                                                <p className='wow slideInUp'>{item.content}</p>
                                                <p className='wow slideInUp'>{item.desc}</p>
                                                <br />
                                                {
                                                    item.link == '' ? '' : <Link to={item.link} className="cutsom-btn hover wow slideInUp">{item.linkText} <i
                                                        className="fa-solid fa-arrow-right"></i></Link>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </section>
    )
}

export default BestenTalente
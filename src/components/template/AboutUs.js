import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom'
import axiosCall from '../Axios';

const AboutUs = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [about, setAbout] = useState([]);

    useEffect(() => {
        axiosCall("page").then((res) => {
            setAbout([...res.data]);
            setLoading(false);
        }
        );
    }, []);

    return (

        <section className="aboutUs bg-white">
            <div className="container-fluid container-custom">
                {
                    isLoading ? <div className="loading"><img src='assets/img/loader.gif' alt='loading' /></div> :
                        about.map((item, index) => {
                            return item.name == props.page ? (
                                <div className="row" key={index}>
                                    <div className="col-lg-6">
                                        <div className="aboutUs-img">
                                            <div className="overlay-bg wow slideInUp" data-wow-delay=".5s"></div>
                                            <div className="img-style wow slideInUp" data-wow-delay=".8s">
                                                <img src={item.img} alt="about" className="img-fluid" />
                                            </div>

                                            <div className="seit wow slideInUp" data-wow-delay="1s">
                                                <p>{item.name == 'company' ? 'Aktuell' : 'Seit'}</p>
                                                <h2 className="counter wow slideInUp">
                                                    <CountUp
                                                        start={item.startVal}
                                                        end={item.endVal}
                                                        duration={5}
                                                        separator=""
                                                        delay={2}
                                                        enableScrollSpy />
                                                </h2>
                                                <p>{item.name == 'company' ? 'Vakanzen' : ''}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="aboutUs-content">
                                            <div className="title">
                                                <p className="wow slideInUp">{item.subTitle}</p>
                                                <h3 className="wow slideInUp">{item.title}</h3>
                                            </div>

                                            <div className="content-sec wow slideInUp">
                                                <p>{item.desc}</p>
                                                <ul>
                                                    {
                                                        item.list.map((list, i) => {
                                                            return <li key={i}><i className="fa-solid fa-check"></i> {list.text}</li>
                                                        })
                                                    }
                                                </ul>

                                                <Link to={item.link} className="cutsom-btn hover wow slideInUp">{item.linkText} <i
                                                    className="fa-solid fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        })
                }
            </div>
        </section>
    )
}

export default AboutUs
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axiosCall from '../components/Axios'
import AboutUs from '../components/template/AboutUs'
import Banner from '../components/template/Banner'
import Bewertungen from '../components/template/Bewertungen'
import WorkTogether from '../components/template/WorkTogether'
import WorkWithUs from '../components/template/WorkWithUs'

const Team = () => {
    const [isLoading, setLoading] = useState(true);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        axiosCall("team").then((res) => {
            setTeam([...res.data]);
            setLoading(false);
        }
        );
    }, []);

    return (
        <div className='teamPg'>
            <Helmet>
                <title>Team React | Worknetag</title>
            </Helmet>

            <Banner page={"team"} />

            <section className="team bg-gray">
                <div className="container-fluid container-custom">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title text-center wow slideInUp">
                                <p>worknet ag</p>
                                <h2>Das Team</h2>
                            </div>
                        </div>
                    </div>
                    {
                        isLoading ? <div className="loading"><img src='assets/img/loader.gif' alt='loading' /></div> :
                            <div className="row">
                                {
                                    team.map((item, index) => {
                                        return (
                                            <div className="col-lg-6" key={index}>
                                                <div className="team-member wow slideInUp">
                                                    <div className="img-style">
                                                        <img src={item.img} alt={item.name} className="img-fluid statImg" />
                                                        <img src={item.img2} alt={item.name} className="img-fluid hoverImg" />

                                                        <div className="overlay">
                                                            <h3>{item.name}</h3>
                                                            <p>{item.designation}</p>
                                                        </div>
                                                    </div>

                                                    <div className="details">
                                                        <h3>{item.name}</h3>
                                                        <p>{item.designation}</p>
                                                        <Link to={`tel:${item.phone}`}>T: {item.phone}</Link>

                                                        <div className="social-icon">
                                                            <ul>
                                                                <li><Link to={`https://www.linkedin.com/${item.linkedin}`} target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                                                <li><Link to={`mailto:${item.email}`} target="_blank"><i className="fa-solid fa-envelope"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    }
                </div>
            </section>

            <AboutUs page={"team"} />
            <WorkWithUs cls={"white"} />
            <WorkTogether />
        </div>
    )
}

export default Team
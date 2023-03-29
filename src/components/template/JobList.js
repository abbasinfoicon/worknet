import React from 'react'
import { Link } from 'react-router-dom'

const JobList = ({ jobData, loading }) => {

    return (
        <div className='jobList pos_rel'>
            {
                loading ? <div className="loading"><img src='assets/img/loader.gif' alt='loading' /></div> :
                    jobData.length > 0 ?
                        jobData?.map((item, index) => {
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
                        }) : <h2 className='no-job'><img src='assets/img/no-result.png' />Kein Job hier..</h2>
            }
        </div>
    )
}

export default JobList
import React, { useEffect, useState } from 'react'
import { useGetSingleJobQuery } from '../../../features/services/jobApi';

const View = ({ content, close }) => {
    const [sgl, setSgl] = useState('')
    const { data, isLoading, isError } = useGetSingleJobQuery(content[0]._id);

    useEffect(() => {
        setSgl(content[0]);
    }, [data])


    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>An error occured {data.error.error}</div>;

    return (
        <div className="view-data p-3">
            <div className="row">
                <div className="col-md-12">
                    <img src={sgl.img} alt="India" className='img-style img-fluid' />
                </div>

                <div className="col-md-12">
                    <h3 className="text-primary">{sgl.title}</h3>
                    <p className="text-primary">{sgl.smallDesc}</p>
                    <p className="text-muted" dangerouslySetInnerHTML={{ __html: JSON.stringify(sgl.content) }}></p>

                    <div className='row'>
                        <div className='col-md-6'>
                            <ul>
                                <li><strong>Refrence: </strong>{sgl.reference}</li>
                                <li><strong>Department: </strong>{sgl.department}</li>
                                <li><strong>Location: </strong>{sgl.location}</li>
                                <li><strong>Address: </strong>{sgl.address}</li>
                                <li><strong>City: </strong>{sgl.city}</li>
                                <li><strong>Salary: </strong>{sgl.salary}</li>
                                <li><strong>Enployment: </strong>{sgl.enployment}</li>
                            </ul>
                        </div>

                        <div className='col-md-6'>
                            <ul>
                                <li><strong>Merit: </strong>{sgl.merit}</li>
                                <li><strong>Working: </strong>{sgl.working}</li>
                                <li><strong>Emp Benefits: </strong>{sgl.empBenefits}</li>
                                <li><strong>Your Tasks: </strong>{sgl.yourTasks}</li>
                                <li><strong>Your Profile: </strong>{sgl.yourProfile}</li>
                                <li><strong>Contact: </strong>{sgl.contact}</li>
                                <li><strong>Author: </strong>{sgl.author}</li>
                                <li><strong>Date: </strong>{sgl.createdAt}</li>
                            </ul>
                        </div>
                    </div>

                    <p className={`text-${sgl.status == 'success' ? 'success' : sgl.status == 'pending' ? 'warning' : 'danger'} mb-0 mr-2`}>{sgl.status}</p>
                    <button type="button" className="btn btn-default border" onClick={() => close()}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default View
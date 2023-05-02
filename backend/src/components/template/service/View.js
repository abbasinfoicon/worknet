import React, { useEffect, useState } from 'react'
import { useGetSingleDataQuery } from '../../../features/services/serviceApi';

const View = ({ content, close }) => {
    const [sgl, setSgl] = useState('')
    const { data, isLoading, isError } = useGetSingleDataQuery(content[0]._id);

    useEffect(() => {
        setSgl(content[0]);
    }, [data])


    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>An error occured {data.error.error}</div>;

    return (
        <div className="view-data p-3">
            <div className="row">
                <div className="col-md-12 mb-3">
                    <img src={`//${sgl.img}`} alt="India" className='img-style img-fluid' />
                </div>

                <div className="col-md-12">
                    <h3 className="text-primary">{sgl.title}</h3>
                    <p className="text-primary">{sgl.subtitle}</p>
                    <p className="text-muted" dangerouslySetInnerHTML={{ __html: JSON.stringify(sgl.content) }}></p>

                    <p><strong>Link Text</strong>: {sgl.linkTxt}</p>
                    <p><strong>Link</strong>: {sgl.link}</p>

                    <p><strong>Status</strong>: <span className={`text-${sgl.status == 'success' ? 'success' : sgl.status == 'pending' ? 'warning' : 'danger'} mb-0 mr-2`}> {sgl.status}</span></p>
                    <button type="button" className="btn btn-default border" onClick={() => close()}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default View
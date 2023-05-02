import React, { useEffect, useState } from 'react'
import { useDeleteJobMutation } from '../../../features/services/jobApi';
import { toast } from 'react-toastify';

const Delete = ({ content, close }) => {
    const [deleteSlider, resDel] = useDeleteJobMutation();
    const [sgl, setSgl] = useState('')

    const deleteData = async (id) => {
        const res = await deleteSlider(id);

        toast.success(res.data.message);
        close();
    }

    useEffect(() => {
        setSgl(content[0]);
    }, [content])


    return (
        <div className="delete-modal">
            <i className="fas fa-times"></i>
            <h3>Are you sure?</h3>
            <p>Do you really want to delete these records? This process cannot be undone.</p>

            <div className="action">
                <button type="button" className="btn btn-default border" onClick={() => close()}>Close</button>
                <button className="btn btn-danger" onClick={() => deleteData(sgl._id)}>Delete</button>
            </div>
        </div>
    )
}

export default Delete
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const params = useLocation();

    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">{(params.pathname).slice(1)}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                                <Link to="/dashboard">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">{(params.pathname).slice(1)}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb
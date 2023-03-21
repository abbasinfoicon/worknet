import React from 'react'
import { Link } from 'react-router-dom'

const Breadcreamb = () => {
    return (
        <div className="bredcrumb  wow slideInUp">
            <ul>
                <li><Link to="/">Startseite</Link> <img src="assets/img/navigate-next.png" alt="" className="img-fluid next" /></li>
                <li>Jobsuche</li>
            </ul>
        </div>
    )
}

export default Breadcreamb
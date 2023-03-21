import React from 'react'
import { Helmet } from 'react-helmet'

const ComingSoon = () => {
    return (
        <section className="section-t">
            <Helmet>
                <title>Coming Soon React | Worknetag</title>
            </Helmet>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-t-other">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-md-6 wow slideInUp">
                                    <img src="assets/img/coming-soon.png" alt="coming-soon" className="img-fluid" />
                                    <h3>Great things coming soon...!</h3>
                                    <p>We are small and growing consulting firm with big ideas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon
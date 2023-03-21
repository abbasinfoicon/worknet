import React from 'react'
import { Helmet } from 'react-helmet'

const PageNotFound = () => {
    return (
        <div className='pgnotfont'>
            <Helmet>
                <title>Page Not Found React | Worknetag</title>
            </Helmet>

            <section className="section-t">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-t-other">
                                <div className="row align-items-center wow slideInUp">
                                    <div className="col-md-6">
                                        <h1>Oops!</h1>
                                        <h3>404 - Page not found</h3>
                                        <p>The page your are lokking for might have been........</p>
                                    </div>

                                    <div className="col-md-6">
                                        <img src="assets/img/footer-space-man.webp" alt="404" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageNotFound
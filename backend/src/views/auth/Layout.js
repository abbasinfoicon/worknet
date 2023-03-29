import React from 'react'
import { Helmet } from "react-helmet";
import { Link, Outlet, useLocation } from 'react-router-dom'

import Login from './Login';

const Layout = () => {
    const params = useLocation();
    return (
        <>
            <Helmet>
                <title>
                    {
                        (params.pathname === '/login' || params.pathname === '/') ? 'Login | Infoicon' : 
                        (params.pathname === '/register') ? 'Register | Infoicon' : 'Forgot Password | Infoicon'
                    }
                </title>
            </Helmet>


            <div className='login-page'>
                <div className="login-box">
                    <div className="login-logo">
                        <Link to="/"><b>Info</b>ICON</Link>
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">
                                {
                                    (params.pathname === '/login' || params.pathname === '/') ? 'Sign in to start your session' : (params.pathname === '/register') ? 'Register a new membership' : 'You forgot your password? Here you can easily retrieve a new password.'
                                }
                            </p>

                            {
                                (params.pathname === '/') ? <Login /> : <Outlet />
                            }


                            {
                                (params.pathname === "/register" || params.pathname === "/login" || params.pathname === '/') && (
                                    <div className="social-auth-links text-center mb-3">
                                        <p>- OR -</p>
                                        <Link to="/" className="btn btn-block btn-primary">
                                            <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                                        </Link>
                                        <Link to="/" className="btn btn-block btn-danger">
                                            <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                                        </Link>
                                    </div>
                                )
                            }

                            {
                                (params.pathname === "/register") ? (
                                    ''
                                ) : (params.pathname === "/login" || params.pathname === '/') ? (
                                    <p className="mb-1"><Link to="/forgot-password">I forgot my password</Link></p>
                                ) : (
                                    <p className="mb-1 mt-3"><Link to="/login">Login</Link></p>
                                )
                            }
                            {
                                (params.pathname === "/register") ? (
                                    <p className="mb-0"><Link to="/login">I already have a membership</Link></p>
                                ) : (<p className="mb-0"><Link to="/register">Register a new membership</Link></p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
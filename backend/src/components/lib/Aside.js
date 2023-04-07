import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Aside = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/dashboard" className="brand-link">
                <img src="assets/img/logo.png" alt="Worknet" className="brand-image elevation-custom" />
            </Link>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="assets/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <Link to="/profile" className="d-block">Alexander Pierce</Link>
                    </div>
                </div>

                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <NavLink to="/dashboard" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p> Dashboard </p>
                            </NavLink>
                        </li>

                        <li className="nav-item menu-has-child">
                            <NavLink to="#" className="nav-link">
                                <i className="nav-icon fas fa-book"></i>
                                <p> Pages <i className="fas fa-angle-left right"></i></p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/profile" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Profile</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>About us</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/application" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Application</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/company" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Company</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/data-protection" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Data protection</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/cookies" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Cookies</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/imprint" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>imprint</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/slider" className="nav-link">
                                <i className="nav-icon fas fa-sliders-h"></i>
                                <p> Hero Slider <span className="badge badge-info right">6</span></p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/job" className="nav-link">
                                <i className="nav-icon far fa-calendar-alt"></i>
                                <p> Jobs <span className="badge badge-info right">6</span></p>
                            </NavLink>
                        </li>

                        <li className="nav-header">MEDIA</li>

                        <li className="nav-item">
                            <NavLink to="/services" className="nav-link">
                                <i className="nav-icon fas fa-users-cog"></i>
                                <p> Services </p>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/our-features" className="nav-link">
                                <i className="nav-icon fas fa-tasks"></i>
                                <p> Our Features</p>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/testimonial" className="nav-link">
                                <i className="nav-icon fas fa-quote-right"></i>
                                <p> Testimonial </p>
                            </NavLink>
                        </li>

                        <li className="nav-header">CONTACT INFO</li>

                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <p> Contact us </p>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/team" className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <p> Team </p>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/address" className="nav-link">
                                <i className="nav-icon far fa-address-book"></i>
                                <p> Address </p>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/membership" className="nav-link">
                                <i className="nav-icon fas fa-handshake"></i>
                                <p> Membership </p>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/timing" className="nav-link">
                                <i className="nav-icon far fa-clock"></i>
                                <p> Timing </p>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/social" className="nav-link">
                                <i className="nav-icon fas fa-share-alt"></i>
                                <p> Social </p>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/logout" className="nav-link">
                                <i className="nav-icon fas fa-sign-out-alt"></i>
                                <p> Logout </p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Aside
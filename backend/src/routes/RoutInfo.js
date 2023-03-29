import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../views/pages/Layout';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';
import ForgotPassword from '../views/auth/ForgotPassword';
import ResetPassword from '../views/auth/ResetPassword';
import Dashboard from '../views/pages/Dashboard'
import Profile from '../views/pages/Profile'
import About from '../views/pages/About'
import Contact from '../views/pages/Contact'
import Slider from '../views/pages/Slider'
import Social from '../views/pages/Social'
import Testimonial from '../views/pages/Testimonial'
import Address from '../views/pages/Address'
import Team from '../views/pages/Team'
import Logout from '../views/pages/Logout'
import PageNotFound from '../views/pages/PageNotFound';
import Layout from '../views/auth/Layout';
import Application from '../views/pages/Application';
import Company from '../views/pages/Company';
import Job from '../views/pages/Job';
import Services from '../views/pages/Services';
import OurFeatures from '../views/pages/OurFeatures';
import Membership from '../views/pages/Membership';
import Timing from '../views/pages/Timing';
import DataProtection from '../views/pages/DataProtection';
import Cookies from '../views/pages/Cookies';
import Imprint from '../views/pages/Imprint';

const RoutInfo = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Route>

            <Route path="/" element={<Home />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/application" element={<Application />} />
                <Route path="/company" element={<Company />} />
                <Route path="/data-protection" element={<DataProtection />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/imprint" element={<Imprint />} />
                <Route path="/slider" element={<Slider />} />
                <Route path="/job" element={<Job />} />
                <Route path="/services" element={<Services />} />
                <Route path="/our-features" element={<OurFeatures />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<Team />} />
                <Route path="/address" element={<Address />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/timing" element={<Timing />} />
                <Route path="/social" element={<Social />} />
                <Route path="/logout" element={<Logout />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default RoutInfo
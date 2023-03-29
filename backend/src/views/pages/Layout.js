import React from 'react'
import { Outlet } from 'react-router-dom'
import Breadcrumb from '../../components/blocks/Breadcrumb'
import Aside from '../../components/lib/Aside'
import Header from '../../components/lib/Header';
import Footer from '../../components/lib/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Aside />

            <div className="content-wrapper">
                <Breadcrumb />

                <section className="content">
                    <Outlet />
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Home
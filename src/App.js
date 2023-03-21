import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WOW from 'wowjs';
import './App.scss';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Footer from './components/Footer';
import Header from './components/Header';
import RouterMenu from './routes/RouterMenu';
import ScrollTop from './components/parts/ScrollTop';

function App() {
  const location = useLocation()

  useEffect(() => {
    const wow = new WOW.WOW({ live: false, mobile: false, });

    var scrolled = false;
    window.addEventListener('scroll', () => {
      if (!scrolled) {
        scrolled = true;
        wow.init();
      }
    })
  }, [location])

  return (
    <>
      <ScrollTop />
      <Header />
      <RouterMenu />
      <Footer />
    </>
  );
}

export default App;

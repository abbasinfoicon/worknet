import React from 'react'
import { Helmet } from 'react-helmet'
import BestenTalente from '../components/template/BestenTalente'
import Bewertungen from '../components/template/Bewertungen'
import WorkTogether from '../components/template/WorkTogether'
import WorkWithUs from '../components/template/WorkWithUs'
import Banner from '../components/template/Banner';
import AboutUs from '../components/template/AboutUs';

const Unternehmen = () => {

  return (
    <div className='unternehmen'>
      <Helmet>
        <title>Unternehmen React | Worknetag</title>
      </Helmet>

      <Banner page={"company"} />

      <WorkWithUs />

      <AboutUs page={"company"} />

      <BestenTalente show={"endTwo"} />

      <WorkTogether />
    </div>
  )
}

export default Unternehmen
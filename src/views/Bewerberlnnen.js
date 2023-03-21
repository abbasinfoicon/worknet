import React from 'react'
import { Helmet } from 'react-helmet'
import WorkTogether from '../components/template/WorkTogether'
import WorkWithUs from '../components/template/WorkWithUs'
import Banner from '../components/template/Banner';
import AboutUs from '../components/template/AboutUs';

const Bewerberlnnen = () => {

  return (
    <div className='bewerberlnnen'>
      <Helmet>
        <title>Bewerberlnnen React | Worknetag</title>
      </Helmet>

      <Banner page={"application"} />
      
      <WorkWithUs />

      <AboutUs page={"application"} />

      <WorkTogether />
    </div>
  )
}

export default Bewerberlnnen
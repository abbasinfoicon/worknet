import React from 'react'
import AboutBx from '../components/template/AboutBx'
import AboutUs from '../components/template/AboutUs'
import BestenTalente from '../components/template/BestenTalente'
import Bewertungen from '../components/template/Bewertungen'
import DreamMediation from '../components/template/DreamMediation'
import Slider from '../components/template/Slider'
import WorkTogether from '../components/template/WorkTogether'
import WorkWithUs from '../components/template/WorkWithUs'

const Home = () => {

  return (
    <div className='home'>
      <Slider />
      <AboutBx />

      <AboutUs page={"about"} />

      <BestenTalente show={"startTwo"} />
      
      <WorkWithUs clr={"white"}/>
      <Bewertungen />
      <WorkTogether />
      <DreamMediation />
    </div>
  )
}

export default Home
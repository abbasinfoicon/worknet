import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bewerberlnnen from '../views/Bewerberlnnen'
import ComingSoon from '../views/ComingSoon'
import Home from '../views/Home'
import Jobportal from '../views/Jobportal'
import JobportalDetails from '../views/JobportalDetails'
import Kontakt from '../views/Kontakt'
import PageNotFound from '../views/PageNotFound'
import Team from '../views/Team'
import Unternehmen from '../views/Unternehmen'

const RouterMenu = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bewerberlnnen' element={<Bewerberlnnen />} />
      <Route path='/unternehmen' element={<Unternehmen />} />
      <Route path='/team' element={<Team />} />
      <Route path='/kontakt' element={<Kontakt />} />
      <Route path='/job' element={<Jobportal />} />
      <Route path='/job/:slug' element={<JobportalDetails />} />

      <Route path='/coming-soon' element={<ComingSoon />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default RouterMenu
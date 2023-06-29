import { Box } from '@mui/material'
import { useEffect } from 'react'
import '../../assets/styles/about.css'
import Services from '../Home/components/Services'
import Testimonial from '../Home/components/Testimonial'
import AboutUs from './components/AboutUs'
import Team from './components/Team'
import BreadCrumbs from '../../components/BreadCrumbs'

export default function About() {
  const BreadCrumbsData = {
    name: 'About Us',
    path: '/about',
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Box>
      <BreadCrumbs BreadCrumbsData={BreadCrumbsData} />
      <AboutUs />
      <Services />
      <Team />
      <Testimonial />
    </Box>
  )
}

import { Box } from '@mui/material'
import { useEffect } from 'react'
import '../../assets/styles/about.css'
import Services from '../Home/components/Services'
import Testimonial from '../Home/components/Testimonial'
import AboutTop from './components/AboutTop'
import AboutUs from './components/AboutUs'
import Team from './components/Team'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Box>
      <AboutTop />
      <AboutUs />
      <Services />
      <Team />
      <Testimonial />
    </Box>
  )
}

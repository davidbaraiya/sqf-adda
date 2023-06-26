import '../../assets/styles/home.css'
import About from './components/About'
import Hero from './components/Hero'
import MultiCard from './components/MultiCard'
import Properties from './components/Properties'
import Services from './components/Services'
import Testimonial from './components/Testimonial'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Properties />
      <MultiCard />
      <Testimonial />
    </>
  )
}

export default Home

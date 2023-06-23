import '../../assets/styles/home.css'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import About from './components/About'
// import Aminities from './components/Aminities';
// import Apartment from './components/Apartment';
// import Blogs from './components/Blogs';
// import Gallery from './components/Gallery';
import Hero from './components/Hero'
import MultiCard from './components/MultiCard'
import Properties from './components/Properties'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Video from './components/Video'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Properties />
      {/* <Gallery /> */}
      {/* <Apartment /> */}
      {/* <Video /> */}
      {/* <Aminities /> */}
      <MultiCard />
      <Testimonial />
      {/* <Blogs /> */}
      <Footer />
    </>
  )
}

export default Home

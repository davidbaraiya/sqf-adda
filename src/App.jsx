import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Property from './pages/Details/Property'
import PropertyDetails from './pages/Details/components/PropertyDetails'
import PropertySubDetails from './pages/Details/components/PropertySubDetails'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/property" element={<Property />} />
          <Route
            path="/property/property_details/:data_id"
            element={<PropertyDetails />}
          />
          <Route
            path="/property/property_details/:data_id/:sub_id"
            element={<PropertySubDetails />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

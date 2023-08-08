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
import TermsCondition from './pages/policy/TermsCondition'
import PrivacyPolicy from './pages/policy/PrivacyPolicy'
import Residential from './pages/Details/Residential'
import Commercial from './pages/Details/Commercial'
import Error from './pages/404/Error'
import FormDetail from './pages/Details/components/UserDetails'
import BestLuxuryResidential from './pages/bestLuxuryResidential/BestLuxuryResidential'
import Builders from './pages/Details/Builders'
import BuilderDetails from './pages/Details/BuilderDetails'

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
          <Route path="*" element={<Error />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property/residential" element={<Residential />} />
          <Route path="/property/commercial" element={<Commercial />} />
          <Route path="/terms_and_condition" element={<TermsCondition />} />
          <Route path="/privacy_and_policy" element={<PrivacyPolicy />} />
          <Route
            path="/residential/property_details/:data_id"
            element={<PropertyDetails />}
          />
          <Route
            path="/residential/property_details/:data_id/:sub_id"
            element={<PropertySubDetails />}
          />
          <Route path="/user_details" element={<FormDetail />} />
          <Route
            path="/best_luxury_residential"
            element={<BestLuxuryResidential />}
          />
          <Route path="/property/builders" element={<Builders />} />
          <Route
            path="/property/builder_details/:id"
            element={<BuilderDetails />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

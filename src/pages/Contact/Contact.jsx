import { useEffect } from 'react'
import '../../assets/styles/contact.css'
import ContactAddress from './components/ContactAddress'
import ContactForm from './components/ContactForm'
import GoogleMap from './components/GoogleMap'
import BreadCrumbs from '../../components/BreadCrumbs'

export default function Contact() {
  const BreadCrumbsData = {
    name: 'Contact',
    path: '/contact',
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <BreadCrumbs BreadCrumbsData={BreadCrumbsData} />
      <ContactAddress />
      <ContactForm />
      <GoogleMap />
    </>
  )
}

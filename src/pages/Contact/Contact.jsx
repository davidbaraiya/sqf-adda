
import { useEffect } from 'react';
import '../../assets/styles/contact.css';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import ContactAddress from './components/ContactAddress';
import ContactForm from './components/ContactForm';
import ContactTop from './components/ContactTop';
import GoogleMap from './components/GoogleMap';

export default function Contact() {
    useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <Header />
        <ContactTop />
        <ContactAddress />
        <ContactForm />
        <GoogleMap />
        <Footer />
    </>
  )
}

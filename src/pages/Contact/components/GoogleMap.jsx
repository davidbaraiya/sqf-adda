import { Box } from '@mui/material'
import { Fade } from 'react-reveal'

export default function GoogleMap() {
  return (
    <Box className="cont-google-map">
      <Fade bottom cascade>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.552172145524!2d77.29850793617679!3d28.56561721037721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce443e3595893%3A0x49602e87ce4ffd80!2sFilm%20City%2C%20Sector%2016A%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1687880316419!5m2!1sen!2sin"
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Fade>
    </Box>
  )
}

import { Box, Container, Grid, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
// import img2 from '../../../assets/images/12.jpg';
import img from '../../../assets/images/9.png'

export default function About() {
  return (
    <Box className="hm-abt-container">
      <Container>
        <Grid container spacing={5}>
          <Grid className="hm-abt-lt-grd" item xs={12} md={6}>
            <Fade left>
              <Typography variant="h6" className="sec-subtitle">
                About Us
              </Typography>
              <Typography variant="h2" className="lg-font">
                About Us
              </Typography>
              <Typography>
                Welcome to Squarefoot Adda, your one-stop solution for all your
                real estate needs. As a leading real estate consultancy firm, we
                specialize in providing our clients with the best possible
                solutions for buying, selling, and renting properties in India.
                Our team of experienced and dedicated professionals works
                tirelessly to ensure that you have a hassle-free experience and
                find the perfect property that suits your needs.
              </Typography>

              {/* <ul>
                            <li>Live Music Cocerts at Luviana</li>
                            <li>Our SecretIsland Boat Tour is Just for You</li>
                            <li>Live Music Cocerts at Luviana</li>
                            <li>Live Music Cocerts at Luviana</li>
                        </ul> */}
              {/* <Grid sx={{ mt: 6 }} container spacing={1}>
                            <Grid item xs={4}>
                                <img style={{ width: '100%' }} src={img2} alt="" />
                            </Grid>
                            <Grid item xs={4}>
                                <img style={{ width: '100%' }} src={img2} alt="" />
                            </Grid>
                            <Grid item xs={4}>
                                <img style={{ width: '100%' }} src={img2} alt="" />
                            </Grid>
                        </Grid> */}
            </Fade>
          </Grid>
          <Grid className="hm-abt-rt-grd" item xs={12} md={6}>
            <Fade right>
              <img src={img} alt="" />
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

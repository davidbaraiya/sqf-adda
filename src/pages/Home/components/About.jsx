import { Box, Container, Grid, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
import img2 from '../../../assets/images/12.jpg'
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
                About <span className="highlight-text">Us</span>
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
            </Fade>
          </Grid>
          <Grid className="hm-abt-rt-grd" item xs={12} md={6}>
            {/* <div className="img-grp ">
              <div className="img-wrapper1">
                <img src={img2} alt="" />
              </div>
              <div className="img-wrappe2">
                <img src={img2} alt="" />
              </div>
              <div className="img-wrapper3">
                <img src={img2} alt="" />
              </div>
            </div> */}
            <Fade right>
              <img src={img} alt="img" loading="lazy" />
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

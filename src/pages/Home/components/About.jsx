import { Box, Container, Grid, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
import img1 from '../../../assets/images/img1.jpg'
import img2 from '../../../assets/images/img2.jpg'
import img3 from '../../../assets/images/img3.png'

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
            <Box display={'flex'} gap={2} className="img-grp" width="100%">
              <Fade right>
                <div className="img-wrapper img-wrapper-main">
                  <img src={img1} alt="img" loading="lazy" />
                </div>
              </Fade>
              <Box display="flex" flexDirection="column" gap={2} width="100%">
                <div className="img-wrapper">
                  <img src={img2} alt="img" loading="lazy" />
                </div>
                <div className="img-wrapper">
                  <img src={img3} alt="img" loading="lazy" />
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

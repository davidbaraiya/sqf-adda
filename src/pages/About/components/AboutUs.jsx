import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import { Fade } from 'react-reveal'
import img1 from '../../../assets/images/13.png'
import img2 from '../../../assets/images/8.png'

export default function AboutUs() {
  return (
    <Box className="abt-us-sec-container">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Fade bottom>
              <Box className="abt-left-box">
                <img src={img1} alt="" />
                <Box className="abt-left-vdo">
                  <Box className="abt-left-overlay">
                    <img src={img2} alt="" />
                    <IconButton>
                      <PlayArrowRoundedIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Grid>
          <Grid className="abt-us-right-sec" item xs={12} md={7}>
            <Fade bottom>
              <Box className="abt-right-box">
                <Typography variant="h6" className="sec-subtitle">
                  About Us
                </Typography>
                <Typography variant="h2" className="lg-font">
                  welcome to{' '}
                  <span className="highlight-text">squarefoot adda</span>
                </Typography>
                <Typography>
                  Your one-stop solution for all your real estate needs. As a
                  leading real estate consultancy firm, we specialize in
                  providing our clients with the best possible solutions for
                  buying, selling, and renting properties in India. Our team of
                  experienced and dedicated professionals works tirelessly to
                  ensure that you have a hassle-free experience and find the
                  perfect property that suits your needs.
                </Typography>
                <Button sx={{ mt: 6 }} className="abt-service-btn">
                  Our Services
                </Button>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

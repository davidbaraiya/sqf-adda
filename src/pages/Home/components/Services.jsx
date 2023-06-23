import { Box, Container, Grid, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
import img1 from '../../../assets/images/consult.png'
import img2 from '../../../assets/images/rent-house.png'
import img3 from '../../../assets/images/property-management.png'

export default function Services() {
  return (
    <Box className="hm-svc-container">
      <Container>
        <Box className="hm-svc-main">
          <Fade bottom>
            <Typography variant="h6" className="sec-subtitle">
              Our Services
            </Typography>
            <Typography variant="h2" className="lg-font">
              Our Realty Services
            </Typography>
          </Fade>

          <Grid sx={{ mt: 6 }} container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Fade bottom>
                <Box className="hm-svc-crd">
                  <img src={img1} alt="" />
                  <Typography variant="h4">CONSULTANT SERVICE</Typography>
                  <Typography>
                    Are you house-hunting? We can help you find a home.
                  </Typography>
                  {/* <Button>Find A Home</Button> */}
                </Box>
              </Fade>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Fade bottom>
                <Box className="hm-svc-crd">
                  <img src={img2} alt="" />
                  <Typography variant="h4">PROPERTY MANAGEMENT</Typography>
                  <Typography>
                    Manage your property while you're away? Contact us.{' '}
                  </Typography>
                  {/* <Button>Find A Home</Button> */}
                </Box>
              </Fade>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Fade bottom>
                <Box className="hm-svc-crd">
                  <img src={img3} alt="" />
                  <Typography variant="h4">RENTING AND SELLING</Typography>
                  <Typography>
                    Own a property and want the perfect buyer? Contact us.{' '}
                  </Typography>
                  {/* <Button>Find A Home</Button> */}
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

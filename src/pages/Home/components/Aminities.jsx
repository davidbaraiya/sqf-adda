import EastIcon from '@mui/icons-material/East'
import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import { Fade } from 'react-reveal'

import img from '../../../assets/images/downloa.png'

const Aminities = () => {
  return (
    <Box className="hm-amts-container">
      <Container>
        <Fade left>
          <Box className="hm-amts-sub-container">
            <Typography variant="h6" className="sec-subtitle">
              Our Aminities
            </Typography>
            <Typography variant="h2" className="lg-font">
              Building Aminities
            </Typography>
            <Grid sx={{ mt: 6 }} container rowSpacing={6} columnSpacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="hm-amts-card">
                  <Box className="hm-amts-icons">
                    <img src={img} alt="" />
                  </Box>
                  <Typography>Parking Space</Typography>
                  <IconButton>
                    <EastIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="hm-amts-card">
                  <Box className="hm-amts-icons">
                    <img src={img} alt="" />
                  </Box>
                  <Typography>Parking Space</Typography>
                  <IconButton>
                    <EastIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="hm-amts-card">
                  <Box className="hm-amts-icons">
                    <img src={img} alt="" />
                  </Box>
                  <Typography>Parking Space</Typography>
                  <IconButton>
                    <EastIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="hm-amts-card">
                  <Box className="hm-amts-icons">
                    <img src={img} alt="" />
                  </Box>
                  <Typography>Parking Space</Typography>
                  <IconButton>
                    <EastIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="hm-amts-card">
                  <Box className="hm-amts-icons">
                    <img src={img} alt="" />
                  </Box>
                  <Typography>Parking Space</Typography>
                  <IconButton>
                    <EastIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="hm-amts-card">
                  <Box className="hm-amts-icons">
                    <img src={img} alt="" />
                  </Box>
                  <Typography>Parking Space</Typography>
                  <IconButton>
                    <EastIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="hm-amts-card">
                  <Box className="hm-amts-icons">
                    <img src={img} alt="" />
                  </Box>
                  <Typography>Parking Space</Typography>
                  <IconButton>
                    <EastIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="hm-amts-card">
                  <Box className="hm-amts-icons">
                    <img src={img} alt="" />
                  </Box>
                  <Typography>Parking Space</Typography>
                  <IconButton>
                    <EastIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Aminities

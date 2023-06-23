import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
import img from '../../../assets/images/4.jpg'

export default function Team() {
  return (
    <Box className="abt-team-container">
      <Container>
        <Box className="abt-team-sec">
          <Fade bottom>
            <Typography variant="h6" className="sec-subtitle">
              Team
            </Typography>
            <Typography variant="h2" className="lg-font">
              Property Agents
            </Typography>
          </Fade>
          <Fade bottom>
            <Grid sx={{ my: 6 }} container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="abt-team-card">
                  <img src={img} alt="" />
                  <Box>
                    <Typography variant="h2">Rosalina D. William</Typography>
                    <Typography variant="h4">Real Estate Broker</Typography>
                    <Box>
                      <IconButton>
                        <FacebookRoundedIcon />
                      </IconButton>
                      <IconButton>
                        <TwitterIcon />
                      </IconButton>
                      <IconButton>
                        <LinkedInIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="abt-team-card">
                  <img src={img} alt="" />
                  <Box>
                    <Typography variant="h2">Rosalina D. William</Typography>
                    <Typography variant="h4">Real Estate Broker</Typography>
                    <Box>
                      <IconButton>
                        <FacebookRoundedIcon />
                      </IconButton>
                      <IconButton>
                        <TwitterIcon />
                      </IconButton>
                      <IconButton>
                        <LinkedInIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="abt-team-card">
                  <img src={img} alt="" />
                  <Box>
                    <Typography variant="h2">Rosalina D. William</Typography>
                    <Typography variant="h4">Real Estate Broker</Typography>
                    <Box>
                      <IconButton>
                        <FacebookRoundedIcon />
                      </IconButton>
                      <IconButton>
                        <TwitterIcon />
                      </IconButton>
                      <IconButton>
                        <LinkedInIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Fade>
        </Box>
      </Container>
    </Box>
  )
}

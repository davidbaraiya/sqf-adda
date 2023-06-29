import { Box, Container, Grid, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
import img1 from '../../../assets/images/100.png'
import img2 from '../../../assets/images/11.png'
import img3 from '../../../assets/images/12.png'

export default function ContactAddress() {
  return (
    <Box className="cont-adrs-container">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Fade bottom>
              <Box className="cont-adrs-card">
                <img src={img1} alt="" />
                <Typography variant="h4">Email Address</Typography>
                <Box>
                  <Typography>hello@squarefootadda.com</Typography>
                  {/* <Typography>jobs@webexample.com</Typography> */}
                </Box>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Fade bottom>
              <Box className="cont-adrs-card">
                <img src={img2} alt="" />
                <Typography variant="h4">Phone Number</Typography>
                <Box>
                  <Typography>+91 9990908821</Typography>
                  <Typography>+91 95822 55176</Typography>
                </Box>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Fade bottom>
              <Box className="cont-adrs-card">
                <img src={img3} alt="" />
                <Typography variant="h4">Office Address</Typography>
                <Box>
                  <Typography>C-4, 24th Floor, Alphathum Bhutani,</Typography>
                  <Typography>sector 90A, 201305</Typography>
                </Box>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

import { Box, Container, Grid, Typography } from '@mui/material'
import img2 from '../../../assets/images/customer-service.png'
import img1 from '../../../assets/images/experience.png'
import img3 from '../../../assets/images/transparency.png'

const setviceData = [
  {
    id: 1,
    img: img1,
    name: 'Expertise',
    desc: 'Our team of experienced professionals has a deep understanding of the real estate market in India. Weleverage our expertise to provide our clients with the best possible solutions for their real estate needs.',
  },
  {
    id: 2,
    img: img2,
    name: 'Transparency',
    desc: 'We believe in maintaining transparency in all our dealings. We provide our clients with accurate information and keep them informed at every step of the process.',
  },
  {
    id: 3,
    img: img3,
    name: 'Customer Service',
    desc: "At Squarefoot Adda, we prioritize our clients' satisfaction above everything else. We provide personalized service and ensure that our clients have a hassle-free experience",
  },
]

export default function MultiCard() {
  return (
    <Container data-aos="fade-left" className="pb">
      <Box>
        <Box sx={{ textAlign: 'center' }} className="hm-ttl-sub-container">
          <Typography variant="h6" className="sec-subtitle">
            Speciality
          </Typography>
          <Typography variant="h2" className="lg-font">
            Our Special <span className="highlight-text">features </span>
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {setviceData?.map(({ id, name, desc, img }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Box className="msc-card-container">
                <Box className="msc-card">
                  <Box className="msc-card-face msc-card-face-1">
                    <Box className="msc-card-content">
                      <img src={img} alt={name + 'img'} />
                    </Box>
                  </Box>
                  <Box className="msc-card-face msc-card-face-2">
                    <Box className="msc-card-content msc-card-content-2">
                      <h3>{name}</h3>
                      <p>{desc}</p>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

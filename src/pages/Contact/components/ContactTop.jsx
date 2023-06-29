import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

export default function ContactTop() {
  return (
    <Box className="cont-container">
      <Container>
        <Fade left>
          <Box className="cont-head">
            <Typography variant="h2">Contact Us</Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" to="/">
                Home
              </Link>
              <Link underline="hover" color="inherit" to="/contact">
                Contact
              </Link>
            </Breadcrumbs>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

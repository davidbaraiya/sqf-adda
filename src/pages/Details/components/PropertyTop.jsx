import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

export default function PropertyTop() {
  return (
    <Box className="cont-container">
      <Container>
        <Fade left>
          <Box className="cont-head">
            <Typography variant="h2" mb={2}>
              Property
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" m>
              <Link underline="hover" color="inherit" to="/">
                Home
              </Link>
              <Link underline="hover" color="inherit" to="/property">
                Property
              </Link>
            </Breadcrumbs>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

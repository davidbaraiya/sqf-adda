import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({ BreadCrumbsData }) => {
  const { name, path } = BreadCrumbsData
  return (
    <Box className="cont-container">
      <Container>
        <Fade left>
          <Box className="cont-head">
            <Typography variant="h2">{name}</Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" to="/" style={{ color: '#ff5a3c' }}>
                Home
              </Link>
              {/* <Link underline="hover" color="inherit" to={path}>
                {name}
              </Link> */}
              <Typography color="inherit" to={path}>
                {name}
              </Typography>
            </Breadcrumbs>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default BreadCrumbs

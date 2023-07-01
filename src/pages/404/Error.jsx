import './error.css'
import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

const Error = () => {
  return (
    <section className="error-page">
      <Container>
        <Typography variant="h2" component={'h2'}>
          404
        </Typography>
        <Typography>page not fount</Typography>
        <br />
        <Link to={'/'}>
          <Button>
            <NavigateBeforeIcon />
            Go To Home
          </Button>
        </Link>
      </Container>
    </section>
  )
}

export default Error

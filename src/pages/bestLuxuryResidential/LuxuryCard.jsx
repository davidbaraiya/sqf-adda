import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const LuxuryCard = ({ luxuryData }) => {
  const { id, propertyName, thumbnail, description, title } = luxuryData

  return (
    <Card sx={{ maxWidth: '100%' }} className="property-card luxury-card">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="img-wrapper">
          <img src={thumbnail} alt="img" loading="lazy" />
        </div>
        <CardContent sx={{ width: '100%' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            sx={{ marginBottom: '20px' }}
          >
            {propertyName}
          </Typography>
          <Typography sx={{ marginBottom: '20px' }} variant="h6" component="h6">
            {title}
          </Typography>
          <Typography className="desc" component="p">
            {description}
          </Typography>
          {/* <Link
            to={`/residential/property_details/${id}`}
            className="more-details-btn"
          >
            More Details
          </Link> */}
        </CardContent>
      </Box>
    </Card>
  )
}

export default LuxuryCard

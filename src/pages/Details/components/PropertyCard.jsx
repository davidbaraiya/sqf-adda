import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const PropertyCard = ({ flexDirection, property }) => {
  const { id, projectName, thumbnail, discription, data } = property

  if (data) {
    return data.map((curVal, i) => {
      const flexDirection = i % 2 !== 0 ? 'row-reverse' : 'row'
      return (
        <Card sx={{ maxWidth: '100%' }} className="property-card" key={i}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: flexDirection,
            }}
          >
            <div className="img-wrapper">
              <img src={curVal.thumbnail} alt="img" loading="lazy" />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h5"
                sx={{ marginBottom: '20px' }}
              >
                {curVal.projectName}
              </Typography>
              {curVal.discription?.slice(0, 3).map((desc, index) => (
                <Typography
                  className="desc"
                  key={index}
                  component="p"
                  sx={{ marginBottom: '10px' }}
                >
                  {desc}
                </Typography>
              ))}
              <Link
                to={`property_details/${id}/${curVal.subId}`}
                className="more-details-btn"
              >
                More Details
              </Link>
            </CardContent>
          </Box>
        </Card>
      )
    })
  }

  return (
    <Card sx={{ maxWidth: '100%' }} className="property-card">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: flexDirection,
        }}
      >
        <div className="img-wrapper">
          <img src={thumbnail} alt="img" loading="lazy" />
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            sx={{ marginBottom: '20px' }}
          >
            {projectName}
          </Typography>
          {discription?.slice(0, 3).map((desc, index) => (
            <Typography
              className="desc"
              key={index}
              component="p"
              sx={{ marginBottom: '10px' }}
            >
              {desc}
            </Typography>
          ))}
          <Link to={`property_details/${id}`} className="more-details-btn">
            More Details
            {/* <ChevronRightIcon /> */}
          </Link>
        </CardContent>
      </Box>
    </Card>
  )
}

export default PropertyCard

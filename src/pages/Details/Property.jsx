import React, { useEffect, useState } from 'react'
import './property.css'
import { Box, Container, Typography } from '@mui/material'
import PropertyTop from './components/PropertyTop'
import { Fade } from 'react-reveal'
import PropertyCard from './components/PropertyCard'
import propertyData from './propertyData'

const Property = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box>
      <PropertyTop />
      <Box className="property-builders" sx={{ padding: '3rem 0 5rem 0' }}>
        <Container>
          {propertyData.map((property, i) => {
            const flexDirection = i % 2 === 0 ? 'row-reverse' : 'row'
            return (
              <Box
                key={i}
                sx={{ marginBottom: '4rem' }}
                className="property-div"
              >
                <Fade bottom>
                  <Typography variant="h4" color="#ff5a3c">
                    {`${i + 1}.${property.name}`}
                  </Typography>
                  <Box mt={2} mb={4}>
                    <PropertyCard
                      property={property}
                      flexDirection={flexDirection}
                    />
                  </Box>
                </Fade>
              </Box>
            )
          })}
        </Container>
      </Box>
    </Box>
  )
}

export default Property

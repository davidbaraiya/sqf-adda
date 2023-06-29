/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import './property.css'
import { Box, Container, Typography, Button } from '@mui/material'
import { Fade } from 'react-reveal'
import PropertyCard from './components/PropertyCard'
import commercialData from './commercialData'
import { Link } from 'react-router-dom'
import BreadCrumbs from '../../components/Breadcrumbs'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

const Commercial = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const BreadCrumbsData = {
    name: 'Commercial',
    path: '/property/commercial',
  }

  return (
    <Box>
      <BreadCrumbs BreadCrumbsData={BreadCrumbsData} />
      <Box className="property-builders" sx={{ padding: '3rem 0 5rem 0' }}>
        <Container>
          <Box display={'flex'} gap={2} marginBottom={5}>
            <Link to="/property/residential" className="category-btn">
              <NavigateBeforeIcon />
              go to residential
            </Link>
          </Box>
          {commercialData?.map((property, i) => {
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

export default Commercial

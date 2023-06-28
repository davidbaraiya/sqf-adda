/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import './property.css'
import { Box, Container, Typography, Button } from '@mui/material'
import PropertyTop from './components/PropertyTop'
import { Fade } from 'react-reveal'
import PropertyCard from './components/PropertyCard'
import propertyData from './propertyData'

const Property = () => {
  const [categoryData, setCategoryData] = useState(propertyData || [])
  const [activeCategory, setActiveCategory] = useState(null)

  const uniqCategory = [...new Set(propertyData?.map(item => item.category))]

  const handleCategory = category => {
    const filterCategory = propertyData.filter(
      item => item.category === category
    )
    setCategoryData(filterCategory)
    setActiveCategory(category)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box>
      <PropertyTop />
      <Box className="property-builders" sx={{ padding: '3rem 0 5rem 0' }}>
        <Container>
          <Box display={'flex'} gap={2} marginBottom={5}>
            {uniqCategory.map((category, i) => (
              <Button
                variant="contained"
                key={i}
                className={`category-btn ${
                  activeCategory === category ? 'active' : ''
                }`}
                onClick={() => handleCategory(category)}
              >
                {category}
              </Button>
            ))}
          </Box>
          {categoryData?.map((property, i) => {
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
export const handleCategory = Property.handleCategory

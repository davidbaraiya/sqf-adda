import React from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Box, Container } from '@mui/material'
import { useEffect } from 'react'
import propertyData from './propertyData'
import BuilderCard from './components/BuilderCard'

const Builders = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const BreadCrumbsData = {
    name: 'Builders',
    path: 'property/builders',
  }

  return (
    <div className="builder-page-wrapper">
      <BreadCrumbs BreadCrumbsData={BreadCrumbsData} />
      <Box className="builders" sx={{ padding: '3rem 0 5rem 0' }}>
        <Container>
          <div className="builders-container">
            {propertyData?.map(builderData => (
              <BuilderCard builderData={builderData} key={builderData.id} />
            ))}
          </div>
        </Container>
      </Box>
    </div>
  )
}

export default Builders

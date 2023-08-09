import React, { useEffect } from 'react'
import './bestLuxuryResidential.css'
import { Container, Typography } from '@mui/material'
import BreadCrumbs from '../../components/BreadCrumbs'
import LuxuryCard from './LuxuryCard'
import luxuryResidentialData from './luxuryResidentialData'

const BestLuxuryResidential = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const BreadCrumbsData = {
    name: 'Best Luxury Residential',
    path: '/best_luxury_residential',
  }

  return (
    <section className="best-luxury-residential pb">
      <BreadCrumbs BreadCrumbsData={BreadCrumbsData} />
      <div className="top-heading">
        <Container>
          <div className="title">
            <Typography variant="h4">
              The Best <span className="highlight-text">luxury</span>{' '}
              residential projects in{' '}
              <span className="highlight-text"> Noida </span>
            </Typography>
            <Typography mt={2}>
              Noida is emerging as one of the top destinations in India to work
              and live. With best in class infrastructure, planned road networks
              and easy access to all amenities, it is still away from the big
              city's hustle bustle. And therefore is a sought after location of
              many for building a dream home. If you are someone looking for a
              luxurious property around Delhi NCR at prices that are still in
              your budget, then Noida is the place for you.
            </Typography>
          </div>
        </Container>
      </div>
      <Container>
        <div className="pt">
          <div className="lists ">
            <Typography mb={3}>
              Here is the list of top 5 residential properties in Noida that
              will definitely give you a premium living experience without
              burning a hole in your pocket.
            </Typography>
          </div>
          {luxuryResidentialData.map(luxuryData => (
            <LuxuryCard luxuryData={luxuryData} key={luxuryData.id} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default BestLuxuryResidential

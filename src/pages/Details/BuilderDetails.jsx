import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Box, Container, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import propertyData from './propertyData'
import styled from '@emotion/styled'
import { Fade } from 'react-reveal'

const BuilderDetails = () => {
  const { id: routeId } = useParams()
  const [subData, setSubData] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const filterData = propertyData.find(item => item.id == routeId)
    setSubData(filterData ? filterData.data : [])
  }, [routeId])

  const BreadCrumbsData = {
    name: 'Builder Details',
    path: `/builder_details${routeId}`,
  }
  console.log(subData)

  return (
    <Box className="pb">
      <BreadCrumbs BreadCrumbsData={BreadCrumbsData} />
      <Container>
        <BuilderContainer className="pt">
          {subData.map(item => (
            <div key={item.subId} className="builder-detail-card builder-card">
              <Fade up>
                <div className="img-wrapper">
                  <Typography className="label">{`${item.category} Property`}</Typography>
                  <img src={item.thumbnail} alt="" />
                </div>
                <div className="right-side">
                  <h2>{item.projectName}</h2>
                  <Link
                    className="more-details-btn"
                    to={`/residential/property_details/${routeId}/${item.subId}`}
                  >
                    <Typography> More Details </Typography>
                  </Link>
                </div>
              </Fade>
            </div>
          ))}
        </BuilderContainer>
      </Container>
    </Box>
  )
}

export default BuilderDetails

const BuilderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  .builder-detail-card {
    display: block;
    position: relative;
    gap: 20px;
    align-items: center;
    margin-bottom: 40px;
    width: 50%;
    flex: 0 1 50%;

    .img-wrapper {
      position: relative;
      padding-top: 80%;
      width: 100%;
      margin-bottom: 10px;

      img {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 100%;
        width: 100%;
        height: 100%;
      }
    }
    h2 {
      font-size: 32px;
    }
    .more-details-btn {
      text-decoration: none !important;
      display: inline-block !important;
    }
  }

  .label {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: rgb(255, 90, 60);
    color: #fff;
    border-radius: 5px;
    padding: 12px 20px;
    text-transform: capitalize;
    font-size: 18px !important;
    z-index: 1;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 22px !important;
    }
    .label {
      top: 10px;
      left: 10px;
      padding: 10px 20px;
      font-size: 15px !important;
    }
  }
  @media (max-width: 575px) {
    .builder-card {
      width: 100%;
      max-width: 100%;
      flex: 1 1 100%;
    }
  }
`

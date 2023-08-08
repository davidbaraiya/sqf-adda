import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BuilderCard = ({ builderData }) => {
  const { name, id, thumbnail, data } = builderData

  return (
    <BuilderCardStyle className="builder-card">
      <div className="builder-card-inner">
        <div className="img-wrapper">
          <img src={thumbnail} alt={'img'} />
        </div>
        <Typography className="title" variant="h6">
          {name}
        </Typography>
        <Link
          to={
            data
              ? `/property/builder_details/${id}`
              : `/residential/property_details/${id}`
          }
          className="more-details-btn"
        >
          <Typography>More Details</Typography>
        </Link>
      </div>
    </BuilderCardStyle>
  )
}

export default BuilderCard

const BuilderCardStyle = styled.div`
  width: 100%;

  .builder-card-inner {
    width: 100%;
    padding: 20px 10px;
    box-shadow: 0 0 20px rgb(0 0 0 / 10%);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid #ff5a3c;

    .more-details-btn {
      text-decoration: none !important;
      display: inline-block !important;
    }
    .img-wrapper {
      position: relative;
      padding-top: 80%;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 5px;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 100%;
        width: 100%;
        height: 100%;
      }
    }
    h6 {
      margin-top: 10px !important;
      line-height: 1 !important;
    }
  }
  @media (max-width: 575px) {
    .img-wrapper {
      padding-top: 60% !important;
    }
  }
`

import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Header from '../../../components/common/Header'
import Footer from '../../../components/common/Footer'
import { useParams } from 'react-router-dom'
import { Fade } from 'react-reveal'
import propertyData from '../propertyData'

const PropertySubDetails = () => {
  const [viewDetails, setViewDetails] = useState(null)
  const { data_id, sub_id } = useParams()

  useEffect(() => {
    const filteredData = propertyData.find(e => e.id === parseInt(data_id))
    const matchSubId = filteredData.data.find(e => e.subId === parseInt(sub_id))
    setViewDetails(matchSubId)
  }, [data_id])

  if (!viewDetails) {
    return (
      <Box
      sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Typography sx={{ fontSize: '22px' }}>Loading...</Typography>
      </Box>
    )
  }

  const {
    thumbnail,
    projectName,
    discription,
    highlights,
    amenities,
    nearbyLandmarks,
    features,
    images,
  } = viewDetails

  return (
    <>
      <Header />
      <Box className="details-page">
        <Box pt={0} className="banner">
          <img src={thumbnail} alt="img" width={'100%'} loading="lazy" />
          <Box className="inner-text">
            <Fade left>
              <Box>
                <Typography variant="h3">{projectName}</Typography>
              </Box>
            </Fade>
          </Box>
        </Box>
        <section className="desc-sec pt">
          <Container>
            <Box>
              <Typography variant="h4" className="heading" color={'#ff5a3c'}>
                Description
              </Typography>
              {discription &&
                discription?.map((para, i) => (
                  <Fade bottom>
                    <Typography mt={1} key={i}>
                      {' - ' + para}{' '}
                    </Typography>
                  </Fade>
                ))}
            </Box>
          </Container>
        </section>
        {highlights && (
          <section className="highlights-sec pt pb">
            <Container>
              <Box>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      mb={3}
                      variant="h4"
                      className="heading"
                      color={'#ff5a3c'}
                    >
                      Highlights
                    </Typography>
                    {highlights?.map((highlight, i) => (
                      <Fade bottom>
                        <Typography mt={1} key={i}>
                          {highlight}
                        </Typography>
                      </Fade>
                    ))}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="img-wrapper">
                      <img src={images[0]} alt="img" />
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </section>
        )}
        {amenities && (
          <section className="amenities-sec pt pb bg-gray ">
            <Container>
              <Box>
                <Typography
                  mb={3}
                  variant="h4"
                  className="heading"
                  color={'#ff5a3c'}
                >
                  amenities
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      mb={3}
                      variant="h5"
                      className="sub-heading"
                      color={'#ff5a3c'}
                    >
                      Indoor Amenities:
                    </Typography>
                    {amenities.indoor?.map((indoor, i) => (
                      <Fade bottom>
                        <Typography mt={1} key={i}>
                          {`${i + 1}. ${indoor}`}
                        </Typography>
                      </Fade>
                    ))}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      mb={3}
                      variant="h5"
                      className="sub-heading"
                      color={'#ff5a3c'}
                    >
                      Outdoor Amenities:
                    </Typography>
                    {amenities.outdoor?.map((outdoor, i) => (
                      <Fade bottom>
                        <Typography mt={1} key={i}>
                          {`${i + 1}. ${outdoor}`}
                        </Typography>
                      </Fade>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </section>
        )}
        {nearbyLandmarks && (
          <section className="nearbyLandmarks-sec pt pb">
            <Container>
              <Box>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Fade bottom>
                      <div className="img-wrapper">
                        <img src={images[1]} alt="img" />
                      </div>
                    </Fade>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Fade bottom>
                      <Typography
                        mb={3}
                        variant="h5"
                        className="sub-heading"
                        color={'#ff5a3c'}
                      >
                        Gulshan Dynasty's prime location ensures proximity to
                        various landmarks and conveniences:
                      </Typography>
                      {nearbyLandmarks?.map((nearbyLandmarks, i) => (
                        <Typography mt={1} key={i}>
                          {nearbyLandmarks}
                        </Typography>
                      ))}
                    </Fade>
                  </Grid>
                </Grid>
                <Typography textAlign="center" fontWeight="700" mt={5}>
                  Visit us at Gulshan Dynasty, Sector 144, Noida - 201310 and
                  discover a world where luxury meets tranquility. RERA No.:
                  UPRERAPJ950870
                </Typography>
              </Box>
            </Container>
          </section>
        )}
        {features && (
          <section className="features-sec pt pb ">
            <Container>
              <Box>
                <Fade bottom>
                  <Typography
                    mb={3}
                    variant="h4"
                    className="heading"
                    color={'#ff5a3c'}
                  >
                    Key Features of {projectName}:
                  </Typography>
                  <ul>
                    {features?.map((features, i) => (
                      <Typography mt={1} key={i} component="li" ket={i}>
                        {features}
                      </Typography>
                    ))}
                  </ul>
                </Fade>
              </Box>
            </Container>
          </section>
        )}
      </Box>
      <Footer />
    </>
  )
}

export default PropertySubDetails

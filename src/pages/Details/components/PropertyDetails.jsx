import React, { useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import propertyData from '../propertyData'
import { Fade } from 'react-reveal'

const PropertyDetails = () => {
  const [viewDetails, setViewDetails] = useState(null)
  const { data_id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)

    const filteredData = propertyData.find(e => e.id === parseInt(data_id))
    if (filteredData && !filteredData.data) {
      setViewDetails(filteredData)
    }
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
    priceList,
    images,
    locationAdvantage,
    developer,
    deliveredProjects,
    ongoingProjects,
    investmentOpportunity,
    title,
  } = viewDetails

  return (
    <>
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
        {title && (
          <section className="title-sec pt">
            <Container>
              <Box>
                {/* <Typography variant="h4" className="heading" color={'#ff5a3c'}>
                title
              </Typography> */}
                {title &&
                  title?.map((title, i) => (
                    <Fade bottom key={i}>
                      <Typography variant="h4" mt={1}>
                        {title}{' '}
                      </Typography>
                    </Fade>
                  ))}
              </Box>
            </Container>
          </section>
        )}
        <section className="desc-sec ">
          <Container>
            <Box>
              <Typography variant="h4" className="heading" color={'#ff5a3c'}>
                Description
              </Typography>
              {discription &&
                discription?.map((para, i) => (
                  <Fade bottom key={i}>
                    <Typography mt={1}>{para} </Typography>
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
                      <Fade bottom key={i}>
                        <Typography mt={1}>{highlight} </Typography>
                      </Fade>
                    ))}
                  </Grid>
                  {images && (
                    <Grid item xs={12} sm={6}>
                      <div className="img-wrapper">
                        <img src={images[0]} alt="img" />
                      </div>
                    </Grid>
                  )}
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
                    {amenities.indoor && (
                      <Typography
                        mb={3}
                        variant="h5"
                        className="sub-heading"
                        color={'#ff5a3c'}
                      >
                        Indoor Amenities:
                      </Typography>
                    )}
                    {amenities.indoor ||
                      amenities?.map((indoor, i) => (
                        <Fade bottom key={i}>
                          <Typography mt={1}>
                            {`${i + 1}. ${indoor}`}
                          </Typography>
                        </Fade>
                      ))}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {amenities.indoor && (
                      <Typography
                        mb={3}
                        variant="h5"
                        className="sub-heading"
                        color={'#ff5a3c'}
                      >
                        Outdoor Amenities:
                      </Typography>
                    )}
                    {amenities.outdoor?.map((outdoor, i) => (
                      <Fade bottom key={i}>
                        <Typography mt={1}>{`${i + 1}. ${outdoor}`}</Typography>
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
                        <img src={thumbnail} alt="img" />
                      </div>
                    </Fade>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Fade bottom>
                      <Typography
                        mb={3}
                        variant="h4"
                        className="heading"
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
                      <Typography mt={1} key={i} component="li">
                        {features}
                      </Typography>
                    ))}
                  </ul>
                </Fade>
              </Box>
            </Container>
          </section>
        )}
        {priceList && (
          <section className="priceList-sec pt pb ">
            <Container>
              <Box>
                <Fade bottom>
                  <Typography
                    mb={3}
                    variant="h4"
                    className="heading"
                    color={'#ff5a3c'}
                  >
                    priceList of {projectName}:
                  </Typography>

                  <Grid container spacing={2}>
                    {priceList?.map(({ type, size, price }, i) => (
                      <Grid item xs={12} sm={6} key={i}>
                        <Card className="priceCard">
                          <CardMedia
                            component="img"
                            height="194"
                            image={images[i]}
                            alt="img"
                          />
                          <CardContent>
                            <Typography variant="h6">
                              {type ? type : null}
                            </Typography>
                            <Typography>
                              <b>Size:</b> {size ? size : null}
                            </Typography>
                            <Typography>
                              <b>Price:</b> {price ? price : null}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Fade>
              </Box>
            </Container>
          </section>
        )}
        {locationAdvantage && (
          <section className="locationAdvantage-sec pt pb bg-gray">
            <Container>
              <Box>
                <Fade bottom>
                  <Typography
                    mb={3}
                    variant="h4"
                    className="heading"
                    color={'#ff5a3c'}
                  >
                    location Advantage:
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <List>
                        {locationAdvantage.connectivity?.map(
                          (connectivity, i) => (
                            <ListItem key={i}>
                              <ListItemText primary={connectivity} />
                            </ListItem>
                          )
                        )}
                      </List>
                    </Grid>
                    {locationAdvantage.nearbyUniversity && (
                      <Grid item xs={12} sm={6}>
                        <Typography
                          mb={1}
                          variant="h5"
                          className="sub-heading"
                          color={'#ff5a3c'}
                        >
                          near by University:
                        </Typography>
                        <Typography mb={2}>
                          {locationAdvantage.nearbyUniversity}
                        </Typography>
                        <Typography
                          mb={1}
                          variant="h5"
                          className="sub-heading"
                          color={'#ff5a3c'}
                        >
                          shopping
                        </Typography>
                        <Typography mb={2}>
                          {locationAdvantage.shopping}
                        </Typography>
                      </Grid>
                    )}
                  </Grid>
                </Fade>
              </Box>
            </Container>
          </section>
        )}
        {developer && (
          <section className="developer-sec pt pb ">
            <Container>
              <Box>
                <Fade bottom>
                  <Typography
                    mb={3}
                    variant="h4"
                    className="heading"
                    color={'#ff5a3c'}
                  >
                    Developer: {developer.name}
                  </Typography>
                  <Box>
                    <Typography mb={2} variant="h5" color={'#111'}>
                      {developer.legecy}
                    </Typography>
                    <Typography mb={2}>{developer.description}</Typography>
                  </Box>
                </Fade>
              </Box>
            </Container>
          </section>
        )}
        {deliveredProjects && (
          <section className="deliveredProjects-sec pt pb ">
            <Container>
              <Box>
                <Fade bottom>
                  <Typography
                    mb={3}
                    variant="h4"
                    className="heading"
                    color={'#ff5a3c'}
                  >
                    delivered Projects:
                  </Typography>
                  <Box>
                    <List>
                      {deliveredProjects?.map((deleverProject, i) => (
                        <ListItem key={i}>
                          <ListItemText primary={deleverProject} key={i} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Fade>
              </Box>
            </Container>
          </section>
        )}
        {ongoingProjects && (
          <section className="ongoingProjects-sec pt pb bg-gray">
            <Container>
              <Box>
                <Fade bottom>
                  <Typography
                    mb={3}
                    variant="h4"
                    className="heading"
                    color={'#ff5a3c'}
                  >
                    ongoing Projects:
                  </Typography>
                  <Box>
                    <List>
                      {ongoingProjects?.map((ongoingProject, i) => (
                        <ListItem key={i}>
                          <ListItemText primary={ongoingProject} key={i} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Fade>
              </Box>
            </Container>
          </section>
        )}
        {investmentOpportunity && (
          <section className="investmentOpportunity-sec pt pb ">
            <Container>
              <Box>
                <Fade bottom>
                  <Typography
                    mb={3}
                    variant="h4"
                    className="heading"
                    color={'#ff5a3c'}
                  >
                    investment Opportunity:
                  </Typography>
                  <Box>
                    <Typography>{investmentOpportunity}</Typography>
                  </Box>
                </Fade>
              </Box>
            </Container>
          </section>
        )}
      </Box>
    </>
  )
}

export default PropertyDetails

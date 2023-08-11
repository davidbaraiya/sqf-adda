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
import Form from './Form'
import monsoon_logo from '../../../assets/images/property/M3M-content/great_monsoon.svg'
import m3m_content_3 from '../../../assets/images/property/M3M-content/m3m-content-3.webp'
import iphone from '../../../assets/images/property/M3M-content/iphone.png'
import macbook from '../../../assets/images/property/M3M-content/macbook.png'
import tv from '../../../assets/images/property/M3M-content/tv.png'
import voucher from '../../../assets/images/property/M3M-content/voucher.png'
import ipad from '../../../assets/images/property/M3M-content/ipad.jpg'

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
    monsoonOffer,
    CommercialMonsoonOffer,
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
                    <div className="title-wrapper" key={i}>
                      <Fade bottom key={i}>
                        <Typography className="title" mt={1}>
                          {title}{' '}
                        </Typography>
                      </Fade>
                    </div>
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
                    {priceList?.map(({ type, size, price, floorType }, i) => (
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
                            {floorType && (
                              <Typography>
                                <b> Floor Type:</b> {floorType}
                              </Typography>
                            )}
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
        {monsoonOffer && (
          <section className="monsoon-offer-sec pt">
            <Container>
              <Typography
                mb={3}
                variant="h4"
                className="heading"
                color={'#ff5a3c'}
              >
                The Great Monsoon sale Offer:
              </Typography>
              <Box
                className="top-div"
                sx={{ marginTop: { xs: '60px', md: '80px' } }}
              >
                <Grid container alignItems={'center'} spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <div className="left-side">
                      <img
                        src={monsoon_logo}
                        className="offer-logo"
                        alt="offer logo"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="right-side">
                      <div className="price-div">
                        <Typography variant="h4">
                          Introducing New Price
                        </Typography>
                        <span className="price"> &#8377; 19,490 pr sq ft </span>
                      </div>
                      <div className="payment-plan">
                        <Typography variant="h4">
                          Presenting Payment Plan
                        </Typography>
                        <span>20: 20: 20: 20</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Container>
            <Box
              sx={{ marginTop: { xs: '40px', sm: '80px' } }}
              className="bottom-div"
              style={{
                backgroundImage: `linear-gradient( #000000a3 , #000000a3), url(${m3m_content_3}) no-repeat`,
              }}
            >
              <Container>
                <Typography variant="h5" className="title">
                  Get Rentals @ 9% p.a.
                </Typography>
                <Grid container alignItems={'center'} spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <div className="left-side">
                      <ul>
                        <li>Pay 20% Get Rental Benefit for 3 years</li>
                        <li>Pay next 20% Get Rental Benefit for 2 years</li>
                        <li>Pay next 20% Get Rental Benefit for 1 year</li>
                      </ul>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="right-side">
                      <ul>
                        <li>2 Car Parks Worth 12 Lakhs Free*</li>
                        <li>Club Membership Worth 10 Lacs Free*</li>
                        <li>Zero Transfer Fee*</li>
                      </ul>
                    </div>
                  </Grid>
                </Grid>
                <Box sx={{ marginTop: { xs: '40px', sm: '80px' } }}>
                  <Typography variant="h5" className="title">
                    Additional Customer Benefit Options
                  </Typography>
                  <Grid container spacing={2} className="benefit-container">
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={iphone} alt="i phone" />
                        </div>
                        <Typography className="name">IPHONE 14 PRO</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={macbook} alt="macbook" />
                        </div>
                        <Typography className="name">MACBOOK AIR 2</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={tv} alt="tv" />
                        </div>
                        <Typography className="name">65” LED TV</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={voucher} alt="voucher" />
                        </div>
                        <Typography className="name">
                          MMT VOUCHER WORTH 1.5 LACS
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </Box>
          </section>
        )}
        {CommercialMonsoonOffer && (
          <section className="monsoon-offer-sec pt">
            <Container>
              <Typography
                mb={3}
                variant="h4"
                className="heading"
                color={'#ff5a3c'}
              >
                The Great Monsoon sale Offer:
              </Typography>
              <Box
                className="top-div"
                sx={{ marginTop: { xs: '60px', md: '80px' } }}
              >
                <Grid container alignItems={'center'} spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <div className="left-side">
                      <img
                        src={monsoon_logo}
                        className="offer-logo"
                        alt="offer logo"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="right-side">
                      <div className="price-div">
                        <Typography variant="h4">
                          Introducing New Price
                        </Typography>
                        <span className="price"> &#8377; 19,490 pr sq ft </span>
                      </div>
                      <div className="payment-plan">
                        <Typography variant="h4">
                          Presenting Payment Plan
                        </Typography>
                        <span>40:60</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Container>
            <Box
              sx={{ marginTop: { xs: '40px', sm: '80px' } }}
              className="bottom-div"
              style={{
                backgroundImage: `linear-gradient( #000000a3 , #000000a3), url(${m3m_content_3})no-repeat`,
              }}
            >
              <Container>
                <Typography variant="h5" className="title">
                  Get Rentals @ 9% p.a.
                </Typography>
                <Grid container alignItems={'center'} spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <div className="left-side">
                      <ul>
                        <li>10% NOW</li>
                        <li>30% IN 30 DAY</li>
                        <li>50% ON SUBMISSION OF OC</li>
                        <li>10% ON POSSESION</li>
                      </ul>
                    </div>
                  </Grid>
                </Grid>
                <Box sx={{ marginTop: { xs: '40px', sm: '80px' } }}>
                  <Typography variant="h5" className="title">
                    Additional Customer Benefit Options
                  </Typography>
                  <Typography variant="h6">&lt;1 CR- 5 GMS GOLD</Typography>
                  <Typography variant="h6"> 1-3 CR- 10 GMS GOLD</Typography>
                  <Grid container spacing={2} className="benefit-container">
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={ipad} alt="i phone" />
                        </div>
                        <Typography className="name">IPAD</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={tv} alt="tv" />
                        </div>
                        <Typography className="name">42” LED TV</Typography>
                      </div>
                    </Grid>
                  </Grid>
                  <Typography variant="h6"> 3-5 CR- 15 GMS GOLD</Typography>
                  <Grid container spacing={2} className="benefit-container">
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={iphone} alt="i phone" />
                        </div>
                        <Typography className="name">IPHONE 14</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={macbook} alt="macbook" />
                        </div>
                        <Typography className="name">MACBOOK PRO</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={tv} alt="tv" />
                        </div>
                        <Typography className="name">42” LED TV</Typography>
                      </div>
                    </Grid>
                  </Grid>
                  <Typography variant="h6"> &gt;5 CR- 20 GMS GOLD</Typography>
                  <Grid container spacing={2} className="benefit-container">
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={iphone} alt="i phone" />
                        </div>
                        <Typography className="name">IPHONE 14 PRO</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={macbook} alt="macbook" />
                        </div>
                        <Typography className="name">MACBOOK AIR 2</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={tv} alt="tv" />
                        </div>
                        <Typography className="name">65” LED TV</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                      <div className="benefit-div">
                        <div className="img-wrapper">
                          <img src={voucher} alt="voucher" />
                        </div>
                        <Typography className="name">
                          MMT VOUCHER WORTH 1.5 LACS
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </Box>
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
      <section className="bg-gray pt pb" style={{ marginBottom: '150px' }}>
        <Container>
          <div>
            <Form projectName={projectName} />
          </div>
        </Container>
      </section>
    </>
  )
}

export default PropertyDetails

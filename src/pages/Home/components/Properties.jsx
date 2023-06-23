// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
// import AspectRatioIcon from "@mui/icons-material/AspectRatio";
// import BathtubIcon from "@mui/icons-material/Bathtub";
// import BedIcon from "@mui/icons-material/Bed";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import TheatersIcon from "@mui/icons-material/Theaters";
// import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import {
  // Avatar,
  Box,
  Button,
  // Button,
  Card,
  // CardActions,
  CardContent,
  Container,
  IconButton,
  Typography,
} from '@mui/material'
import { Fade } from 'react-reveal'
// import { Link } from "react-router-dom";
// import required modules
import { Navigation, Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import img from '../../../assets/images/5.jpg'

export default function Properties() {
  return (
    <Box className="hm-ppt-container">
      <Container>
        <Box className="hm-ppt-main">
          <Fade bottom>
            <Typography variant="h6" className="sec-subtitle">
              Properties
            </Typography>
            {/* <Typography variant="h2" className='lg-font'>Latest Listings</Typography> */}
            <Typography variant="h2" className="lg-font">
              Our Current Listings
            </Typography>
          </Fade>''
          <Box className="hm-ppt-swiper-seciton">
            <Swiper
              slidesPerView={3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: '.hm-ppt-slider-prv-btn',
                nextEl: '.hm-ppt-slider-nxt-btn',
              }}
              loop={true}
              //   navigation={{
              //       // clickable:true,
              //       prevEl: ".hm-owl-swiper-prev-btn",
              //       nextEl: ".hm-owl-swiper-next-btn",
              //     }}
              modules={[Pagination, Navigation]}
              className="hm-ppt-swiper"
            >
              <SwiperSlide className="hm-ppt-slide">
                <Fade bottom>
                  <Card className="hm-ppt-slide-card">
                    <Box className="hm-ppt-card-media">
                      <img src={img} alt="" />
                      {/* <Box className="hm-ppt-media-box">
                                            <Link to="/">
                                                <Typography>
                                                    <LocationOnIcon />
                                                    Belmot Garden, Chicago
                                                </Typography>
                                            </Link>
                                            <Box className="btn-box">
                                                <Button>
                                                    <CameraAltIcon />4
                                                </Button>
                                                <Button>
                                                    <TheatersIcon />2
                                                </Button>
                                            </Box>
                                        </Box> */}
                    </Box>
                    <CardContent className="hm-ppt-cd-header">
                      {/* <Typography variant="h6">
                                            $34,900/
                                            <span style={{ fontSize: ".95rem", fontWeight: 400 }}>
                                                Month
                                            </span>
                                        </Typography> */}
                      <Typography variant="h4">
                        The Islands By Gaurs Landmark of Luxurious Living
                      </Typography>
                      <Typography>

                        Custom-made residences and lifestyle choices, in the
                        midst of the luxurious integrated township.
                      </Typography>
                      {/* <Box className="hm-ppt-card-middle">
                                            <Box>
                                                <Button>
                                                    3 <BedIcon />
                                                </Button>
                                                <Typography>Beadroom</Typography>
                                            </Box>
                                            <Box>
                                                <Button>
                                                    3 <BathtubIcon />
                                                </Button>
                                                <Typography>Bathroom</Typography>
                                            </Box>
                                            <Box>
                                                <Button>
                                                    3 <AspectRatioIcon />
                                                </Button>
                                                <Typography>Square ft</Typography>
                                            </Box>
                                        </Box> */}
                      <Button
                        sx={{ mt: 4, textTransform: 'uppercase' }}
                        className="abt-service-btn "
                      >
                        Inquire now
                      </Button>
                    </CardContent>
                    {/* <CardActions className="hm-ppt-cd-btm">
                                        <Box className="hm-ppt-cd-avater">
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="/static/images/avatar/1.jpg"
                                            />
                                            <Box>
                                                <Typography variant="h6">William Seklo</Typography>
                                                <Typography>Estate Agents</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <IconButton aria-label="delete">
                                                <ZoomOutMapIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <FavoriteBorderIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <AddCircleOutlineIcon />
                                            </IconButton>
                                        </Box>
                                    </CardActions> */}
                  </Card>
                </Fade>
              </SwiperSlide>
              <SwiperSlide className="hm-ppt-slide">
                <Fade bottom>
                  <Card className="hm-ppt-slide-card">
                    <Box className="hm-ppt-card-media">
                      <img src={img} alt="" />
                      {/* <Box className="hm-ppt-media-box">
                                            <Link to="/">
                                                <Typography>
                                                    <LocationOnIcon />
                                                    Belmot Garden, Chicago
                                                </Typography>
                                            </Link>
                                            <Box className="btn-box">
                                                <Button>
                                                    <CameraAltIcon />4
                                                </Button>
                                                <Button>
                                                    <TheatersIcon />2
                                                </Button>
                                            </Box>
                                        </Box> */}
                    </Box>
                    <CardContent className="hm-ppt-cd-header">
                      {/* <Typography variant="h6">
                                            $34,900/
                                            <span style={{ fontSize: ".95rem", fontWeight: 400 }}>
                                                Month
                                            </span>
                                        </Typography> */}
                      <Typography variant="h4">
                        Office At Indirapuram Gulshan-Experience Excellence
                      </Typography>
                      <Typography>
                        Gulshan Group is a name that has always echoed
                        magnificence, whatever the endeavour, From Signature
                        homes to commercial spaces, Gulshan always has the
                        charm.
                      </Typography>
                      {/* <Box className="hm-ppt-card-middle">
                                            <Box>
                                                <Button>
                                                    3 <BedIcon />
                                                </Button>
                                                <Typography>Beadroom</Typography>
                                            </Box>
                                            <Box>
                                                <Button>
                                                    3 <BathtubIcon />
                                                </Button>
                                                <Typography>Bathroom</Typography>
                                            </Box>
                                            <Box>
                                                <Button>
                                                    3 <AspectRatioIcon />
                                                </Button>
                                                <Typography>Square ft</Typography>
                                            </Box>
                                        </Box> */}
                      <Button
                        sx={{ mt: 4, textTransform: 'uppercase' }}
                        className="abt-service-btn "
                      >
                        Inquire now
                      </Button>
                    </CardContent>
                    {/* <CardActions className="hm-ppt-cd-btm">
                                        <Box className="hm-ppt-cd-avater">
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="/static/images/avatar/1.jpg"
                                            />
                                            <Box>
                                                <Typography variant="h6">William Seklo</Typography>
                                                <Typography>Estate Agents</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <IconButton aria-label="delete">
                                                <ZoomOutMapIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <FavoriteBorderIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <AddCircleOutlineIcon />
                                            </IconButton>
                                        </Box>
                                    </CardActions> */}
                  </Card>
                </Fade>
              </SwiperSlide>
              <SwiperSlide className="hm-ppt-slide">
                <Fade bottom>
                  <Card className="hm-ppt-slide-card">
                    <Box className="hm-ppt-card-media">
                      <img src={img} alt="" />
                      {/* <Box className="hm-ppt-media-box">
                                            <Link to="/">
                                                <Typography>
                                                    <LocationOnIcon />
                                                    Belmot Garden, Chicago
                                                </Typography>
                                            </Link>
                                            <Box className="btn-box">
                                                <Button>
                                                    <CameraAltIcon />4
                                                </Button>
                                                <Button>
                                                    <TheatersIcon />2
                                                </Button>
                                            </Box>
                                        </Box> */}
                    </Box>
                    <CardContent className="hm-ppt-cd-header">
                      {/* <Typography variant="h6">
                                            $34,900/
                                            <span style={{ fontSize: ".95rem", fontWeight: 400 }}>
                                                Month
                                            </span>
                                        </Typography> */}
                      <Typography variant="h4">
                        Invest in one of the International Club Diner space of
                        Delhi NCR
                      </Typography>
                      <Typography>
                        Get a 12% return till operations Post operations 25% RS
                        18 years Lease & 6 years lock-in Investment 34 lacs
                      </Typography>
                      {/* <Box className="hm-ppt-card-middle">
                                            <Box>
                                                <Button>
                                                    3 <BedIcon />
                                                </Button>
                                                <Typography>Beadroom</Typography>
                                            </Box>
                                            <Box>
                                                <Button>
                                                    3 <BathtubIcon />
                                                </Button>
                                                <Typography>Bathroom</Typography>
                                            </Box>
                                            <Box>
                                                <Button>
                                                    3 <AspectRatioIcon />
                                                </Button>
                                                <Typography>Square ft</Typography>
                                            </Box>
                                        </Box> */}
                      <Button
                        sx={{ mt: 4, textTransform: 'uppercase' }}
                        className="abt-service-btn "
                      >
                        Inquire now
                      </Button>
                    </CardContent>
                    {/* <CardActions className="hm-ppt-cd-btm">
                                        <Box className="hm-ppt-cd-avater">
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="/static/images/avatar/1.jpg"
                                            />
                                            <Box>
                                                <Typography variant="h6">William Seklo</Typography>
                                                <Typography>Estate Agents</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <IconButton aria-label="delete">
                                                <ZoomOutMapIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <FavoriteBorderIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <AddCircleOutlineIcon />
                                            </IconButton>
                                        </Box>
                                    </CardActions> */}
                  </Card>
                </Fade>
              </SwiperSlide>
            </Swiper>
            <Box className="hm-ppt-slider-arrow">
              <IconButton className="hm-ppt-slider-prv-btn">
                <ArrowBackIcon />
              </IconButton>
              <IconButton className="hm-ppt-slider-nxt-btn">
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

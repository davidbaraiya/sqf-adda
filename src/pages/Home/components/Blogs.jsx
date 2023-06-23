// Import Swiper styles
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded'
import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import img from '../../../assets/images/5.jpg'

export default function Blogs() {
  return (
    <Box className="hm-ttl-container">
      <Container>
        <Box className="hm-ttl-sub-container">
          <Typography variant="h6" className="sec-subtitle">
            News & Blogs
          </Typography>
          <Typography variant="h2" className="lg-font">
            Leatest News Feeds
          </Typography>

          <Box className="hm-ttl-swiper-seciton">
            <Swiper
              slidesPerView={3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={30}
              navigation={{
                prevEl: '.hm-ttl-slider-prv-btn',
                nextEl: '.hm-ttl-slider-nxt-btn',
              }}
              loop={true}
              modules={[Navigation]}
              className="hm-ttl-swiper"
            >
              <SwiperSlide className="hm-blg-slide">
                <Box className="hm-blg-media">
                  <img src={img} alt="" />
                </Box>
                <Box className="hm-blg-card-head">
                  <Typography>
                    <PermIdentityRoundedIcon /> bt: Admin
                  </Typography>
                  <Typography>
                    <LocalOfferIcon /> Interior
                  </Typography>
                  <Typography>
                    <LocalOfferIcon /> Decorate
                  </Typography>
                </Box>
                <Box className="hm-blg-card-title">
                  <Typography variant="h4">
                    10 Brilliant Ways To Decorate Your Home
                  </Typography>
                </Box>
                <Box className="hm-blg-card-btm">
                  <Typography>
                    <CalendarMonthOutlinedIcon /> June 24, 2021
                  </Typography>
                  <Button>Read More</Button>
                </Box>
              </SwiperSlide>
              <SwiperSlide className="hm-blg-slide">
                <Box className="hm-blg-media">
                  <img src={img} alt="" />
                </Box>
                <Box className="hm-blg-card-head">
                  <Typography>
                    <PermIdentityRoundedIcon /> bt: Admin
                  </Typography>
                  <Typography>
                    <LocalOfferIcon /> Interior
                  </Typography>
                  <Typography>
                    <LocalOfferIcon /> Decorate
                  </Typography>
                </Box>
                <Box className="hm-blg-card-title">
                  <Typography variant="h4">
                    10 Brilliant Ways To Decorate Your Home
                  </Typography>
                </Box>
                <Box className="hm-blg-card-btm">
                  <Typography>
                    <CalendarMonthOutlinedIcon /> June 24, 2021
                  </Typography>
                  <Button>Read More</Button>
                </Box>
              </SwiperSlide>
              <SwiperSlide className="hm-blg-slide">
                <Box className="hm-blg-media">
                  <img src={img} alt="" />
                </Box>
                <Box className="hm-blg-card-head">
                  <Typography>
                    <PermIdentityRoundedIcon /> bt: Admin
                  </Typography>
                  <Typography>
                    <LocalOfferIcon /> Interior
                  </Typography>
                  <Typography>
                    <LocalOfferIcon /> Decorate
                  </Typography>
                </Box>
                <Box className="hm-blg-card-title">
                  <Typography variant="h4">
                    10 Brilliant Ways To Decorate Your Home
                  </Typography>
                </Box>
                <Box className="hm-blg-card-btm">
                  <Typography>
                    <CalendarMonthOutlinedIcon /> June 24, 2021
                  </Typography>
                  <Button>Read More</Button>
                </Box>
              </SwiperSlide>
              <SwiperSlide className="hm-blg-slide">
                <Box className="hm-blg-media">
                  <img src={img} alt="" />
                </Box>
                <Box className="hm-blg-card-head">
                  <Typography>
                    <PermIdentityRoundedIcon /> bt: Admin
                  </Typography>
                  <Typography>
                    <LocalOfferIcon /> Interior
                  </Typography>
                  <Typography>
                    <LocalOfferIcon /> Decorate
                  </Typography>
                </Box>
                <Box className="hm-blg-card-title">
                  <Typography variant="h4">
                    10 Brilliant Ways To Decorate Your Home
                  </Typography>
                </Box>
                <Box className="hm-blg-card-btm">
                  <Typography>
                    <CalendarMonthOutlinedIcon /> June 24, 2021
                  </Typography>
                  <Button>Read More</Button>
                </Box>
              </SwiperSlide>
            </Swiper>
            <Box className="hm-ttl-slider-arrow">
              <IconButton className="hm-ttl-slider-prv-btn">
                <ArrowBackIcon />
              </IconButton>
              <IconButton className="hm-ttl-slider-nxt-btn">
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

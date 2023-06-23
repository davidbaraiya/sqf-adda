import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Button, IconButton, Typography } from '@mui/material'
// import required modules
import { Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import img from '../../../assets/images/5.jpg'

export default function Gallery() {
  return (
    <Box className="hm-glry-swiper-seciton">
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        navigation={{
          prevEl: '.hm-glry-slider-prv-btn',
          nextEl: '.hm-glry-slider-nxt-btn',
        }}
        loop={true}
        //   navigation={{
        //       // clickable:true,
        //       prevEl: ".hm-owl-swiper-prev-btn",
        //       nextEl: ".hm-owl-swiper-next-btn",
        //     }}
        modules={[Navigation]}
        className="hm-glry-swiper"
      >
        <SwiperSlide className="hm-glry-slide">
          <img src={img} alt="" />
          <Box className="gm-glry-slide-info">
            <Box>
              <Typography className="hm-glry-slide-hdr">
                Lorem ipsum dolor{' '}
              </Typography>
              <Typography className="hm-glry-slide-p">Lorem ipsum </Typography>
            </Box>
            <Button>Details</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="hm-glry-slide">
          <img src={img} alt="" />
          <Box className="gm-glry-slide-info">
            <Box>
              <Typography className="hm-glry-slide-hdr">
                Lorem ipsum dolor{' '}
              </Typography>
              <Typography className="hm-glry-slide-p">Lorem ipsum </Typography>
            </Box>
            <Button>Details</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="hm-glry-slide">
          <img src={img} alt="" />
          <Box className="gm-glry-slide-info">
            <Box>
              <Typography className="hm-glry-slide-hdr">
                Lorem ipsum dolor{' '}
              </Typography>
              <Typography className="hm-glry-slide-p">Lorem ipsum </Typography>
            </Box>
            <Button>Details</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="hm-glry-slide">
          <img src={img} alt="" />
          <Box className="gm-glry-slide-info">
            <Box>
              <Typography className="hm-glry-slide-hdr">
                Lorem ipsum dolor{' '}
              </Typography>
              <Typography className="hm-glry-slide-p">Lorem ipsum </Typography>
            </Box>
            <Button>Details</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="hm-glry-slide">
          <img src={img} alt="" />
          <Box className="gm-glry-slide-info">
            <Box>
              <Typography className="hm-glry-slide-hdr">
                Lorem ipsum dolor{' '}
              </Typography>
              <Typography className="hm-glry-slide-p">Lorem ipsum </Typography>
            </Box>
            <Button>Details</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="hm-glry-slide">
          <img src={img} alt="" />
          <Box className="gm-glry-slide-info">
            <Box>
              <Typography className="hm-glry-slide-hdr">
                Lorem ipsum dolor{' '}
              </Typography>
              <Typography className="hm-glry-slide-p">Lorem ipsum </Typography>
            </Box>
            <Button>Details</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="hm-glry-slide">
          <img src={img} alt="" />
          <Box className="gm-glry-slide-info">
            <Box>
              <Typography className="hm-glry-slide-hdr">
                Lorem ipsum dolor{' '}
              </Typography>
              <Typography className="hm-glry-slide-p">Lorem ipsum </Typography>
            </Box>
            <Button>Details</Button>
          </Box>
        </SwiperSlide>
      </Swiper>
      <Box className="hm-ppt-slider-arrow">
        <IconButton className="hm-glry-slider-prv-btn">
          <ArrowBackIcon />
        </IconButton>
        <IconButton className="hm-glry-slider-nxt-btn">
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

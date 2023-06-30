import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
} from '@mui/material'
import { Fade } from 'react-reveal'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import img from '../../../assets/images/5.jpg'
import propetySliderData from '../../../apis/propetySliderData'

export default function Properties() {
  return (
    <Box className="hm-ppt-container">
      <Container>
        <Box className="hm-ppt-main">
          <Fade bottom>
            <Typography variant="h6" className="sec-subtitle">
              Properties
            </Typography>
            <Typography variant="h2" className="lg-font">
              Our Current <span className="highlight-text">Listings</span>
            </Typography>
          </Fade>
          <Box className="hm-ppt-swiper-seciton">
            <Swiper
              slidesPerView={3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                575: {
                  slidesPerView: 2,
                  spaceBetween: 20,
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
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: '.hm-ppt-slider-prv-btn',
                nextEl: '.hm-ppt-slider-nxt-btn',
              }}
              loop={true}
              modules={[Pagination, Navigation]}
              className="hm-ppt-swiper"
            >
              {propetySliderData?.map(({ title, description, image }, i) => (
                <SwiperSlide className="hm-ppt-slide" key={i}>
                  <Card className="hm-ppt-slide-card">
                    <Box className="hm-ppt-card-media">
                      <img src={image} alt="img" />
                    </Box>
                    <CardContent className="hm-ppt-cd-header">
                      <Typography variant="h4">{title}</Typography>
                      <Typography>{description}</Typography>
                      <Button
                        sx={{ mt: 4, textTransform: 'uppercase' }}
                        className="abt-service-btn"
                      >
                        Inquire now
                      </Button>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
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

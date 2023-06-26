import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined'
import { Avatar, Box, Container, IconButton, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
import { Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Testimonial() {
  return (
    <Box className="hm-ttl-container">
      <Container>
        <Fade right>
          <Box className="hm-ttl-sub-container">
            <Typography variant="h6" className="sec-subtitle">
              Our Testimonial
            </Typography>
            <Typography variant="h2" className="lg-font">
              Clients <span class="highlight-text">Feedback</span>
            </Typography>

            <Box className="hm-ttl-swiper-seciton">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
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
                navigation={{
                  prevEl: '.hm-ttl-slider-prv-btn',
                  nextEl: '.hm-ttl-slider-nxt-btn',
                }}
                loop={true}
                modules={[Navigation]}
                className="hm-ttl-swiper"
              >
                <SwiperSlide className="hm-ttl-slide">
                  <Typography>
                    <FormatQuoteOutlinedIcon className="hm-ttl-quote" />{' '}
                    Precious ipsum dolor sit amet consectetur adipisicing elit,
                    sed dos mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </Typography>
                  <Box>
                    <Box className="hm-ttl-media">
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box className="hm-ttl-author">
                        <Typography variant="h4">James Carter</Typography>
                        <Typography>SELLING AGENTS</Typography>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
                <SwiperSlide className="hm-ttl-slide">
                  <Typography>
                    <FormatQuoteOutlinedIcon className="hm-ttl-quote" />{' '}
                    Precious ipsum dolor sit amet consectetur adipisicing elit,
                    sed dos mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </Typography>
                  <Box>
                    <Box className="hm-ttl-media">
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box className="hm-ttl-author">
                        <Typography variant="h4">James Carter</Typography>
                        <Typography>SELLING AGENTS</Typography>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
                <SwiperSlide className="hm-ttl-slide">
                  <Typography>
                    <FormatQuoteOutlinedIcon className="hm-ttl-quote" />{' '}
                    Precious ipsum dolor sit amet consectetur adipisicing elit,
                    sed dos mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </Typography>
                  <Box>
                    <Box className="hm-ttl-media">
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box className="hm-ttl-author">
                        <Typography variant="h4">James Carter</Typography>
                        <Typography>SELLING AGENTS</Typography>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
                <SwiperSlide className="hm-ttl-slide">
                  <Typography>
                    <FormatQuoteOutlinedIcon className="hm-ttl-quote" />{' '}
                    Precious ipsum dolor sit amet consectetur adipisicing elit,
                    sed dos mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </Typography>
                  <Box>
                    <Box className="hm-ttl-media">
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box className="hm-ttl-author">
                        <Typography variant="h4">James Carter</Typography>
                        <Typography>SELLING AGENTS</Typography>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
                <SwiperSlide className="hm-ttl-slide">
                  <Typography>
                    <FormatQuoteOutlinedIcon className="hm-ttl-quote" />{' '}
                    Precious ipsum dolor sit amet consectetur adipisicing elit,
                    sed dos mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </Typography>
                  <Box>
                    <Box className="hm-ttl-media">
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box className="hm-ttl-author">
                        <Typography variant="h4">James Carter</Typography>
                        <Typography>SELLING AGENTS</Typography>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
                <SwiperSlide className="hm-ttl-slide">
                  <Typography>
                    <FormatQuoteOutlinedIcon className="hm-ttl-quote" />{' '}
                    Precious ipsum dolor sit amet consectetur adipisicing elit,
                    sed dos mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </Typography>
                  <Box>
                    <Box className="hm-ttl-media">
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box className="hm-ttl-author">
                        <Typography variant="h4">James Carter</Typography>
                        <Typography>SELLING AGENTS</Typography>
                      </Box>
                    </Box>
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
        </Fade>
      </Container>
    </Box>
  )
}

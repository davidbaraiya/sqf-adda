import { Box, Container, Grid, Typography } from '@mui/material'
import img2 from '../../../assets/images/customer-service.png'
import img1 from '../../../assets/images/experience.png'
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import img5 from "../../../assets/images/multiselector/الاهداف.png";
// import img1 from "../../../assets/images/multiselector/الرؤية.png";
// import img2 from "../../../assets/images/multiselector/الرسالة.png";
// import img3 from "../../../assets/images/multiselector/القيم.png";
// import img4 from "../../../assets/images/multiselector/الممكنات.png";
// import "../../../assets/styles/Home.css";
import img3 from '../../../assets/images/transparency.png'

// const muliImage = [
//     {id: 1, img: img},
//     {id: 2, img: img},
//     {id: 3, img: img},
//     {id: 4, img: img},
//     {id: 5, img: img},
// ]

export default function MultiCard() {
  // const { t, i18n } = useTranslation();

  // const info = t('home_multislider', { returnObjects: true });

  return (
    <Container data-aos="fade-left">
      <Box>
        <Box sx={{ textAlign: 'center' }} className="hm-ttl-sub-container">
          <Typography
            // Our
            // Special
            // featuresypography
            variant="h6"
            className="sec-subtitle"
          >
            Speciality
          </Typography>
          <Typography variant="h2" className="lg-font">
            Our Special features
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* {info.map((inf, index) =>  */}
          <Grid item xs={12} md={4}>
            <Box className="msc-card-container">
              <Box className="msc-card">
                <Box className="msc-card-face msc-card-face-1">
                  <Box className="msc-card-content">
                    {/* <img src={inf.img} /> */}
                    <img src={img1} />
                    <h3>Expertise</h3>
                  </Box>
                </Box>
                <Box className="msc-card-face msc-card-face-2">
                  <Box className="msc-card-content msc-card-content-2">
                    <p>
                      Our team of experienced professionals has a deep
                      understanding of the real estate market in India. We
                      leverage our expertise to provide our clients with the
                      best possible solutions for their real estate needs.
                    </p>
                    {/* <Link to="/about"><Button> {t("home_multislider_btn")} </Button></Link> */}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="msc-card-container">
              <Box className="msc-card">
                <Box className="msc-card-face msc-card-face-1">
                  <Box className="msc-card-content">
                    {/* <img src={inf.img} /> */}
                    <img src={img2} />
                    <h3>Transparency</h3>
                  </Box>
                </Box>
                <Box className="msc-card-face msc-card-face-2">
                  <Box className="msc-card-content msc-card-content-2">
                    <p>
                      We believe in maintaining transparency in all our
                      dealings. We provide our clients with accurate information
                      and keep them informed at every step of the process.
                    </p>
                    {/* <Link to="/about"><Button> {t("home_multislider_btn")} </Button></Link> */}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="msc-card-container">
              <Box className="msc-card">
                <Box className="msc-card-face msc-card-face-1">
                  <Box className="msc-card-content">
                    {/* <img src={inf.img} /> */}
                    <img src={img3} />
                    <h3>Customer Service</h3>
                  </Box>
                </Box>
                <Box className="msc-card-face msc-card-face-2">
                  <Box className="msc-card-content msc-card-content-2">
                    <p>
                      At Squarefoot Adda, we prioritize our clients'
                      satisfaction above everything else. We provide
                      personalized service and ensure that our clients have a
                      hassle-free experience.
                    </p>
                    {/* <Link to="/about"><Button> {t("home_multislider_btn")} </Button></Link> */}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* )} */}
        </Grid>
      </Box>
    </Container>
  )
}

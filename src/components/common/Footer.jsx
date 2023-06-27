import EastIcon from '@mui/icons-material/East'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'
import SendIcon from '@mui/icons-material/Send'
import TwitterIcon from '@mui/icons-material/Twitter'
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-4.png'
import logoPayment from '../../assets/images/payment-4.png'
import '../../assets/styles/footer.css'

const Footer = () => {
  return (
    <>
      <Box className="ftr-container">
        <Box className="ftr-explr-container">
          <Container className="ftr-explr-section">
            <Fade>
              <Box>
                <Typography variant="h4" className="lg-font">
                  Looking for a dream home?
                </Typography>
                <Typography>
                  We can help you realize your dream of a new home
                </Typography>
              </Box>
              <Button>
                Explore Properties &nbsp; <EastIcon />
              </Button>
            </Fade>
          </Container>
        </Box>
        <Box className="ftr-area">
          <Grid container spacing={3}>
            <Grid
              className="ftr-area-1"
              item
              xs={12}
              sm={6}
              md={5}
              sx={{ pr: { xs: 0, md: 6 } }}
            >
              <img src={logo} alt="" />
              <Typography>
                Welcome to Squarefoot Adda, your one-stop solution for all your
                real estate needs.
              </Typography>
              <Typography>
                <RoomOutlinedIcon />
                Ground floor F-25 , film city, Noida , Sector 16A, 201301
              </Typography>
              <Typography>
                <PhoneOutlinedIcon /> +91 9990908821, <br /> +91 95822 55176
              </Typography>
              <Typography>
                <EmailOutlinedIcon /> hello@squarefootadda.com
              </Typography>
              <Box>
                <IconButton size="small">
                  <FacebookTwoToneIcon />
                </IconButton>
                <IconButton size="small">
                  <TwitterIcon />
                </IconButton>
                <IconButton size="small">
                  <InstagramIcon />
                </IconButton>
                <IconButton size="small">
                  <LanguageIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid className="ftr-area-2" item xs={2}>
              <Typography variant="h6">Company</Typography>
              <Box>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/contact">Contact Us</Link>
              </Box>
            </Grid>
            <Grid className="ftr-area-2" item xs={12} sm={6} md={2}>
              <Typography variant="h6">Services</Typography>
              <Box>
                <Link to="#">Consult Service</Link>
                <Link to="#">Property Management</Link>
                <Link to="#">Renting and Selling</Link>
              </Box>
            </Grid>
            <Grid className="ftr-area-3" item xs={12} sm={6} md={3}>
              <Typography variant="h6">Newsletter</Typography>
              <Typography sx={{ mb: 3 }}>
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </Typography>

              <Box>
                <TextField id="outlined-basic" variant="outlined" />
                <IconButton id="sbbb">
                  <SendIcon />
                </IconButton>
              </Box>

              <Typography sx={{ mt: 4 }} variant="h6">
                We Accept
              </Typography>
              <img src={logoPayment} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="ftr-btm">
        <Typography color="#fff" mr="auto">
          All Rights Reserved @ Company 2023
        </Typography>
        <Link to="/terms_and_condition">Terms & Condition</Link>
        <Link to="/privacy_and_policy">Privacy & Policy</Link>
      </Box>
    </>
  )
}

export default Footer

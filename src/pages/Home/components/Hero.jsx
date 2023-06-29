import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  MenuItem,
} from '@mui/material'
import { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import { Fade } from 'react-reveal'
import video from '../../../assets/images/optimized.mp4'
import { Link } from 'react-router-dom'
// import { handleCategory } from '../../Details/Property'

const currencies = [
  {
    value: 'USD',
    label: '$ new value',
  },
  {
    value: 'EUR',
    label: '€ new value',
  },
  {
    value: 'BTC',
    label: '฿ new value',
  },
  {
    value: 'JPY',
    label: '¥ new value',
  },
]

export default function Hero() {
  const videoRef = useRef(null)

  const handlePlayerReady = () => {
    const videoElement = videoRef.current?.getInternalPlayer()
    if (videoElement) {
      videoElement.play()
    }
  }

  useEffect(() => {
    const videoElement = videoRef.current?.getInternalPlayer()

    const handleVideoEnded = () => {
      if (videoElement) {
        videoElement.seekTo(0)
        videoElement.play()
      }
    }

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnded)
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnded)
      }
    }
  }, [])

  return (
    <Box className="hm-hero-container">
      <Container sx={{ height: '100%', width: '100%' }}>
        <Box className="hm-hero-cntnr">
          <Box className="hm-hero-up">
            <Fade bottom>
              <Typography variant="h1" className="lg-font">
                Turning dream <span className="orng-clr"> homes </span> into
                reality.
              </Typography>
            </Fade>
            <Fade bottom>
              <Box className="hm-hero-btns-group">
                <Link to="/property/residential" className="home-btn">
                  residential
                </Link>
                <Link to="/property/commercial" className="home-btn">
                  commercial
                </Link>
              </Box>
            </Fade>
          </Box>
          <Box className="hm-hero-bottom">
            <ReactPlayer
              className="hm-hero-video"
              ref={videoRef}
              url={video}
              playing
              muted
              loop
              width="100%"
              height="100%"
              onReady={handlePlayerReady}
            />
          </Box>
          <Box className="hm-hero-mnu-card">
            <TextField id="outlined-select-currency" select defaultValue="EUR">
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="outlined-select-currency" select defaultValue="EUR">
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="outlined-select-currency" select defaultValue="EUR">
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button>Search</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

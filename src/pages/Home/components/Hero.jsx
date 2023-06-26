import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  MenuItem,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { Fade } from 'react-reveal'
import video from '../../../assets/images/optimized.mp4'

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
  const targetRef = useRef(null)
  const [isStartVideo, setIsStartVideo] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = targetRef.current
      if (targetElement) {
        const { top, bottom } = targetElement.getBoundingClientRect()
        const isVisible = top < window.innerHeight && bottom >= 0
        setIsStartVideo(isVisible)
      } else {
        setIsStartVideo(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box ref={targetRef} className="hm-hero-container">
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
                <Button>Rent Home</Button>
                <Button>Sale Home</Button>
              </Box>
            </Fade>
          </Box>
          <Box className="hm-hero-bottom">
            <ReactPlayer
              className="hm-hero-video"
              url={video} // Replace with your video URL
              //   playing={isVisible? true : false}
              playing={isStartVideo}
              //   controls
              loop
              width="100%"
              height="100%"
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

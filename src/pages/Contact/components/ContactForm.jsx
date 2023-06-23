import { TextareaAutosize } from '@mui/base'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import PersonIcon from '@mui/icons-material/Person'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import { Fade } from 'react-reveal'

const currencies = [
  {
    value: 'USD',
    label: 'One',
  },
  {
    value: 'EUR',
    label: 'Two',
  },
  {
    value: 'BTC',
    label: 'Three',
  },
  {
    value: 'JPY',
    label: 'Four',
  },
]

export default function ContactForm() {
  return (
    <Box>
      <Container>
        <Fade bottom>
          <Box className="cont-form-container">
            <Typography variant="h4">Get A Quote</Typography>
            <Box className="cont-form">
              <Box>
                <TextField
                  fullWidth
                  placeholder="Enter your name"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  placeholder="Enter your name"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-select-currency"
                  select
                  defaultValue="EUR"
                  fullWidth
                  placeholder="Enter your name"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <ArrowDownwardIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  placeholder="Enter your name"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <CallIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              </Box>
              <TextareaAutosize minRows={7} />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label=" Save my name, email, and website in this browser for the next time I comment."
              />
            </Box>
            <Button sx={{ mt: 4 }} className="abt-service-btn ">
              Get A Free Service
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

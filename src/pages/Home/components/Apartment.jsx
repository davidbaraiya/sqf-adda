import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import img from '../../../assets/images/10.png'

const tabsData = [
  { label: 'Tab 1', value: 'The Studio' },
  { label: 'Tab 2', value: 'Dulex Portion' },
  { label: 'Tab 3', value: 'Penthouse' },
  { label: 'Tab 4', value: 'Top Garden' },
  { label: 'Tab 5', value: 'Double Height' },
]

export default function Apartment() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    // console.log(newValue)
  }

  return (
    <Box className="apmt-container">
      <Container>
        <Box className="apmt-sub-container">
          <Typography variant="h6" className="sec-subtitle">
            Apartments Sketch
          </Typography>
          <Typography variant="h2" className="lg-font">
            Apartments Plan
          </Typography>
        </Box>

        <Box sx={{ width: '100%', mt: 6 }}>
          <Tabs
            className="apmt-tab"
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
            //   indicatorColor="error"
          >
            {tabsData.map((tab, index) => (
              <Tab key={index} value={index} label={tab.value} />
            ))}
          </Tabs>
          {
            <Grid sx={{ mt: 6 }} container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box className="apmt-plan-info">
                  <Typography variant="h4">Deluxe Portion</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, labore iste. Ea minima delectus, illo, tempora,
                    nobis omnis fuga minus earum vel vitae dolor. Quia ipsa
                    laudantium sapiente id eveniet.
                  </Typography>

                  <ul>
                    <li>
                      <span>Total Area</span>
                      <span>2800 Sq. Ft</span>
                    </li>
                    <li>
                      <span>Total Area</span>
                      <span>2800 Sq. Ft</span>
                    </li>
                    <li>
                      <span>Total Area</span>
                      <span>2800 Sq. Ft</span>
                    </li>
                    <li>
                      <span>Total Area</span>
                      <span>2800 Sq. Ft</span>
                    </li>
                    <li>
                      <span>Total Area</span>
                      <span>2800 Sq. Ft</span>
                    </li>
                    <li>
                      <span>Total Area</span>
                      <span>2800 Sq. Ft</span>
                    </li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="apmt-media">
                  <img src={img} alt="" />
                </Box>
              </Grid>
            </Grid>
          }
        </Box>
      </Container>
    </Box>
  )
}

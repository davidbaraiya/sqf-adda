import React, { useState, useEffect } from 'react'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Container,
  Typography,
  Box,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import axios from 'axios'

const dbUrl = 'https://sqf-adda-1876c-default-rtdb.firebaseio.com'

const UserDetails = () => {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(`${dbUrl}/userdata.json`)
      if (response.data) {
        const fetchedData = Object.values(response.data)
        setUserData(fetchedData)
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [userData])

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          minHeight: '50vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3">Loading...</Typography>
      </Box>
    )
  }

  return (
    <section className="table-data pt pb" sx={{ marginTop: '80px' }}>
      <Container>
        <Box className="pt">
          <Typography variant="h4" component="h4" mb={4} color="#ff5a3c">
            User
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ whiteSpace: 'nowrap' }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: '#ff5a3c', fontWeight: '600' }}>
                    Sr
                  </TableCell>
                  <TableCell sx={{ color: '#ff5a3c', fontWeight: '600' }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ color: '#ff5a3c', fontWeight: '600' }}>
                    Email
                  </TableCell>
                  <TableCell sx={{ color: '#ff5a3c', fontWeight: '600' }}>
                    Phone
                  </TableCell>
                  <TableCell sx={{ color: '#ff5a3c', fontWeight: '600' }}>
                    Receive Call
                  </TableCell>
                  <TableCell sx={{ color: '#ff5a3c', fontWeight: '600' }}>
                    Project Name
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map(
                  ({ name, email, phone, agree, projectName }, i) => (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{name}</TableCell>
                      <TableCell>{email}</TableCell>
                      <TableCell>{phone}</TableCell>
                      <TableCell>
                        {agree ? (
                          <CheckCircleIcon style={{ color: 'green' }} />
                        ) : (
                          <CancelIcon style={{ color: 'red' }} />
                        )}
                      </TableCell>
                      <TableCell>{projectName}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </section>
  )
}

export default UserDetails

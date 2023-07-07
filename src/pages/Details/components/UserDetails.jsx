import React from 'react'
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

const UserDetails = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))

  return (
    <section className="table-data pt pb" sx={{ marginTop: '80px' }}>
      <Container>
        <Box className="pt">
          <Typography variant="h4" component={'h4'} mb={4} color="#ff5a3c">
            User
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Agree</TableCell>
                  <TableCell>projectName</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData?.map(
                  ({ name, email, phone, agree, projectName }, i) => (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{name}</TableCell>
                      <TableCell>{email}</TableCell>
                      <TableCell>{phone}</TableCell>
                      <TableCell>{agree ? 'agree' : 'disagree'}</TableCell>
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

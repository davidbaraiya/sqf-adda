import React, { useState, useEffect, useMemo } from 'react'
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  Typography,
} from '@mui/material'
import './form.css'
import { toast } from 'react-toastify'

const Form = ({ projectName }) => {
  const [userData, setUserData] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agree: false,
    projectName: projectName,
  })
  const [errors, setErrors] = useState({})

  console.log(userData)

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData')
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData))
  }, [userData])

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData')
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length === 0) {
      setErrors({})
      setUserData(prevUserData => [...prevUserData, formData])
      setFormData({
        name: '',
        email: '',
        phone: '',
        agree: false,
        // projectName: '',
      })
      toast.success('Form submitted successfully!', {
        autoClose: 2000,
      })
    } else {
      setErrors(validationErrors)
    }
  }

  const handleFormData = e => {
    const { name, value, type, checked } = e.target
    const fieldValue = type === 'checkbox' ? checked : value
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: fieldValue,
    }))
  }

  const validateForm = data => {
    const errors = {}

    if (!data.name.trim()) {
      errors.name = 'Name is required'
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required'
    } else if (!isValidEmail(data.email.trim())) {
      errors.email = 'Invalid email address'
    }

    if (!data.phone.trim()) {
      errors.phone = 'Phone is required'
    } else if (!isValidPhone(data.phone.trim())) {
      errors.phone = 'Invalid phone number'
    }
    return errors
  }

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPhone = phone => {
    const phoneRegex = /^[0-9]{10}$/
    return phoneRegex.test(phone)
  }

  return (
    <Box className="form-wrapper">
      <Typography variant="h4" component={'h4'} mb={2} color="#ff5a3c">
        Submit Your Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleFormData}
          fullWidth
          margin="normal"
          required
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          value={formData.email}
          name="email"
          onChange={handleFormData}
          fullWidth
          margin="normal"
          required
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Phone"
          value={formData.phone}
          name="phone"
          onChange={handleFormData}
          fullWidth
          margin="normal"
          required
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="agree"
              checked={formData.agree}
              onChange={handleFormData}
              color="primary"
            />
          }
          label="I agree to receive a call from the sales team on this number"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default Form

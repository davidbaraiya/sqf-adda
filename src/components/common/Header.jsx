import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo2 from '../../assets/images/header-logo.png'
import logo from '../../assets/images/logo-4.png'
import '../../assets/styles/header.css'

const Header = () => {
  const [stickyHeader, setStickyHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset

      if (scrollPosition > 50) {
        setStickyHeader(true)
      } else {
        setStickyHeader(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <AppBar
        className={`hdr-appbar ${
          stickyHeader ? 'sticky-header-desk' : 'static-header-desk'
        }`}
      >
        <Container>
          <Toolbar className="hdr-toolbar" sx={{ padding: '0 !important' }}>
            <Box sx={{ flexGrow: 1 }} className="hdr-logo">
              <Link to="/">
                <img src={logo2} alt="logo" />
              </Link>
            </Box>
            <Drawer />
            <Box className="hdr-desk-navs">
              <NavLink
                className={({ isActive }) => (isActive ? 'activated' : '')}
                to="/"
              >
                <Button className={`header-menu-btn`} variant="text">
                  Home
                </Button>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'activated' : '')}
                to="/about"
              >
                <Button className={`header-menu-btn`} variant="text">
                  About
                </Button>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'activated' : '')}
                to="/property/residential"
              >
                <Button className={`header-menu-btn`} variant="text">
                  Residential Properties
                </Button>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'activated' : '')}
                to="/property/commercial"
              >
                <Button className={`header-menu-btn`} variant="text">
                  Commercial Properties
                </Button>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'activated' : '')}
                to="/contact"
              >
                <Button className={`header-menu-btn`} variant="text">
                  Contact
                </Button>
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header

const navMenus = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Residential Properties', path: '/property/residential' },
  { name: 'Commercial Properties', path: '/property/commercial' },
  { name: 'Contact', path: '/contact' },
]

function Drawer() {
  const [openDrawer, setOpenDrawer] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpenDrawer({ ...openDrawer, [anchor]: open })
  }

  const list = anchor => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="hd-mbl-mnu"
    >
      <Box className="hd-mbl-ico">
        <Link to="/">
          <img src={logo} alt="img" />
        </Link>
        <IconButton
          onClick={toggleDrawer('left', false)}
          className="hdr-appbar-menu"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List className="">
        {navMenus.map((men, index) => (
          <ListItem className="hd-mbl-mnu-list" key={index} disablePadding>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-mnu' : '')}
              to={men.path}
            >
              <ListItemButton>
                <ListItemText primary={men.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <IconButton
        onClick={toggleDrawer('left', true)}
        className="hdr-appbar-menu"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
    </>
  )
}

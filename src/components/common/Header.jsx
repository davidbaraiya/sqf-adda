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
// import logo2 from "../../assets/images/Adda.png";
import logo2 from '../../assets/images/header-logo.png'
// import logo from "../../assets/images/header-logo.png";
import logo from '../../assets/images/logo-4.png'
import '../../assets/styles/header.css'

const Header = () => {
  const [visibility, setVisibility] = useState('hidden')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset

      if (scrollPosition > 50) {
        setVisibility('visible')
      } else {
        setVisibility('hidden')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <AppBar className="hdr-appbar static-header-desk">
        <Container>
          <Toolbar className="hdr-toolbar">
            <Box sx={{ flexGrow: 1 }} className="hdr-logo">
              <Link to="/">
                <img src={logo2} alt="" />
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
                to="/contact"
              >
                <Button className={`header-menu-btn`} variant="text">
                  Contact
                </Button>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'activated' : '')}
                to="/property"
              >
                <Button className={`header-menu-btn`} variant="text">
                  Property
                </Button>
              </NavLink>
            </Box>
            <Button className="hdr-add-listing-btn">Add Listing</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <AppBar style={{ visibility }} className="hdr-appbar sticky-header-desk">
        <Container>
          <Toolbar className="hdr-toolbar">
            <Box sx={{ flexGrow: 1 }} className="hdr-logo">
              <Link to="/">
                <img src={logo2} alt="" />
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
                to="/contact"
              >
                <Button className={`header-menu-btn`} variant="text">
                  Contact
                </Button>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'activated' : '')}
                to="/property"
              >
                <Button className={`header-menu-btn`} variant="text">
                  Property
                </Button>
              </NavLink>
            </Box>
            <Button className="hdr-add-listing-btn">Add Listing</Button>
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
  { name: 'Contact', path: '/contact' },
  { name: 'Property', path: '/property' },
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="hd-mbl-mnu"
    >
      <Box className="hd-mbl-ico">
        <Link to="/">
          <img src={logo} alt="" />
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
                {/* <ListItemIcon>
                   <CloseIcon /> 
                  </ListItemIcon> */}
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
      {/* {openDrawer.left === false ?
                :
                <IconButton
                    onClick={toggleDrawer("left", false)}
                    className="hdr-appbar-menu"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                    <CloseIcon />
                </IconButton>
            } */}
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

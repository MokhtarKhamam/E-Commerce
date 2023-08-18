import React from 'react'
import { AppBar, Toolbar, Typography, Menu, Badge, MenuItem, IconButton } from '@mui/material'
import logo from "../../assets/_MG_5649.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"



function Navbar({totalItem}) {
  const location = useLocation();
  return (
    <>
      <AppBar position='fixed' color='inherit' >
        <Toolbar sx={{display : "flex" , justifyContent : "space-between"}}>
          {/* <div> */}
            <Typography variant='h6' component={Link} to="/" color="inherit" sx={{display : "flex", alignItem : "center", cursor : "pointer", textDecoration : "none"}}>
                <img src={logo} alt="commerce.js" className='navbar-image' />
                commerce.js
            </Typography>
          {/* </div> */}
          {location.pathname === "/" && (
          <div>
            <IconButton aria-label='show cart items' component={Link} to="/cart">
                <Badge badgeContent={totalItem} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar

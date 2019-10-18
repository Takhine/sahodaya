import React, { useState, useEffect }  from 'react';

// MATERIAL
import {
    AppBar,
    Toolbar,
    IconButton,
    MenuItem,
    Menu,
    Button,
    Drawer,
    Grid,
    Tabs,
    Tab,
    Typography,
  } from '@material-ui/core';
  import MenuIcon from '@material-ui/icons/Menu';

  import logo from 'static/images/cbse-logo.png';
function Navbar() {
    return (
        <div className="grow">
            <AppBar position="fixed" id="navbar">
                <Toolbar>
                <IconButton
                    aria-label="Open drawer"
                    edge="start"
                    // onClick={toggleDrawer('left', true)}
                    className="menu-button"
                >
                    <MenuIcon />
                </IconButton>
                <h2>Sahodaya School Complex MMR OMMR</h2>
                <div className="grow"/>
                <div className="logo-container">
                    <img src={logo} alt="Sahodaya School Complex Logo" />
                </div>
                <div className="nav-menu-container">
                <Button>Home</Button>
                <Button>About</Button>
                <Button>Events</Button>
                <Button>Archives</Button>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
import React, { useState, useEffect } from 'react';

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
import { NavLink } from 'react-router-dom';

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
                    <div className="grow" />
                    <div className="logo-container">
                        <img src={logo} alt="Sahodaya School Complex Logo" />
                    </div>
                    <div className="nav-menu-container">
                        <NavLink exact to="/">
                        <Button>Home</Button>
                        </NavLink>
                        <NavLink exact to="/about">
                        <Button>About</Button>
                        </NavLink>
                        <NavLink exact to="/events">
                        <Button>Events</Button>
                        </NavLink>
                        <Button>Archives</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
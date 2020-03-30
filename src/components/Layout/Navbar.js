import React from 'react';

// MATERIAL
import {
    AppBar,
    Toolbar,
    IconButton,
    MenuItem,
    Menu,
    Button,
    Fade,
    Drawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

import logo from 'static/images/cbse-logo.png';
import cancel from 'static/images/sidebar-cancel-icon.png';

import Sidebar from './Sidebar';
const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    // Sidebar Menu
    const leftSideList = side => (
        <div>
            <Sidebar />
        </div>
    );
    return (
        <div className="grow">
            <AppBar position="fixed" id="navbar">
                <Toolbar>
                    <IconButton
                        aria-label="Open drawer"
                        edge="start"
                        onClick={toggleDrawer('left', true)}
                        className="menu-button"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer role="tempporary" open={state.left} onClose={toggleDrawer('left', false)}>
                        <div className="flex-end">
                            <IconButton
                                onClick={toggleDrawer('left', false)}
                            >
                                <img src={cancel} alt="cancel" width="18" />
                            </IconButton>
                        </div>
                        {leftSideList('left')}
                    </Drawer>
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
                        <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>Archives</Button>
                        <Menu
                            id="fade-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                            className="menu-container"
                        >
                            <a href="http://cbse.nic.in/newsite/circulars.html" target="_blank" rel="noopener noreferrer">
                                <MenuItem onClick={handleClose}>Latest CBSE Circulars</MenuItem>
                            </a>
                            <a href="http://cbse.nic.in/newsite/archives.html" target="_blank" rel="noopener noreferrer">
                                <MenuItem onClick={handleClose}>Circulars Archives</MenuItem>
                            </a>
                            <a href="http://cbseacademic.nic.in/circulars_archive.html" target="_blank" rel="noopener noreferrer">
                                <MenuItem onClick={handleClose}>Academic Circulars</MenuItem>
                            </a>
                            <a href="http://cbseacademic.nic.in/skill-education.html" target="_blank" rel="noopener noreferrer">
                                <MenuItem onClick={handleClose}>Skill Education</MenuItem>
                            </a>
                            <a href="http://cbseaff.nic.in/cbse_aff/frmCircular.aspx" target="_blank" rel="noopener noreferrer">
                                <MenuItem onClick={handleClose}>Affiliation Circulars</MenuItem>
                            </a>
                            <a href="https://www.maharashtra.gov.in/1145/Government-Resolutions" target="_blank" rel="noopener noreferrer">
                                <MenuItem onClick={handleClose}>Maha-Govt. GRs</MenuItem>
                            </a>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
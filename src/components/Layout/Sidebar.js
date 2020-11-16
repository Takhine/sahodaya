import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';

import Home from '@material-ui/icons/Home';
import People from '@material-ui/icons/People';
import Collections from '@material-ui/icons/Collections';







const navItems = [
    {
        id: 1,
        outlink: '/',
        name: 'Home',
        icon: <Home />,
    },
    {
        id: 2,
        outlink: '/about',
        name: 'About',
        icon: <People />,
    },
    {
        id: 2,
        outlink: '/blogs',
        name: 'Blogs',
        icon: <Collections />,
    },
    {
        id: 3,
        outlink: '/events',
        name: 'Events',
        icon: <Collections />,
    }
]

const archives = [
    {
        id: 1,
        outlink: 'http://cbse.nic.in/newsite/circulars.html',
        name: 'Latest CBSE Circulars',
    },
    {
        id: 2,
        outlink: 'http://cbse.nic.in/newsite/archives.html',
        name: 'Circulars Archives',
    },
    {
        id: 3,
        outlink: 'http://cbseacademic.nic.in/circulars_archive.html',
        name: 'Academic Circulars',
    },
    {
        id: 4,
        outlink: 'http://cbseacademic.nic.in/skill-education.html',
        name: 'Skill Education'
    },
    {
        id: 5,
        outlink: 'http://cbseaff.nic.in/cbse_aff/frmCircular.aspx',
        name: 'Affiliation Circulars'
    },
    {
        id: 6,
        outlink: 'https://www.maharashtra.gov.in/1145/Government-Resolutions',
        name: 'Maha-Govt. GRs'
    }
]

const Sidebar = (props) => {
    const [open, setOpen] = React.useState(true);
    function handleClick() {
        setOpen(!open);
    }

    return (
        <div
            className="sidebar-list"
            role="presentation"
            onClick={handleClick}
        >
            <List>
                {navItems.map((navItem) => (
                    <NavLink key={navItem.id} exact to={navItem.outlink}>
                        <ListItem className="list-item" button>
                            <ListItemIcon>{navItem.icon}</ListItemIcon>
                            <ListItemText primary={navItem.name} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
            <Divider />
            <List>
                {archives.map((archive) => (
                    <a href={archive.outlink} key={archive.id} target="_blank" rel="noopener noreferrer">
                        <ListItem className="list-item" button>
                            <ListItemText primary={archive.name} />
                        </ListItem>
                    </a>
                ))}
            </List>
        </div>
    );
}
export default Sidebar;





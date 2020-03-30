import React from 'react';
import {
    Grid,
    Paper
} from '@material-ui/core';

import placeholder from 'static/images/office_bearers/placeholder.jpg';
import rajeev from 'static/images/office_bearers/rajeev_garg.jpg';
import raj from 'static/images/office_bearers/raj_aloni.png';
import nandita from 'static/images/office_bearers/nandita_khanna.png';
import ganesh from 'static/images/office_bearers/ganesh_parmeshwaran.png';




const people = [
    {
        id: 1,
        name: 'MR. RAJEEV KUMAR GARG',
        img: rajeev,
        position: 'Principal, Datta Meghe World Academy, Sector 16, Airoli, Navi Mumbai 400708; Thane',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
    {
        id: 2,
        name: 'MRS. RANJANA JANGRA',
        img: placeholder,
        position: 'Principal, B. K. Birla Public School Birla College Road, Gauripada Kalyan (W),Thane 421304;',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
    {
        id: 3,
        name: 'MR. B. ANIL KUMAR',
        img: placeholder,
        position: 'Principal, Chinmaya Vidyalaya Plot No 201, MIDC Area, Saravali, Vidyanagar, Palghar, Boisar, Maharashtra 401501;',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
    {
        id: 4,
        name: 'MRS. RAJ ALONI',
        img: raj,
        position: 'Principal, Ramsheth Thakur Public School Plot No-11 Sector-19, Kharghar, Navi Mumbai, Maharashtra 410210',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
    {
        id: 5,
        name: 'MR. GANESH PARAMESHWARAN',
        img: ganesh,
        position: 'Principal, Bal Bharati Public School, Plot No 5, Sector 4, Kharghar, Navi Mumbai,Maharashtra 410210',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
    {
        id: 6,
        name: 'MRS. NANDITA KHANNA',
        img: nandita,
        position: 'Principal, Nalanda Public School, Mulund (E),Hari Om Nagar',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    }
]

const OfficeBearers = () => {
    return (
        <div className="office-bearers-section">
            <h2 className="office-bearers-title">Office Bearers</h2>
            <Grid container spacing={2}>
                {people.map((person) => {
                    return (
                        <Grid key={person.id} item xs={12} sm={4} md={3}>
                            <Paper className="person-card-container">
                                <div className="person-image-container">
                                    <img src={person.img} alt="placeholder" />
                                </div>
                                <h3 className="person-name">{person.name}</h3>
                                <h4 className="person-position">{person.position}</h4>
                               {/* <p className="person-description">{person.description}</p> */}
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default OfficeBearers;
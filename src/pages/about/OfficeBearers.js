import React from 'react';
import {
    Grid,
    Paper
} from '@material-ui/core';

import placeholder from 'static/images/placeholder.svg';
const people = [
    {
        id: 1,
        name: 'Office Bearer',
        position: 'Position',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
    {
        id: 2,
        name: 'Office Bearer',
        position: 'Position',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
    {
        id: 3,
        name: 'Office Bearer',
        position: 'Position',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
    {
        id: 4,
        name: 'Office Bearer',
        position: 'Position',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
    {
        id: 5,
        name: 'Office Bearer',
        position: 'Position',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
    {
        id: 6,
        name: 'Office Bearer',
        position: 'Position',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
    {
        id: 7,
        name: 'Office Bearer',
        position: 'Position',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
    {
        id: 8,
        name: 'Office Bearer',
        position: 'Position',
        description: 'Short Description or quote Short Description or quote Short Description or quote'
    },
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
                                    <img src={placeholder} />
                                </div>
                                <h3 className="person-name">{person.name}</h3>
                                <h4 className="person-position">{person.position}</h4>
                                <p className="person-description">{person.description}</p>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default OfficeBearers;
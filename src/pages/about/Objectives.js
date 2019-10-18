import React from 'react';
import {
    Grid,
    Paper
} from '@material-ui/core';
import Icon from 'static/images/cbse-logo.png';
const Objectives = () => {
    return (
        <div className="objectives-section">
            <h2 className="objectives-title">Objectives</h2>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className="objectives-card">
                        <div className="icon-container">
                            <img src={Icon} />
                        </div>
                        <hr/>
                        <p>Since the inception of Amritsar Sahodaya Schools Complex in the second half of 80's, to present day, 
                            various efforts have been made to provide the right type of guidance and opportunities to all the schools associated with the complex.</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className="objectives-card">
                        <div className="icon-container">
                            <img src={Icon} />
                        </div>
                        <hr/>
                        <p>Since the inception of Amritsar Sahodaya Schools Complex in the second half of 80's, to present day, 
                            various efforts have been made to provide the right type of guidance and opportunities to all the schools associated with the complex.</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className="objectives-card">
                        <div className="icon-container">
                            <img src={Icon} />
                        </div>
                        <hr/>
                        <p>Since the inception of Amritsar Sahodaya Schools Complex in the second half of 80's, to present day, 
                            various efforts have been made to provide the right type of guidance and opportunities to all the schools associated with the complex.</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Objectives;
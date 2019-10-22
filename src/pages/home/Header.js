import React from 'react';
import {
    Paper,
    Button,
    Grid
  } from '@material-ui/core';

function Header() {
    return (
        <div className="header-container">
            <img src="https://picsum.photos/id/526/1280/400" alt="Header"/>
            {/* https://picsum.photos/id/534/1280/400 */}
            <div className="header-bottom">
                <Grid container spacing={8}>
                    <Grid className="cta-grid" item xs={12} sm={6}>
                    <Paper className="cta-container">
                <h3 className="cta-message">Take a leap towards excellence with us</h3>
                <small className="cta-quote"><q><i>Excellence is the gradual result of always striving to do better.</i></q></small>
                <div className="flex-container">
                    <Button className="cta-button">Join Sahodaya</Button>
                </div>
            </Paper>
                    </Grid>
                    <Grid className="welcome-grid" item xs={12} sm={6}>
                        <h1>Welcome to MMR OMMR Sahodaya</h1>
                        <p>Sahodaya, a concept literally meaning ‘’Rising Together’ came into being in the year 1986, 
                            to facilitate synergy of ideas among the schools of CBSE for excellence in the education.</p>
                        <p>A Sahodaya School Complex is a group of neighbourhood schools voluntarily coming together to share their innovative practices in all aspects of school education
                             including curriculum design, evaluation and pedagogy and also providing support services for teachers and students.</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Header;
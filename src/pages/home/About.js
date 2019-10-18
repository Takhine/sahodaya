import React from 'react';
import mobileTimeline from 'static/images/mobile-timeline.svg';
import timeline from 'static/images/timeline.svg';
import {
    Button,
    Grid
} from '@material-ui/core';

function About() {
    return (
        <div className="about-container">
            <Grid container spacing={4}>
                <Grid container item xs={12} md={8}>
                    <Grid item xs={12}>
                        <h2 className="about-title">About us</h2>
                        <p className="about-content">Since the inception of Amritsar Sahodaya Schools Complex in the second half of 80's, to present day,
                            various efforts have been made to provide the right type of guidance and opportunities to all the schools associated with the complex.
                            Regular meetings and workshops are conducted to ensure an exchange of information and ideas,
                            to appraise the work of educational institutions and to offer suggestions for the implementation and betterment of the same.
                            The complex also endeavours to disseminate the good practices found in some schools to all other schools.
                            Sahodaya Schools Complex is working tirelessly with a true Sahodaya Spirit, sharing and helping each other whenever needed.
                            With the passage of time Amritsar Sahodaya has become a close-knit family.
                            The turning point of Amritsar Sahodaya was when it successfully hosted the national conference in 2014.</p>
                        <img className="mobile-timeline" src={mobileTimeline} alt="Sahodaya Timeline" />
                    </Grid>
                    <Grid className="mv-container" item container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <h2 className="mission-title">Mission</h2>
                            <p className="mission-content">Since the inception of Amritsar Sahodaya Schools Complex in the second half of 80's, to present day,
                                various efforts have been made to provide the right type of guidance and opportunities to all the schools associated with the complex.</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h2 className="vision-title">Vision</h2>
                            <p className="vision-content">Since the inception of Amritsar Sahodaya Schools Complex in the second half of 80's, to present day,
                                various efforts have been made to provide the right type of guidance and opportunities to all the schools associated with the complex.</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="timeline-container" item xs={12} md={4}>
                    <img className="timeline" src={timeline} alt="Sahodaya Timeline" />
                </Grid>
            </Grid>

        </div>
    )
}

export default About;
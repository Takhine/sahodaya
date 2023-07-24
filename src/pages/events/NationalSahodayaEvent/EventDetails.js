import { Paper, Button, Grid } from "@material-ui/core";
import FadeIn from 'react-fade-in';

const EventDetails = () => {
    return (
        <div className="header-bottom home-content">
            <Grid container spacing={8}>
                <Grid className="cta-grid" item xs={12} sm={6}>
                    <Paper className="event-cta-container">
                        <FadeIn>
                            <h3 className="cta-message">
                                National Sahodaya Event '23
                            </h3>
                        </FadeIn>
                        <FadeIn>
                            <h3 className="cta-date">
                                Date: <b>7th-9th December, 2023 </b>
                            </h3>
                        </FadeIn>
                        <FadeIn>
                            <h3 className="cta-location">
                                Location: <a
                                    href="https://goo.gl/maps/m2nRvt1syeHqAizJ8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <b>Westin, Powai Lake</b>
                                </a>
                            </h3>
                        </FadeIn>
                    </Paper>
                </Grid>
                <Grid className="welcome-grid" item xs={12} sm={6}>
                    <FadeIn>
                        <h1>Event Details</h1>
                    </FadeIn>
                    <hr />
                    <p>
                        The highly anticipated "National Sahodaya Event'23" is set to take place from the 7th to the 9th of December 2023, gathering educators and learning enablers from all corners of the country. This exceptional event will serve as a unique platform for participants to come together, share knowledge, and explore innovative practices that can revolutionize the education sector. With a diverse range of workshops, interactive sessions, and engaging activities, attendees can look forward to gaining valuable insights into modern teaching methodologies, technological advancements, and student-centric approaches.
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default EventDetails;
import React from "react";
import mobileTimeline from "static/images/mobile-timeline.svg";
import timeline from "static/images/timeline.svg";
import { Grid } from "@material-ui/core";

function About() {
  return (
    <div className="about-container">
      <Grid container spacing={4}>
        <Grid container item xs={12} md={8}>
          <Grid item xs={12}>
            <h2 className="about-title">About us</h2>
            <p className="about-content">
              Sahodaya, a concept literally meaning ‘’Rising Together’ came into
              being in the year 1986, to facilitate synergy of ideas among the
              schools of CBSE for excellence in the education. As Sahodaya
              Schools Complex, we voluntarily come together to share our
              innovative practices in all aspects of school education including
              curriculum design, evaluation and pedagogy. We provide support for
              teachers and students, in order for them to keep up with ever
              changing era of education.
            </p>
            <img
              className="mobile-timeline"
              src={mobileTimeline}
              alt="Sahodaya Timeline"
            />
          </Grid>
          <Grid className="mv-container" item container spacing={4}>
            <Grid item xs={12} sm={6}>
              <h2 className="mission-title">Mission</h2>
              <p className="mission-content">
                To achieve quality benchmark in school education, widen skills
                and educational research, to organize empowerment programs to
                improve the professional competency of teachers, encourage
                healthy interaction and mutual appreciation with opportunities
                for students to work with each other and to raise a winning
                network of schools and to create mutual and enduring value.
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2 className="vision-title">Vision</h2>
              <p className="vision-content">
                Growing together using the best integrated platforms shaped
                through a united decision-based environment, convergence of
                minds, broadened learning perspectives, and enhanced network of
                resources and guidance.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="timeline-container" item xs={12} md={4}>
          <img className="timeline" src={timeline} alt="Sahodaya Timeline" />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;

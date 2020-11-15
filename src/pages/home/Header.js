import React from "react";
import { Paper, Button, Grid } from "@material-ui/core";

import headerBanner from "static/images/home-header-desktop.jpg";

function Header() {
  return (
    <div className="header-container">
      <img className="header-image" src={headerBanner} alt="Header" />
      {/* https://picsum.photos/id/534/1280/400 */}
      <div className="header-bottom">
        <Grid container spacing={8}>
          <Grid className="cta-grid" item xs={12} sm={6}>
            <Paper className="cta-container">
              <h3 className="cta-message">
                Take a leap towards excellence with us
              </h3>
              <small className="cta-quote">
                <q>
                  <i>
                    Excellence is the gradual result of always striving to do
                    better.
                  </i>
                </q>
              </small>
              <div className="flex-container">
                <a
                className="noDecor"
                  href="https://forms.gle/3geT2o6SSJ88QsaHA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cta-button">Download Form</Button>
                </a>
              </div>
            </Paper>
          </Grid>
          <Grid className="welcome-grid" item xs={12} sm={6}>
            <h1>Welcome to Mumbai Sahodaya</h1>
            <p>
              Since the inception of Sahodaya MMR and OMMR in 2009, to the
              present day, various efforts have been made to provide the right
              type of guidance and opportunities to all the schools associated
              with the complex in Mumbai, Thane (incl. Navi Mumbai), Palghar and
              Raigad Districts. Regular meetings and workshops are conducted to
              ensure an exchange of information and ideas, to appraise the work
              of educational institutions and to offer suggestions for the
              implementation and betterment of the same.{" "}
            </p>
            <p>
              Sahodaya Schools Complex is working tirelessly with a true
              Sahodaya Spirit, sharing and helping each other whenever needed.
              With the passage of time Sahodaya MMR and OMMR has become a
              close-knit family, and we welcome you to join us and make this
              family bigger and better.
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Header;

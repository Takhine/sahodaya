import React from "react";
import { Grid, Button } from "@material-ui/core";
import logo from "static/images/sahodaya-logo.png";
import g20logo from "static/images/g20-logo.jpg";
import underline from "static/images/underline.svg";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Grid style={{ width: "100%", margin: "unset" }} container spacing={8}>
        <Grid className="footer-logo-container" item sm={12} md={3}>
          <img className="saho-footer-logo" src={logo} alt="Images" />
          <a className="noDecor" href="https://forms.gle/3geT2o6SSJ88QsaHA" target="_blank" rel="noopener noreferrer">
            <Button className="cta-button">Download Form</Button>
          </a>
          <img className="saho-footer-g20-logo" src={g20logo} alt="Images" />
        </Grid>
        <Grid item container xs={12} sm={9}>
          <Grid className="footer-links-container" item xs={12}>
            <div className="title-container">
              <h3 className="footer-subtitle">Quick Links</h3>
              <img className="underline" src={underline} alt="underline" />
            </div>
            <div className="footer-menu-container">
              <NavLink exact to="/">
                <Button>Home</Button>
              </NavLink>
              <NavLink exact to="/about">
                <Button>About</Button>
              </NavLink>
              <NavLink exact to="/blogs">
                <Button>Blogs</Button>
              </NavLink>
              <NavLink exact to="/events">
                <Button>Events</Button>
              </NavLink>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="title-container archive">
              <h3 className="footer-subtitle">Archives</h3>
              <img className="underline" src={underline} alt="underline" />
            </div>
            <div className="footer-archives-container">
              <a
                href="http://cbse.nic.in/newsite/circulars.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Latest CBSE Circulars</Button>
              </a>
              <a
                href="http://cbse.nic.in/newsite/archives.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Circulars Archives</Button>
              </a>
              <a
                href="http://cbseacademic.nic.in/circulars_archive.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Academic Circulars</Button>
              </a>
              <a
                href="http://cbseacademic.nic.in/skill-education.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Skill Education</Button>
              </a>
              <a
                href="http://cbseaff.nic.in/cbse_aff/frmCircular.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Affiliation Circulars</Button>
              </a>
              <a
                href="https://www.maharashtra.gov.in/1145/Government-Resolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Maha-Govt. GRs</Button>
              </a>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <small className="copyright">
        Copyright &copy; Sahodaya Schools Association Mumbai Metropolitan Region & Outer Mumbai Metropolitan Region
      </small>
    </div>
  );
};

export default Footer;

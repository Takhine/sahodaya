import React from "react";
import Layout from "components/Layout";
import { Grid } from "@material-ui/core";
// Components
import Objectives from "./Objectives";
import OfficeBearers from "./OfficeBearers";
import BreadcrumbBar from "components/BreadcrumbBar";
import aboutHeader from "static/images/about-header.jpg";
import listArrow from "static/images/icons/list-arrow-2.svg";
import FadeIn from "react-fade-in";

const aimList = [
  {
    id: 1,
    aim: "Educative Management",
  },
  {
    id: 2,
    aim: "Professional Growth of Teachers",
  },
  {
    id: 3,
    aim: "Evaluation",
  },
  {
    id: 4,
    aim: "Value-Oriented School Climate",
  },
  {
    id: 5,
    aim: "Human Resource Mobilization",
  },
  {
    id: 6,
    aim: "Vocationalisation of Education",
  },
];
const About = () => {
  return (
    <Layout>
      <div className="header-container about-page">
        <BreadcrumbBar page="About" />
        <div>
          <h2 className="about-title">Aim</h2>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <div className="about-content">
                “Sahodaya” signifies rising together, it identified six areas,
                to begin with, for collaboration amongst schools of it’s
                Complex:
                <div className="aim">
                  {aimList.map((item) => (
                    <FadeIn key={item.id}>
                      <div className="aim-container">
                        <img
                          className="aim-arrow"
                          src={listArrow}
                          alt="List Arrow"
                        />
                        <p className="aim-text">{item.aim}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                className="about-image"
                src={aboutHeader}
                alt="Sahodaya Team"
              />
            </Grid>
          </Grid>
        </div>
        <Objectives />
        <OfficeBearers />
      </div>
    </Layout>
  );
};

export default About;

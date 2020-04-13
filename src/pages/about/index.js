import React from "react";
import Layout from "components/Layout";

// Components
import Objectives from "./Objectives";
import OfficeBearers from "./OfficeBearers";
import BreadcrumbBar from "components/BreadcrumbBar";
import aboutBanner from "static/images/about-header.jpg";
import listArrow from "static/images/icons/list-arrow-2.svg";

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
        <div className="header-bottom">
          <h2 className="about-title">Aim</h2>
          <div className="about-content">
            “Sahodaya” signifies rising together, it identified six areas, to
            begin with, for collaboration amongst schools of it’s Complex:
            {aimList.map((item) => (
              <div className="aim-container" key={item.id}>
                <img className="aim-arrow" src={listArrow} alt="List Arrow" />
                <p className="aim-text">{item.aim}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Objectives />
      <OfficeBearers />
    </Layout>
  );
};

export default About;

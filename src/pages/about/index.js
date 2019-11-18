import React from 'react';
import Layout from 'components/Layout';

// Components
import Objectives from './Objectives';
import OfficeBearers from './OfficeBearers';

import aboutBanner from 'static/images/about-header.jpg';

const About = () => {
    return (
        <Layout>
            <div className="header-container about-page">
                <img src={aboutBanner} alt="Header" />
                <h2 className="banner-title">About us</h2>
                <div className="header-bottom">
                    <h2 className="about-title">Aim</h2>
                    <div className="about-content">
                        “Sahodaya” signifies rising together, it identified six areas, to begin with, for collaboration amongst schools of it’s Complex:
                        <ol>
                            <li>Educative Management</li>
                            <li>Professional Growth of Teachers</li>
                            <li>Evaluation</li>
                            <li>Value-Oriented School Climate</li>
                            <li>Human Resource Mobilization</li>
                            <li>Vocationalisation of Education</li>
                        </ol>
                </div>
                </div>
            </div>
            <Objectives />
            <OfficeBearers />
        </Layout>
    )
}

export default About;
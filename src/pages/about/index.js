import React from 'react';
import Layout from 'components/Layout';

// Components
import Objectives from './Objectives';
import OfficeBearers from './OfficeBearers';

const About = () => {
    return (
        <Layout>
            <div className="header-container about-page">
                <img src=" https://picsum.photos/id/534/1280/400" alt="Header Image" />
                <h2 className="banner-title">About us</h2>
                <div className="header-bottom">
                <h2 className="about-title">Aim</h2>
                <p className="about-content">Since the inception of Amritsar Sahodaya Schools Complex in the second half of 80's, to present day, various efforts have been made to provide the right
                    type of guidance and opportunities to all the schools associated with the complex. Regular meetings and workshops are conducted to ensure an exchange of
                    information and ideas, to appraise the work of educational institutions and to offer suggestions for the implementation and betterment of the same. The
                    complex also endeavours to disseminate the good practices found in some schools to all other schools.
                    Sahodaya Schools Complex is working tirelessly with a true Sahodaya Spirit, sharing and helping each other whenever needed. With the passage of time
                    Amritsar Sahodaya has become a close-knit family.
                    The turning point of Amritsar Sahodaya was when it successfully hosted the national conference in 2014.</p>

            </div>
            </div>
            <Objectives/>
            <OfficeBearers/>
        </Layout>
    )
}

export default About;
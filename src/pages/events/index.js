import React from 'react';
import Layout from 'components/Layout';


const Events = () => {
    return (
        <Layout>
            <div className="container">
                <h1 className="activities">Activities</h1>
                <hr />
                <div className="event-container">
                    <h2 className="event-subtitle">Event Name</h2>
                    <p className="event-description">Sahodaya, a concept literally meaning ‘’Rising Together’ came into being in the year 1986, to facilitate synergy of ideas among the schools of CBSE for excellence in the education.
                        A Sahodaya School Complex is a group of neighbourhood schools voluntarily coming together to share their innovative practices in all aspects of school education including curriculum design,
                        evaluation and pedagogy and also providing support services for teachers and students.</p>
                    {/* Images Grid */}
                </div>
            </div>
        </Layout>
    )
}

export default Events;
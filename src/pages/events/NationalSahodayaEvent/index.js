import React from "react";
import Layout from "components/Layout";
import Header from "pages/events/NationalSahodayaEvent/Header";
import Gallery from "pages/events/NationalSahodayaEvent/Gallery";
import EventDetails from "./EventDetails";

const NationalSahodayaEvent = () => {

    return (
        <Layout>
            <div className="header-container">
                {/* Header */}
                <Header />
                {/* Event Details */}
                <EventDetails />
            </div>
            {/* Gallery */}
            <Gallery />
        </Layout>
    )
}

export default NationalSahodayaEvent;
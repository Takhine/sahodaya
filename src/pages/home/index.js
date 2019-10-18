import React from 'react';
import Layout from 'components/Layout';

// Components
import Header from './Header';
import About from './About';
import MemberSchools from './MemberSchools';

function Home() {
    return (
        <Layout>
            {/* Header */}
            <Header/>
            <div>
                {/* About */}
                <About/>
                {/* Member Schools Slider */}
                <MemberSchools/>
            </div>
        </Layout>
    );

}
export default Home;
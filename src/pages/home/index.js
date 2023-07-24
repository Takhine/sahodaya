import React, {useState} from 'react';
import Layout from 'components/Layout';

// Components
import Header from './Header';
import About from './About';
import EventModal from "components/Modals/EventModal";
function Home() {
    const [visible, setVisible] = useState(true);

    const handleCancel = () => {
        setVisible(false);
    }
    return (
        <Layout>
            {/* Header */}
            <Header/>
            <div>
                {/* About */}
                <About/>
                {/* Member Schools Slider */}
                {/* <MemberSchools/>*/}
            </div>
            {/* <EventModal handleCancel={handleCancel} visible={visible} /> */}
        </Layout>
    );

}
export default Home;
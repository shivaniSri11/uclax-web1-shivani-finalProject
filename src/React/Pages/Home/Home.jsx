import React from 'react';

/* Components ---------------------------*/
// import Slideshow from './Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Services from './Services/Services.jsx';
import MidSection from './MidSection.jsx';
import Clients from './Clients.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';

const Home = () => {

    return (
        <div className='Home'>

            {/* <Slideshow /> */}

            <div className="nested">
                <Tabbed />
            </div>
            <div className="nested">
                <Services />
            </div>

            <MidSection />
            <Clients />
            <Testimonials />

        </div>
    );
}

export default Home;
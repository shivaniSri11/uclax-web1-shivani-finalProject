import React from 'react';

/* Components ---------------------------*/
// import Slideshow from './Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Services from './Services/Services.jsx';
import Clients from './Clients.jsx';
import Testimonials from './Testimonials.jsx';

const Home = () => {

    return (
        <div className='Home'>
            <h1>Home</h1>

            {/* <Slideshow /> */}

            <div className="nested">
                <Tabbed />
            </div>
            <div className="nested">
                <Services />
            </div>
    
            <Clients />
            <Testimonials />

        </div>
    );
}

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import About from '../About/About';
import PopularMenu from '../PopularMenu/PopularMenu';
import Recommends from '../Recommends/Recommends';
import CallUs from '../CallUs/CallUs';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            {/* Banner section */}
            <Banner/>

            {/* Category Section */}
            <Category/>

            {/* About section */}
            <About/>

            {/* Popular menu section */}
            <PopularMenu/>

            {/* Call Us section */}
            <CallUs/>

            {/* Recommends section */}
            <Recommends/>

            {/* Featured section */}
            <Featured/>

            {/* Testimonials section */}
            <Testimonials/>
        </div>
    );
};

export default Home;
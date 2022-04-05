import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
// import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import HeadMunu from '../HeadMunu/HeadMunu';
import HoomFoods from '../HomeFoods/HomeFoods/HoomFoods';
// import Partner from '../Partner/Partner';
import Contact from './Contact/Contact';
import './Home.css'

const Home = () => {
    return (
        <div>
            <HeadMunu />
           <Banner />
            <HoomFoods />
            {/* <Features />  */}
            {/* <Partner /> */}
            <About/>
            <Contact />
            <Footer/>
        </div>
    );
};

export default Home;
import React, { useEffect } from 'react';
import './About.css';
import img from '../../../Image/icon/about.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
      })
    

    return (
        <div className=' container mt-5 mb-5 p-3 shadow-lg about'>
            <h1 className='headingt text-center'>About Us</h1>
            <div className='container'>
            <div className="row">
                <div data-aos="fade-right" data-aos-duration="2000" className='col-md-6 col-sm-12 acenter'>
                    <h1 className='bannerHeading mt-5'>We Service Door to Door <br /> Food Delivery</h1>
                    <p className='paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sed rerum id ipsam consectetur voluptatem magnam commodi sapiente repellendus esse nihil eligendi explicabo molestias, non sint quaerat obcaecati quas sequi.</p>
                    <div ><button className="button">Learn More</button></div>
                </div>
                
                <div className='col-md-6 col-sm-12'>
                <img data-aos="zoom-in-up" data-aos-duration="2000" className='aboutimg mb-3 mt-3' src={img} alt="" />
                </div>
                </div>
                </div>
        </div>
    );
};

export default About;
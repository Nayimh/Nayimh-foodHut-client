import React, { useEffect } from 'react';
import './Features.css'
import img1 from '../../../Image/icon/icon3.png'
import img2 from '../../../Image/icon/icon2.png'
import img3 from '../../../Image/icon/icon4.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {

      //animation
 useEffect(() => {
    AOS.init();
  })
  

    return (
        <div className="features mt-5 pt-5">
      <div className="featuretitle">
        <h1 className=" featuresHeading">What We Features</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat adipisci, tenetur voluptatum dignissimos quo esse
          velit architecto molestiae quibusdam necessitatibus aliquid
          distinctio unde, libero rem aliquam autem, explicabo quod
          in.
        </p>
      </div>
          <div className="container  mt-5 ">
              <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-2">
                  

          <div data-aos="fade-up-right" data-aos-duration="2000" className="fcard">
            <div>
              <img className="cardImg" src={img2} alt="" />
            </div>
            <div>
                          <h3 className="fctitle">The Best Courier</h3>
                          <p className="fcpara">Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Praesentium, vitae.</p>
            </div>
                  </div>
                  


        </div>
              <div className="col-lg-4 col-md-3 col-sm-2">
              <div data-aos="fade-up" data-aos-duration="2000" className="fcard">
            <div>
              <img className="cardImg" src={img1} alt="" />
            </div>
            <div>
                          <h3 className="fctitle">Easy To Use</h3>
                          <p className="fcpara">Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Praesentium, vitae.</p>
            </div>
                  </div>

        </div>
              <div className="col-lg-4 col-md-3 col-sm-2">
              <div data-aos="fade-up-left" data-aos-duration="3000" className="fcard">
            <div>
              <img className="cardImg" src={img3} alt="" />
            </div>
            <div>
                          <h3 className="fctitle">24/7 Support</h3>
                          <p className="fcpara">Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Praesentium, vitae.</p>
            </div>
                  </div>

        </div>
              </div>
              </div>
    </div>
    );
};

export default Features;
import React, { useEffect } from 'react';
import './Features.css';
import img1 from '../../../Image/icon/icon3.png'
import img2 from '../../../Image/icon/icon2.png'
import img3 from '../../../Image/icon/icon4.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card } from 'react-bootstrap';

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
                  

              <Card className='fcard' data-aos="fade-up-right" data-aos-duration="2000">
    <Card.Img className='fImg' variant="top" src={img3} />
    <Card.Body>
      <Card.Title className='fctitle'>24/7 SUPPORT</Card.Title>
      
    </Card.Body>
    
  </Card>
                  


        </div>
              <div className="col-lg-4 col-md-3 col-sm-2">
              <Card className='fcard' data-aos="fade-up" data-aos-duration="2000">
    <Card.Img className='fImg' variant="top" src={img2} />
    <Card.Body>
      <Card.Title className='fctitle'>The Best Courier</Card.Title>
      
    </Card.Body>
   
  </Card>

        </div>
              <div className="col-lg-4 col-md-3 col-sm-2">
              <Card  className='fcard' data-aos="fade-up-left" data-aos-duration="2000">
    <Card.Img className='fImg' variant="top" src={img1} />
    <Card.Body>
      <Card.Title className='fctitle'>Easy To Use</Card.Title>
      
    </Card.Body>
    
  </Card>

        </div>
              </div>
              </div>
    </div>
    );
};

export default Features;
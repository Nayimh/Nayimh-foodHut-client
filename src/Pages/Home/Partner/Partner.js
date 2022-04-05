import React, { useEffect } from 'react';
import './Partner.css'

import img1 from '../../../Image/icon/icon2.png';
import img2 from '../../../Image/food/food11.jpg'

import { Card } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Partner = () => {
       //animation
 useEffect(() => {
    AOS.init();
  })
    return (
        <div className='container mt-5 pt-5 mb-5'>
            <h1 className='featuresHeading features '>Want to join Our Pertnership?</h1>
            <div >
                <div className="row mt-5">
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Card data-aos="fade-down-right" data-aos-duration="2500" className='bg'>
    <Card.Img className='pimg' variant="top" src={img1} />
   
    <Card.Footer>
    <div className='pepalal'>
                                    <div className='fctitle'> Join Courier </div>
                                    <div> <button className="button">Readmore</button> </div>
      </div>
    </Card.Footer>
  </Card>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Card data-aos="fade-up-left" data-aos-duration="2000" className='bg'>
    <Card.Img className='pimg' variant="top" src={img2} />
   
    <Card.Footer>
                                <div className='pepalal'>
                                    <div className='fctitle'> Join Merchant </div>
                                    <div> <button className="button">Readmore</button> </div>
      </div>
    </Card.Footer>
  </Card>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;
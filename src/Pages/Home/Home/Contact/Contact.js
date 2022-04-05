import React, { useEffect } from 'react';
import './Contact.css'
import img from '../../../../Image/icon/contact.png'
import { Form } from 'react-bootstrap';

import AOs from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOs.init();
      })
    return (
        <div id='contact' className='container mt-5 pt-5 shadow-lg contact'>
            <h1 id='head' className='headingt mb-5'>Contact Us</h1>
            <div className='row'>
                
                <div data-aos='fade-right' data-aos-duration='1700' className='col-lg-6 col-md-6 col-sm-12'>
                <Form className="w-75 mx-auto my-5 ">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           
    <Form.Label className="text-white">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="text-white">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
                
  <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
 <br />
  <button className="contactBtn">Submit</button>
</Form>
                </div>
                <div data-aos='zoom-in-up' data-aos-duration='1500' className='col-lg-6 col-md-6 col-sm-12 p-4 text-center'>
                        <img style={{borderRadius: "50px"}} className='w-75' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
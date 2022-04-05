import React from 'react';

import './HomeFoods.css'

import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';

const HoomFoods = () => {

     //animation
 useEffect(() => {
    AOS.init();
  })
  
    const [foods, setFoods] = useState([]);
  
    useEffect(() => {
      fetch("./foodMenu.json")
        .then((res) => res.json())
        .then((dt) => setFoods(dt));
    }, []);
  


    return (
        <div className="mt-5">
        <h1 className="FoodHeading mx-auto">Delicius Food For you</h1>
        <div className="mt-5">
          <div className="container">
            <div className="row">
              {foods?.slice(0, 9).map(food => 
                <div className='col-lg-3 .col-md-4 col-sm-6 col-xs-12'>
              <Card data-aos="zoom-in-up" data-aos-duration="2000" className='foodcard shadow-lg mb-5'>
      <Card.Img className="cardimg" variant="top" src={food?.img} />
      <Card.Body>
                      <Card.Title> Name: { food?.name }</Card.Title>
        <Card.Text>
          Price: ${food?.price}
        </Card.Text>
        <Card.Text>
         {food?.desc}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <button className='button'>Order</button>
      </Card.Footer>
    </Card>
          
              </div> )
              }
            </div>
         
          </div>
        </div>
      </div>
    );
};

export default HoomFoods;
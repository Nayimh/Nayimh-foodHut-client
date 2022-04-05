import React from 'react';
import './Footers.css'
const Footer = () => {

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

    return (
        <>
        <div className='mt-5 footer'>
            <div>
                <h4>CONTACT</h4>
                <p>example@email.com</p>
                <p>+220118241</p>
                <p>www.example.com</p>
                <p>Bogura, Bangladesh</p>
           </div>
            <div>
            <h4>POPULAR Dishes</h4>
                <p>Mexican prawn soup</p>
                <p>Pan-fried dumpling</p>
                <p>Mexican recipes</p>
                <p>Lancashire mutton</p>
           </div>
            <div>
            <h4>USEFUL LINKS</h4>
                <p>Get Food Online</p>
                <p>Food Pots</p>
                <p>Vage Plants Online</p>
                <p>Food Fair</p>
           </div>
            <div>
            <h4 >ABOUT <span className='red' id='#home'>FoodHub</span></h4>
                <p>OUR BLOGS</p>
                <p>OUR VIDEOS</p>
                <p>GET IN TOUCH</p>
                    <p>ABOUT US</p>
                    <button onClick={topFunction} className="button">Scroll To Top</button>
            </div>
          
            
            </div>
        
            <div className='copyr'>
                <p>©Copyright by Nayim Hasan</p>
            </div>
            </>
    );
};

export default Footer;
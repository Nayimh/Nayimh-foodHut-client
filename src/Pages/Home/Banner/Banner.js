import React from 'react';
import './Banner.css'
import img from '../../../Image/banner/banner1.jpg'

const Banner = () => {
    return (
        <div className="banner shadow-sm">
      <div className="container">
      <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
            <div className="center">
            <h1 className="bannerHeading">Order your <br />Food & Enjoy <br /> The Test</h1>
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci odio asperiores porro. Quos, repudiandae. Tenetur ex optio architecto, unde eveniet accusantium quibusdam aliquam beatae, cupiditate magnam laboriosam suscipit, voluptate reiciendis.</p>
              <button className="button">Order Now</button>
              </div>
        </div>
        
      <div className="col-lg-6 col-md-6 col-sm-12 ">
          <img className="bannerImg" src={img} alt="" />
      </div>
      
        </div>
        </div>
    </div>
    );
};

export default Banner;
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img10 from '../Assets/10.jpg';
import img9 from '../Assets/9.jpg';
import '../components/About.css';

const Homedata = () => {
  

  return (
    <>
      <div className="first-des">
        <div className="des-text">
          <h2 className='about-us'>Who are we?</h2>
          <p className='about-us'>WayfarerWanderer is your passport to unforgettable adventures. Our dedicated team of travel enthusiasts is here to curate personalized experiences that exceed your expectations. Let us guide you through the world's wonders, ensuring every moment is filled with discovery and delight. Embark on a journey with us and let the world be your playground.</p>
        </div>
        <div className="image-container">
            <div>
              <img className='image' src={img10} alt="img2" />
              <div className="image-text">Dive Deep into the hidden mysteries of this beautiful forest</div>
            </div>
            <div>
              <img className='image' src={img9} alt="img3" />
              <div className="image-text">Lost deep in the luxory of this town!</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Homedata;

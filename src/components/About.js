import React from 'react'
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import './About.css'
const Homedata = () => {
  return (
        <>
        <div className="first-des">
            <div className="des-text">
                <h2 className='about-us'>Who are we?</h2>
                <p className='about-us'>WayfarerWanderer is your passport to unforgettable adventures. Our dedicated team of travel enthusiasts is here to curate personalized experiences that exceed your expectations. Let us guide you through the world's wonders, ensuring every moment is filled with discovery and delight. Embark on a journey with us and let the world be your playground.</p>
            </div>
            <div className="image">
                <img alt="img1" src={img1}/>
                <img alt="img2" src={img2}/>
            </div>
    </div>
   
    </>
  )
}

export default Homedata;

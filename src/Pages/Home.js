import React from 'react';
import Slider from 'react-slick';
import Hero from '../components/Hero';
import hotel1 from '../Assets/hotel1.jpeg'
import hotel2 from '../Assets/hotel3.jpeg'
import hotel3 from '../Assets/hotel7.jpeg'
import hotel4 from '../Assets/hotel8.jpeg'
import "slick-carousel/slick/slick-theme.css";
import './Home.css'; 

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='slider-container'>
      <Hero 
        cName="hero"
        heroImg={hotel4}
        title="ONE STOP TRAVEL SOLUTION"
        text="Make your Vacation plan best. travel the world with us."
        buttonText="Explore"
        url="/"
        btnClass="show"
      />
      {/* <div className='content'>
        Explore our handpicked selection of curated destinations, each offering a unique tapestry of experiences waiting to be discovered. From sun-kissed beaches to towering mountains, bustling cities to serene countryside retreats, there's something for every type of traveler.
        At WayfarerWanderer, we believe in personalized experiences tailored to your preferences and interests. Let our team of expert travel advisors craft the perfect itinerary just for you, ensuring every moment is filled with excitement and wonder.
        Embark on a journey of a lifetime with confidence, knowing that we prioritize your safety and well-being above all else. With our commitment to responsible travel practices and partnerships with trusted suppliers, you can explore the world with peace of mind.
        Join us in creating memories that will last a lifetime. Start planning your next adventure with WayfarerWanderer today and let the wanderlust begin.
      </div> */}
      <Slider {...settings} className='slider'>
        <div className='image1'>
          <img src={hotel2} className='image' alt="Sample 1" />
          <div className="image-text">Unwind and rejuvenate in style, creating unforgettable memories in  haven of tranquility.</div>
        </div>
        <div className='image1'>
          <img src={hotel1} className='image' alt="Sample 2" />
          <div className="image-text"> From the softest linens to the tranquil ambiance, your stay with us promises to be nothing short of extraordinary.</div>
        </div>
        <div className='image1'>
          <img src={hotel3} className='image' alt="Sample 3" />
          <div className="image-text">Dive into a world of serenity and luxury at  pristine poolside oasis, where crystal-clear waters beckon for a refreshing escape. </div>
        </div>
      </Slider>
    </div>
  );
}

export default Home;

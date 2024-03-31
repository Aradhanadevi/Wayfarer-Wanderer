import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Hero from '../components/Hero';
import hotel1 from '../Assets/hotel1.jpeg';
import hotel2 from '../Assets/hotel3.jpeg';
import hotel3 from '../Assets/hotel7.jpeg';
import hotel4 from '../Assets/hotel8.jpeg';
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '20%',
  };

  const style = `
    .card {
      width: 30%;
      padding: 20px;
      background-color: #ffffff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      margin-right: 20px;
      transition: transform 0.3s ease;
    }

    .card:last-child {
      margin-right: 0;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card h2 {
      color: #333333;
      font-size: 24px;
      margin-bottom: 10px;
    }

    .card p {
      color: #666666;
      font-size: 16px;
      margin-bottom: 20px;
    }

    .btn {
      background-color: #007bff;
      color: #ffffff;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn:hover {
      background-color: #0056b3;
    }

    .content-container {
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
    }
  `;

  return (
    <div className='home-container'>
      <style>{style}</style>
      <Hero 
        cName="hero"
        heroImg={hotel4}
        title="ONE STOP TRAVEL SOLUTION"
        text="Make your Vacation plan best. travel the world with us."
        buttonText="Explore"
        url="/"
        btnClass="show"
      />
      <div className='slider-container'>
        <Slider {...settings} className='slider'>
          <div className='image-container'>
            <img src={hotel2} className='image' alt="Sample 1" />
            <div className="image-text">Unwind and rejuvenate in style, creating unforgettable memories in haven of tranquility.</div>
          </div>
          <div className='image-container'>
            <img src={hotel1} className='image' alt="Sample 2" />
            <div className="image-text">From the softest linens to the tranquil ambiance, your stay with us promises to be nothing short of extraordinary.</div>
          </div>
          <div className='image-container'>
            <img src={hotel3} className='image' alt="Sample 3" />
            <div className="image-text">Dive into a world of serenity and luxury at pristine poolside oasis, where crystal-clear waters beckon for a refreshing escape.</div>
          </div>
        </Slider>
      </div>
      <div className='content-container'>
        <div className='card'>
          <h2>Book Your Stay</h2>
          <p>Explore our range of luxurious hotels and resorts. Book your stay now and enjoy exclusive benefits!</p>
          <Link to="/hotel">
            <button className='btn'>Book Now</button>
          </Link>
        </div>
        <div className='card'>
          <h2>Travel Packages</h2>
          <p>Discover exciting travel packages curated just for you. Explore new destinations and create memorable experiences.</p>
          <Link to="/destination">
            <button className='btn'>Explore Packages</button>
          </Link>
        </div>
        <div className='card'>
          <h2>Contact Us</h2>
          <p>Have a question or need assistance? Contact our support team for personalized assistance.</p>
          <Link to="/contact">
            <button className='btn'>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

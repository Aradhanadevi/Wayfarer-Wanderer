import React, { useState } from 'react';
import './App.css';
import GuideCard from './GuideCard';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hotel from './Pages/Hotel';
import Transport from './Pages/Transport';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Destination from './Pages/Destination';
const cities = ['Mumbai', 'Delhi', 'Kolkata','Chennai', 'Bangalore', 'Hyderabad','Jaipur', 'Ahmedabad', 'Kolkata','Mumbai', 'Pune', 'Lucknow']; 

const mumbaiGuides = [
  { name: 'Ravi Patel', age: 30, specialisation: 'Cuisine', availableSlots: 8 },
  { name: 'Priya Sharma', age: 40, specialisation: 'History', availableSlots: 5 },
  { name: 'Aarav Singh', age: 35, specialisation: 'Art', availableSlots: 10 }
];

// Guides data for Delhi
const delhiGuides = [
  { name: 'Sunita Desai', age: 28, specialisation: 'Wildlife', availableSlots: 6 },
  { name: 'Rahul Mehta', age: 35, specialisation: 'Architecture', availableSlots: 4 },
  { name: 'Ananya Gupta', age: 32, specialisation: 'Culture', availableSlots: 7 }
];

// Guides data for Kolkata
const kolkataGuides = [
  { name: 'Vikram Singhania', age: 38, specialisation: 'Adventure', availableSlots: 3 },
  { name: 'Deepika Reddy', age: 31, specialisation: 'Spiritual', availableSlots: 9 },
  { name: 'Rajiv Kapoor', age: 45, specialisation: 'Photography', availableSlots: 2 }
];

const ChennaiGuides = [
  {
        name: "Arjun Menon",
        age: 33,
        specialisation: "Architecture",
        availableSlots: 6
      },
      {
        name: "Neha Rajput",
        age: 29,
        specialisation: "History",
        availableSlots: 8
      },
      {
        name: "Karthik Reddy",
        age: 34,
        specialisation: "Cuisine",
        availableSlots: 5
      }

];

const BangaloreGuides = [
  {
        name: "Sandeep Rao",
        age: 34,
        specialisation: "Art",
        availableSlots: 7
      },
      {
        name: "Shreya Reddy",
        age: 27,
        specialisation: "Adventure",
        availableSlots: 9
      },
      {
        name: "Rohan Sharma",
        age: 42,
        specialisation: "Culture",
        availableSlots: 4
      }


];

const HyderabadGuides = [
  {
        name: "Amit Kumar",
        age: 31,
        specialisation: "Heritage",
        availableSlots: 5
      },
      {
        name: "Neha Singh",
        age: 36,
        specialisation: "Food",
        availableSlots: 6
      },
      {
        name: "Varun Reddy",
        age: 29,
        specialisation: "Adventure",
        availableSlots: 8
      }
];

const JaipurGuides = [
  {
        name: "Rajat Sharma",
        age: 37,
        specialisation: "Architecture",
        availableSlots: 4
      },
      {
        name: "Pooja Verma",
        age: 33,
        specialisation: "Culture",
        availableSlots: 7
      },
      {
        name: "Vikas Singh",
        age: 28,
        specialisation: "History",
        availableSlots: 5
      }
];

const AhmedabadGuides = [
  {
        name: "Manoj Patel",
        age: 30,
        specialisation: "Art",
        availableSlots: 6
      },
      {
        name: "Sneha Shah",
        age: 35,
        specialisation: "Cuisine",
        availableSlots: 8
      },
      {
        name: "Rajesh Mehta",
        age: 32,
        specialisation: "History",
        availableSlots: 7
      }
];
const PuneGuides = [
        {
        name: "Prakash Deshmukh",
        age: 38,
        specialisation: "Adventure",
        availableSlots: 3
      },
      {
        name: "Kavita Joshi",
        age: 31,
        specialisation: "Spiritual",
        availableSlots: 9
      },
      {
        name: "Amit Kumar",
        age: 45,
        specialisation: "Photography",
        availableSlots: 2
      }
];
const LucknowGuides = [
 {
        name: "Suresh Tiwari",
        age: 36,
        specialisation: "History",
        availableSlots: 5
      },
      {
        name: "Anita Singh",
        age: 29,
        specialisation: "Cuisine",
        availableSlots: 7
      },
      {
        name: "Vikram Singh",
        age: 34,
        specialisation: "Art",
        availableSlots: 4
      }
];
const destinationData = [
  {
    city: 'Mumbai',
    destination: 'Gateway of India',
    description: 'An iconic monument overlooking the Arabian Sea, offering stunning views and rich history.',
    imageUrl: 'https://example.com/mumbai_image.jpg'
  },
  {
    city: 'Delhi',
    destination: 'Red Fort',
    description: 'A UNESCO World Heritage Site, known for its majestic red sandstone architecture and historical significance.',
    imageUrl: 'https://example.com/delhi_image.jpg'
  },
  {
    city: 'Kolkata',
    destination: 'Victoria Memorial',
    description: 'A grand marble building dedicated to Queen Victoria, featuring lush gardens and museum exhibitions.',
    imageUrl: 'https://example.com/kolkata_image.jpg'
  },
  {
    city: 'Chennai',
    destination: 'Marina Beach',
    description: 'One of the longest urban beaches in the world, offering scenic views and various recreational activities.',
    imageUrl: 'https://example.com/chennai_image.jpg'
  },
  {
    city: 'Bangalore',
    destination: 'Lalbagh Botanical Garden',
    description: 'A sprawling botanical garden known for its diverse plant species, serene lakes, and glasshouse.',
    imageUrl: 'https://example.com/bangalore_image.jpg'
  },
  {
    city: 'Hyderabad',
    destination: 'Charminar',
    description: 'An iconic mosque and monument, known for its distinctive architecture and bustling market nearby.',
    imageUrl: 'https://example.com/hyderabad_image.jpg'
  },
  {
    city: 'Jaipur',
    destination: 'Hawa Mahal',
    description: 'A stunning pink sandstone palace with intricately designed windows, offering panoramic views of the city.',
    imageUrl: 'https://example.com/jaipur_image.jpg'
  },
  {
    city: 'Ahmedabad',
    destination: 'Sabarmati Ashram',
    description: 'A tranquil ashram located on the banks of the Sabarmati River, associated with Mahatma Gandhi.',
    imageUrl: 'https://example.com/ahmedabad_image.jpg'
  },
  {
    city: 'Pune',
    destination: 'Shaniwar Wada',
    description: 'A historic fortification and palace complex, known for its architectural brilliance and cultural significance.',
    imageUrl: 'https://example.com/pune_image.jpg'
  },
  {
    city: 'Lucknow',
    destination: 'Bara Imambara',
    description: 'A grand Islamic complex featuring a labyrinth of passages, stunning architecture, and the Bhool Bhulaiya.',
    imageUrl: 'https://example.com/lucknow_image.jpg'
  }
];

function App() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedGuide, setSelectedGuide] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedGuide('');
  };

  const handleGuideSelect = (guide) => {
    setSelectedGuide(guide);
  };

  let cityGuides = [];
  if (selectedCity === 'Mumbai') {
    cityGuides = mumbaiGuides;
  } else if (selectedCity === 'Delhi') {
    cityGuides = delhiGuides;
  } else if (selectedCity === 'Kolkata') {
    cityGuides = kolkataGuides;
  }else if (selectedCity === 'Chennai') {
    cityGuides = ChennaiGuides;
  } else if (selectedCity === 'Bangalore') {
    cityGuides = BangaloreGuides;
  }else if (selectedCity === 'Hyderabad') {
    cityGuides = HyderabadGuides;
  } else if (selectedCity === 'Jaipur') {
    cityGuides = JaipurGuides;
  }else if (selectedCity === 'Ahmedabad') {
    cityGuides = AhmedabadGuides;
  } else if (selectedCity === 'Pune') {
    cityGuides = PuneGuides;
  }else if (selectedCity === 'Lucknow') {
    cityGuides = LucknowGuides;
  }

  return (
    <>
    <div className="App">
      <h1>Travel Guide Booking</h1>
      <div className="destination-cards">
      {destinationData.map((data, index) => (
        <div key={index} className="destination-card highlighted-outline">
          <img src={data.imageUrl} alt={data.destination} />
          <div className="destination-info">
            <h3>{data.destination}</h3>
            <p>{data.description}</p>
            <p>City: {data.city}</p>
          </div>
        </div>
      ))}
    </div>
      <div>
        <label htmlFor="citySelect">Select a City:</label>
        <select id="citySelect" value={selectedCity} onChange={handleCityChange}>
          <option value="">Select</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      {selectedCity && (
        <div>
          <h2>Available Guides in {selectedCity}:</h2>
          <div className="guide-container">
            {cityGuides.map(guide => (
              <div key={guide.name} className="guide-box">
                <GuideCard
                  guide={guide}
                  onSelect={handleGuideSelect}
                  isSelected={selectedGuide === guide}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
     <div>
     <Router>
       <Routes>
       <Route path="/" element={<><Navbar/><Home /></>} />
       <Route path="/about" element={<><Navbar/><About /></>} />
       <Route path="/contact" element={<><Navbar/><Contact /></>} />
       <Route path="/destination" element={<><Navbar/>< Destination/></>} />
       <Route path="/transport" element={<><Navbar/><Transport /></>} />
       <Route path="/hotel" element={<><Navbar/><Hotel /></>} />
       </Routes>
     </Router>
   </div>
   </>
  );
  
}

export default App;

import React, { useState } from 'react';
import '../components/Hotel.css'
import hotel9 from '../Assets/hotel9.jpg'
import hotel10 from '../Assets/hotel10.jpg'
import hotel11 from '../Assets/hotel11.jpg'
import hotel12 from '../Assets/hotel12.jpg'
import hotel13 from '../Assets/hotel13.jpg'
import hotel14 from '../Assets/hotel14.jpg'
import hotel15 from '../Assets/hotel15.jpg'
import hotel16 from '../Assets/hotel16.jpg'
import hotel17 from '../Assets/hotel17.jpg'
import hotel18 from '../Assets/hotel18.jpg'

const hotelsData = [
      {
        "hotel_name": "Royal Palace Hotel",
        "description": "Luxurious hotel offering premium accommodation with stunning views of the city.",
        "available_rooms": 50,
        "location": "Mumbai, Maharashtra",
        "price_per_night": "$150",
        "amenities": ["Swimming pool", "Spa", "Fitness center", "Restaurant", "Free Wi-Fi"],
        "contact_info": {
          "phone": "+91-XXX-XXXXXXX",
          "email": "info@royalpalacehotel.com",
          "website": "www.royalpalacehotel.com",
          "url":"https://cf.bstatic.com/xdata/images/hotel/max1280x900/25002109.jpg?k=5afe65628803a3571072954bcbac84427f6fab895858105f8a6586d2d2f37d83&o=&hp=1"
        }
      },
      {
        "hotel_name": "Taj Mahal Palace",
        "description": "Iconic hotel offering a blend of rich history and modern luxury near the Gateway of India.",
        "available_rooms": 30,
        "location": "Mumbai, Maharashtra",
        "price_per_night": "$250",
        "amenities": ["Swimming pool", "Spa", "Fitness center", "Restaurant", "Bar", "Concierge services"],
        "contact_info": {
          "phone": "+91-XXX-XXXXXXX",
          "email": "info@tajmahalpalace.com",
          "website": "www.tajmahalpalace.com",
          "url": hotel10
        }
      },
      {
        "hotel_name": "Jungle Retreat Resort",
        "description": "Serenely located resort amidst lush greenery offering an escape into nature.",
        "available_rooms": 20,
        "location": "Jim Corbett National Park, Uttarakhand",
        "price_per_night": "$120",
        "amenities": ["Wildlife safari", "Swimming pool", "Spa", "Restaurant", "Bonfire nights"],
        "contact_info": {
          "phone": "+91-XXX-XXXXXXX",
          "email": "info@jungleretreat.com",
          "website": "www.jungleretreat.com",
          "url": hotel11
        }
      },
      {
        "hotel_name": "Ganges View Resort",
        "description": "Tranquil resort offering breathtaking views of the holy river Ganges.",
        "available_rooms": 15,
        "location": "Rishikesh, Uttarakhand",
        "price_per_night": "$100",
        "amenities": ["Yoga classes", "Meditation center", "Restaurant", "River rafting", "Cultural activities"],
        "contact_info": {
          "phone": "+91-XXX-XXXXXXX",
          "email": "info@gangesviewresort.com",
          "website": "www.gangesviewresort.com",
          "url": hotel12
        }
      },
      {
        "hotel_name": "Goa Beach Haven",
        "description": "Beachfront resort offering a perfect blend of sun, sand, and sea.",
        "available_rooms": 40,
        "location": "Goa",
        "price_per_night": "$180",
        "amenities": ["Private beach access", "Swimming pool", "Water sports", "Restaurant", "Nightclub"],
        "contact_info": {
          "phone": "+91-XXX-XXXXXXX",
          "email": "info@goabeachhaven.com",
          "website": "www.goabeachhaven.com",
          "url": hotel13
        }
      },
      {
        "hotel_name": "Himalayan Retreat",
        "description": "Mountain resort offering panoramic views of the Himalayas and serene surroundings.",
        "available_rooms": 25,
        "location": "Manali, Himachal Pradesh",
        "price_per_night": "$130",
        "amenities": ["Trekking expeditions", "Spa", "Restaurant", "Campfire nights", "Cultural shows"],
        "contact_info": {
          "phone": "+91-XXX-XXXXXXX",
          "email": "info@himalayanretreat.com",
          "website": "www.himalayanretreat.com",
          "url": hotel14
        }
      },
      {
        "hotel_name": "Udaipur Palace Hotel",
        "description": "Historic palace turned into a luxurious hotel offering regal hospitality.",
        "available_rooms": 35,
        "location": "Udaipur, Rajasthan",
        "price_per_night": "$200",
        "amenities": ["Swimming pool", "Spa", "Fine dining restaurant", "Cultural shows", "Boat rides"],
        "contact_info": {
          "phone": "+91-XXX-XXXXXXX",
          "email": "info@udaipurpalacehotel.com",
          "website": "www.udaipurpalacehotel.com",
          "url": hotel15
        }
      },
      {
        "hotel_name": "Kerala Backwater Retreat",
        "description": "Idyllic retreat nestled amidst the tranquil backwaters of Kerala.",
        "available_rooms": 18,
        "location": "Alleppey, Kerala",
        "price_per_night": "$160",
        "amenities": ["Houseboat stays", "Ayurvedic spa", "Cultural performances", "Backwater cruises", "Fishing"],
        "contact_info": {
          "phone": "+91-XXX-XXXXXXX",
          "email": "info@keralabackwaterretreat.com",
          "website": "www.keralabackwaterretreat.com",
          "url": hotel16
        }
      },
      {
        "hotel_name": "Jaipur Heritage Inn",
        "description": "Charming heritage hotel offering a glimpse into the rich cultural heritage of Jaipur.",
        "available_rooms": 22,
        "location": "Jaipur, Rajasthan",
        "price_per_night": "$170",
        "amenities": ["Rooftop restaurant", "Traditional music and dance performances", "City tours", "Sightseeing"],
        "contact_info": {
          "phone": "+91-XXX-XXXXXXX",
          "email": "info@jaipurheritageinn.com",
          "website": "www.jaipurheritageinn.com",
          "url": hotel17
        }
      },
      {
        "hotel_name": "Pune Business Tower Hotel",
        "description": "Contemporary hotel catering to the needs of business travelers with state-of-the-art amenities.",
        "available_rooms": 28,
        "location": "Pune, Maharashtra",
        "price_per_night": "$120",
        "amenities": ["Business center", "Meeting rooms", "Fitness center", "Restaurant", "High-speed internet"],
        "contact_info": {
          "phone": "+91-XXX-XXXXXXX",
          "email": "info@punebusinesstower.com",
          "website": "www.punebusinesstower.com",
          "url": hotel18
        }
      }
];

function Hotel() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  
  React.useEffect(() => {
    const results = hotelsData.filter(hotel =>
      hotel.hotel_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search hotels..."
          value={searchTerm}
          onChange={handleChange}
        />
        <i className="fas fa-search"></i>
      </div>
      <div className="hotel-list">
        {searchResults.map((hotel, index) => (
          <div key={index} className="hotel">
            <h2>{hotel.hotel_name}</h2>
            <p>{hotel.description}</p>
            <p>Location: {hotel.location}</p>
            <p>Price per night: {hotel.price_per_night}</p>
            <p>Contact: {hotel.contact_info.phone}</p>
            <p>Email: {hotel.contact_info.email}</p>
            <p>Website: {hotel.contact_info.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotel;

import React from 'react'
import Hero from '../components/Hero'
function Home() {
  return (
    <div>
        <Hero 
        cName="hero"
        heroImg="https://images.pexels.com/photos/5329530/pexels-photo-5329530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="ONE STOP TRAVEL SOLUTION"
        text="Make your Vacation plan best. travel the world wih us."
        buttonText="Explore"
        url="/"
        btnClass="show"
        />
       
    </div>
    
  )
}

export default Home

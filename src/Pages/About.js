import React from 'react'
import img0 from '../Assets/about.jpg'
import Hero from '../components/Hero'

import Homedata from '../components/Homedata';
function About() {
  return (
   <>
           <Hero 
        cName="hero-mid"
        heroImg={img0}
        title="About"
        />
         <Homedata/>
   </>
  )
}

export default About

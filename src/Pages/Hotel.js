import React from 'react'

function Hotel() {
  return (
    <div>
      <div className='HomeCard grid'>
        <div className='locationDiv'>
          <label htmlFor='location'>Location</label>
          <input type="text" placeholder='DreamDestination'/>
        </div>
        <div className='distDiv'>
          <label htmlFor='distance'>Location</label>
          <input type="text" placeholder='11/Meters'/>
        </div>
        <div className='PriceDiv'>
          <label htmlFor='price'>Location</label>
          <input type="text" placeholder='$140-$500'/>
        </div>
        <button className='btn'>Search</button>
        
       </div>
    </div>
  )
}

export default Hotel

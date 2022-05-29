import React from 'react'
import '../about.css';
//import Button from '@mui/material/Button';
import hero from '../images/camp.jpg'


function About() {
  return (
    <div className='container-about'>

      <div className="abt-left">
        <h1 className='abt-title'>About Us</h1>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tempore et aperiam nihil. Minima exercitationem omnis esse, facilis quasi quas a?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, itaque!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo reprehenderit pariatur non fugit natus fuga!</span>
      </div>

        <div className="abt-right">
          <img className="abt-hero" src={hero} alt="" />
        </div>
   
    </div>
    

    
  )
}

export default About ;
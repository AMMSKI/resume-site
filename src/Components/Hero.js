import React from "react";
import Am_logo from '../Images/AM-logo.png'

const Hero = () => {
  return(
    <div className='hero_container'>
      <div className='nav_bar'>
        <div>
          <img className='footer_icon' src={Am_logo} />
        </div>
        <div className="nav_inner">
          <a href='#projects'>Projects</a>
          <a href='#about'>About</a>
          <a href='#tech'>Tech</a>
        </div>
      </div>
      <div className='hero_header'>
        <h1>Alan Mamulski</h1>
        <h3>Web Developer</h3>
      </div>
    </div>
  )
}


export default Hero
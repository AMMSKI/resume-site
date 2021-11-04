import React from "react";
import Am_logo from '../Images/a_whiteTransparent.png'
import Menu from "./Menu";

const Hero = () => {
  return(
    <div className='hero_container'>
      <div className='nav_bar'>
        <div>
          <img className='footer_icon' src={Am_logo} />
        </div>
        <div className='hamburger_menu'>
          <Menu />
        </div>
        <div className="nav_inner">
          <a href='#projects'>Projects</a>
          <a href='https://github.com/AMMSKI' target='_blank'>GitHub</a>
          <a href='https://www.linkedin.com/in/alan-mamulski/' target='_blank'>LinkedIn</a>
          <a href='https://www.canva.com/design/DAEtxdDd0_w/2a-jMvSZtWEsNCbN80xxkg/view?utm_content=DAEtxdDd0_w&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton' target='_blank'>Resume</a>
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
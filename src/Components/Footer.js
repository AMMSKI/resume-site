import React from 'react'
import '../StyleSheets/App.css';
import { SiGithub, SiLinkedin } from 'react-icons/si'
import stary_background from '../Images/stary-back.jpeg'

const Footer = () => {
  return (
    <div className='footer_container'>
      <img alt='star-background' className='moblie_background' src={stary_background} />
      <div>
      <a href='https://www.linkedin.com/in/alan-mamulski/' target="_blank" rel="noreferrer">
        <SiLinkedin style={{color:'white', padding:'10px'}} size='2em'/>
      </a>
      <a href='https://github.com/AMMSKI' target="_blank" rel="noreferrer">
        <SiGithub style={{color:'white', padding:'10px'}} size='2em'/>
      </a>
      </div>
    <div>
      <p style={{color:'white'}}>&copy; 2021 AlanMamulski.com</p>
    </div>
    </div>
  )
}

export default Footer
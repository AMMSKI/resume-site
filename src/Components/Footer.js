import React from 'react'
import '../StyleSheets/App.css';
import linked from '../Images/linkedin_official.png'
import gitlogo from '../Images/GitHub-Mark-64px.png'


const Footer = () => {
  return (
    <div className='footer_container'>
      <div>
      <a href='https://www.linkedin.com/in/alan-mamulski/'>
        <img className='footer_icon' src={linked}/>
      </a>
      <a href='https://github.com/AMMSKI'>
        <img className='footer_icon' src={gitlogo}/>
      </a>
      </div>
    <div>
      <p>&copy; 2021 AlanMamulski.com</p>
    </div>
    </div>
  )
}

export default Footer
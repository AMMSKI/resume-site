import React from "react";
import react_image from '../Images/react-icon.jpeg'
import rails_image from '../Images/rails-logo.png'
import js_image from '../Images/new-js-logo.png'
import html_image from '../Images/html-logo.png'
import css_image from '../Images/css-logo.png'
import postgres_image from '../Images/postgresql-logo.png'
import ruby_logo from '../Images/new-ruby-logo.png'
import jest_image from '../Images/jest-logo.png'

const Tech = () => {
  return (
    <div id="tech" className='tech_container'>
      <div className='tech_inner'>
        <div className='tech_item'>
          <div className='tech_logo'>
          <img alt='Ruby' src={ruby_logo}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
            <img alt='jsLogo' src={js_image} />
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
          <img alt='html' src={html_image}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
          <img alt='css' src={css_image}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
            <img alt='react' src={react_image}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
          <img alt='rails' src={rails_image}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
          <img alt='postgresQL' src={postgres_image}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
          <img alt='jest' src={jest_image}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Tech
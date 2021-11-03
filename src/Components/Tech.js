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
          <img src={ruby_logo}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
            <img src={js_image} />
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
          <img src={html_image}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
          <img src={css_image}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
            <img src={react_image}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
          <img src={rails_image}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
          <img src={postgres_image}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
          <img src={jest_image}/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Tech
import React from "react";
import { IoLogoReact } from 'react-icons/io5'
import { DiRuby } from 'react-icons/di'
import { SiJavascript, SiHtml5, SiCss3, SiRubyonrails, SiPostgresql, SiJest } from 'react-icons/si'
import stary_background from '../Images/stary-back.jpeg'



const Tech = () => {
  return (
    <div id="tech" className='tech_container'>
      <img alt='star-background' className='moblie_background' src={stary_background} />
      <div className='tech_inner'>
        <div className='tech_item'>
          <div className='tech_logo'>
            <DiRuby style={{color:'white'}} size='5em'/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
            <SiJavascript style={{color:'white'}} size='5em' />
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
            <SiHtml5 style={{color:'white'}} size='5em' />
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
            <SiCss3 style={{color:'white'}} size='5em' />
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
            <IoLogoReact style={{color:'white'}} size='5em' />
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
            <SiRubyonrails style={{color:'white'}} size='5em' />
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
            <SiPostgresql style={{color:'white'}} size='5em' />
          </div>
          <div className='tech_description'>
          </div>
        </div>
        <div className='tech_item'>
          <div className='tech_logo'>
            <SiJest style={{color:'white'}} size='5em'/>
          </div>
          <div className='tech_description'>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Tech
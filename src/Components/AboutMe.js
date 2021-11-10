import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className='about_container'>
      <div className='about_inner'>
      <div className='about_header'>
        <h1>About Me</h1>
      </div>
      <div className='about_body'>
        <p> 
          I’m a passionate software developer who enjoys working in both the frontend and the backend. I took a big risk leaving my sales career but I couldn't be happier. Software gives me the opportunity to love what I do everyday. If I’m not coding I’m probably golfing or enjoying the outdoors with my wife and two beautiful daughters. 
        </p>
      </div>
        <a href='https://www.canva.com/design/DAEtxdDd0_w/2a-jMvSZtWEsNCbN80xxkg/view?utm_content=DAEtxdDd0_w&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton' target='_blank' rel="noreferrer">View Resume</a>
      </div>
    </div>
  )
}

export default AboutMe
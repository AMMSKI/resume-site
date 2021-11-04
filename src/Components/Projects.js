import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const Projects = () => {



  return(
    <div id="projects" className='project_container'>
      <div className='project_header'>
      <h1>Projects</h1>
      </div>
      <div className='project_inner'>
        <div className='project_info'>
        <div className='project_info_header'>
          <h2 style={{margin:'0'}}>Loyal Burger</h2>
          <p style={{margin:'0'}}>One loyalty app for all of your favorite restuarants </p>
          <a href='https://github.com/AMMSKI/loyalty_app' target='_blank' rel="noreferrer">View Code</a>
          <a href='https://loyalburger.herokuapp.com/' target="_blank" rel="noreferrer">See Live</a>
          <a id='video_link' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel="noreferrer">See Video</a>
          </div>
          <ul>
            <li>React SPA with react-router</li>
            <li>Ruby On Rails backend</li>
            <li>PostgresQL Database</li>
            <li>Login with different user permissions</li>
            <li>Earn loyalty points and cash them in</li>
          </ul>
        </div>
        <div className='video_container'>
          <YoutubeEmbed embedId={'dQw4w9WgXcQ'} />
        </div>
      </div>
      <div className='project_inner'>
        <div className='project_info'>
          <div className='project_info_header'>
          <h2 style={{margin:'0'}}>MYspace</h2>
          <p style={{margin:'0'}}>Starwars themed social app</p>
          <a href='https://github.com/AMMSKI/myspace_hm' target="_blank" rel="noreferrer">View Code</a>
          <a id='video_link' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel="noreferrer">See Video</a>
          </div>
          <ul>
            <li>SQL commands with PostgresQL</li>
            <li>Supports posts, comments and likes</li>
            <li>Find and follow friends to see their posts</li>
          </ul>
        </div>
        <div className='video_container'>
          <YoutubeEmbed embedId={'dQw4w9WgXcQ'} />
        </div>
      </div>
    </div>
  )
}

export default Projects
import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const Projects = () => {



  return(
    <div className='project_container'>
      <div className='project_inner'>
        <div className='project_info'>
          <h2>blah blah balh</h2><br/>
          <p>this project does this this and this </p>
          <ul>
            <li>this</li>
            <li>and this</li>
            <li>and this</li>
          </ul>
        </div>
        <div className='video_container'>
          <YoutubeEmbed embedId={'kdWov5fjQl0'} />
        </div>
      </div>
      <div className='project_inner'>
        <div>
          <YoutubeEmbed embedId={'kdWov5fjQl0'} />
        </div>
        <div className='project_info'>
          <h2>blah blah balh</h2><br/>
          <p>this project does this this and this </p>
          <ul>
            <li>this</li>
            <li>and this</li>
            <li>and this</li>
          </ul>
        </div>
      </div>
      <div className='project_inner'>
        <div className='project_info'>
          <h2>blah blah balh</h2><br/>
          <p>this project does this this and this </p>
          <ul>
            <li>this</li>
            <li>and this</li>
            <li>and this</li>
          </ul>
        </div>
        <div>
          <YoutubeEmbed embedId={'kdWov5fjQl0'} />
        </div>
      </div>
    </div>
  )
}

export default Projects
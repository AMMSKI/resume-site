import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";


const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)
  return(
    <div className='menu_container'>
      {showMenu ?
        <div>
          <Dropdown onClick={()=>setShowMenu(!showMenu)} className='dropdown_list'>
            <a href='#projects'>Projects</a>
            <a href='https://github.com/AMMSKI' target='_blank' rel="noreferrer">GitHub</a>
            <a href='https://www.linkedin.com/in/alan-mamulski/' target='_blank' rel="noreferrer">LinkedIn</a>
            <a href='https://www.canva.com/design/DAEtxdDd0_w/2a-jMvSZtWEsNCbN80xxkg/view?utm_content=DAEtxdDd0_w&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton' target='_blank' rel="noreferrer">Resume</a>
          </Dropdown>
        </div> :
        <div onClick={()=>setShowMenu(!showMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="white" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>

        }
        </div>
  )
}

export default Menu
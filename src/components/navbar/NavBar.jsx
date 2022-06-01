import React, { useState } from 'react'
import './nav-style.scss'
import ToolBar from './ToolBar'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function NavBar() {

  const [extendNav, setExtendNav] = useState(false)

  return (
    <header>
      <div className={extendNav ? 'nav-container nav-container--extend' : 'nav-container'}>
        <div className='upper-container'>
          <div className='nav-container__title-container'>
              <h4> Path Finding </h4>
          </div>
          <div className='burger-icon-container'>
            <GiHamburgerMenu size={22} onClick={() => setExtendNav(!extendNav)} />
          </div>
        </div>
          <ToolBar />
      </div>
    </header>
  )
}

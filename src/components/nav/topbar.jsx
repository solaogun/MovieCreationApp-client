import React from 'react'
import './topbar.scss'
import { Link } from 'react-router-dom'
import SideMenu from '../sideMenu.jsx/sideMenu'

function Topbar() {
  return (
    <nav className="navbar">

      <a className="navbar-brand">Saidat Movie App</a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className='navbarList'>
        <div className='navItem'>
          <Link to='/'>
            <a className='navLink'>Home
              <span>Home</span>
            </a>
          </Link>
        </div>

        <div className='navItem'>
          <Link to='/about'>
            <a className='navLink'>About </a>
          </Link>
        </div>

        <div className='navItem'>
          <Link to='/services'>
            <a className='navLink'>Services</a>
          </Link>
        </div>

        <div className='navItem'>
          <Link to='/contact'>
            <a className='navLink'>Contact</a>
          </Link>
        </div>
        {/* <SideMenu /> */}
      </div>

    </nav>

  )
}

export default Topbar

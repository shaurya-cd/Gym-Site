import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <a href='#home'>Fight <span>Club</span></a>
      </div>

      <div className='links'>
        <a href='#home'>Home</a>
        <a href='#services'>Services</a>
        <a href='#about'>About Us</a>
        <a href='#plans'>Pricing</a>
        <a href='#review'>Review</a>
        <button className="btn1" >Join Us</button>
      </div>

    </nav>
  )
}

export default Navbar
import React from 'react'
import logo from '../assets/logo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

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
        <button className="btn1" ><a href="#join">Join Us</a></button>
      </div>

    </nav>
  )
}

export default Navbar
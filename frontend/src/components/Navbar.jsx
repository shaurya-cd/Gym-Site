import React, { useRef } from 'react'
import logo from '../assets/logo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Navbar() {

  const nav = useRef()

  useGSAP(()=>{
    gsap.from(nav.current.children,{
      opacity:0,
      y:-20,
      duration:1,
      ease:'power3.easeIn',
      stagger: 0.3
    })
  })

  const plinkRef = useRef()

  const menuClink = () => {
    if (plinkRef.current) {
      plinkRef.current.classList.toggle('show');

      gsap.from(plinkRef.current, {
        x: 10,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  const closeClick = () => {
    if (plinkRef.current) {
      plinkRef.current.classList.toggle('show');
    }
  };

  return (
    <nav ref={nav}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <a href='#home'><span>Fight</span> Club</a>
      </div>

      <div className='links'>
        <a href='#home'>Home</a>
        <a href='#services'>Services</a>
        <a href='#about'>About Us</a>
        <a href='#plans'>Pricing</a>
        <a href='#review'>Trainers</a>
        <button className="btn1"><a href="#join">Join Us</a></button>
      </div>

      <div class="menu" onClick={menuClink}><i class="ri-menu-2-line"></i></div>

      <div class="ptlinks" ref={plinkRef}>
        <div class="close" onClick={closeClick}><i class="ri-close-large-fill"></i></div>
        <a href='#home'>Home</a>
        <a href='#services'>Services</a>
        <a href='#about'>About Us</a>
        <a href='#plans'>Pricing</a>
        <a href='#review'>Trainers</a>
        <button className="btn1" ><a href="#join">Join Us</a></button>
      </div>

    </nav>
  )
}

export default Navbar
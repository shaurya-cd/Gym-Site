import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function About() {

  const aboutRef = useRef()

    useGSAP(()=>{
    gsap.from(aboutRef.current,{
      opacity:0,
      duration:1,
      x:30,
      ease:'power3.easeIn',
      stagger: 0.2,
      scrollTrigger:{
        trigger:aboutRef.current,
        start: 'top 80%',       
        end: 'top -10%',
        scrub:true,
      }
    })
  })

  return (
    <>
      <div className='about' id='about'>
        <div className="part1" ref={aboutRef}>
          <p>Founded in 2005, FIGHT CLUB was built with a simple mission: to make fitness accessible, empowering, and enjoyable for everyone — from beginners to pros. Our team of certified trainers, nutrition experts, and wellness coaches work together to guide you at every step of your journey.</p>
          <h1>We build a healthier, stronger community — one rep, one step, one member at a time.</h1>
        </div>
      </div>    
    </>
  )
}

export default About
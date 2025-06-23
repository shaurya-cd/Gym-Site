import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Title() {

  const tag = useRef()

  useGSAP(()=>{
    gsap.from(tag.current.children,{
      opacity:0,
      duration:1,
      y:30,
      ease:'power3.easeIn',
      stagger: 0.2
    })
  })

  return (
    <>
    <div className="title-wrapper">
      <div className="tags" ref={tag}>
        <h1>Train Like Hell</h1>
        <span>Look Like Heaven</span>
        <p>Each rep is progress. Each drop of sweat, a step toward the version of you that you deserve.</p>

        <button><a href="#join" className='title-button'>Join Us</a></button>
      </div>
    </div>
    </>
  )
}

export default Title
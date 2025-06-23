import React from 'react'
import { useEffect,useState,useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Plans() {

  const planRef = useRef()

  useGSAP(()=>{
    gsap.from(planRef.current.children,{
      opacity:0,
      duration:1,
      y:30,
      ease:'power3.easeIn',
      stagger: 0.2,
      scrollTrigger:{
        trigger:planRef.current,
        start: 'top 10%',         // when top of element hits 80% of viewport
        end: 'bottom 20%'
      }
    })
  })

  return (
    <>
      <div className='plans' id="plans">
        <h1 className='plan-title'>clubpass</h1>
        <div className="l-plan-container" ref={planRef}>
          <div className="l-plan-cards l-basic">
              <h1>clubpass</h1>
              <h1 className='plan1'>Basic</h1>
          </div>
          <div className="l-plan-cards l-standard">
              <h1>clubpass</h1>
              <h1 className='plan2'>Standard</h1>
          </div>
          <div className="l-plan-cards l-premium">
              <h1>clubpass</h1>
              <h1 className='plan3'>Premium</h1>
          </div>
        <div className="basic">
          <ol>
            <li>Access to gym floor & cardio equipment</li>
            <li>Locker room & shower access</li>
            <li>1 free fitness assessment</li>
          </ol>
        </div>
        <div className="standard">
          <ol>
            <li>Includes everything in Basic</li>
            <li>Access to group fitness classes such as Zumba, Yoga, HIIT</li>
            <li>2 personal training sessions/month</li>
          </ol>
        </div>
        <div className="premium">
          <ol>
            <li>All features of Standard Plan</li>
            <li>Unlimited group classes</li>
            <li>Weekly personal training</li>
            <li>Diet & nutrition consultation</li>
            <li>Steam/sauna access</li>
          </ol>
        </div>
      </div>
      </div>
    </>
  )
}

export default Plans
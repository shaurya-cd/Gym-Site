import React from 'react'
import { useEffect,useState,useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import basic from '../assets/basic.jpg'
import standard from '../assets/standard.jpg'
import premium from '../assets/premium.jpg'

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
        start: 'top 50%',         // when top of element hits 80% of viewport
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
            <img src={basic} alt="" />
              <h1>clubpass</h1>
              <h1 className='plan1'>Basic</h1>

              <div className="basic">
                <ol>
                  <li>Access to gym floor & cardio equipment</li>
                  <li>Locker room & shower access</li>
                  <li>1 free fitness assessment</li>
                </ol>
              </div>
          </div>


          <div className="l-plan-cards l-standard">
            <img src={standard} alt="" />
              <h1>clubpass</h1>
              <h1 className='plan2'>Standard</h1>

              <div className="standard">
                <ol>
                  <li>Includes everything in Basic</li>
                  <li>Access to group fitness classes such as Zumba, Yoga, HIIT</li>
                  <li>2 personal training sessions/month</li>
                </ol>
              </div>
          </div>


          <div className="l-plan-cards l-premium">
            <img src={premium} alt="" />
              <h1>clubpass</h1>
              <h1 className='plan3'>Premium</h1>
              
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
      </div>
    </>
  )
}

export default Plans
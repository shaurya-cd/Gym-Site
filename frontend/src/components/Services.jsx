import React from 'react'
import ServiceCard from './Service-card'
import axios from 'axios'
import { useEffect,useState,useRef } from 'react'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'
import service4 from '../assets/service4.jpg'
import service5 from '../assets/service5.png'
import service6 from '../assets/service6.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Services() {

  const serviceRef = useRef()  

  useGSAP(()=>{
    gsap.from(serviceRef.current.children,{
      opacity:0,
      x:-40,
      duration:1,
      ease:'power3.easeIn',
      stagger: 0.3,
      scrollTrigger:{
        trigger:serviceRef.current,
        start: 'top 20%',
        end: 'top 50%',
        scrub:1,
      }
    })
  })


  const services = [
        {
            id:1,
            imageURL: service1,
            title:"Personal Training",
            description:"Work one-on-one with certified fitness trainers who create custom workout plans tailored to your goals, fitness level, and lifestyle"
        },
        {
            id:2,
            imageURL: service2,
            title:"Group Fitness Classes",
            description:"From Zumba to HIIT and Yoga, our dynamic group classes offer fun, motivation, and variety"
        },
        {
            id:3,
            imageURL: service3,
            title:"Cardio & Strength Equipment",
            description:"Access top-tier machines and free weights in our fully equipped training zones, designed for all levels of cardio and resistance workouts"
        },
        {
            id:4,
            imageURL: service4,
            title:"Nutrition Guidance",
            description:"Receive personalized diet plans and meal advice from our in-house nutrition experts to fuel your fitness journey and boost results"
        },
        {
            id:5,
            imageURL: service5,
            title:"Fitness Assessment",
            description:"Track your progress with regular body composition analysis and fitness evaluations to keep your goals measurable and achievable"
        },
        {
            id:6,
            imageURL: service6,
            title:"Locker Room & Amenities",
            description:"Enjoy clean, secure locker rooms with showers, towel service, and relaxation areas including steam or sauna"
        }
    ]

  return (
    <>
        <div className='service' id='services'>
          <h1 className='service-title'><span>Our</span> Services</h1>
          <div className="service-content" ref={serviceRef}>
            {
              services.map((service,index)=>(
                <ServiceCard 
                key={service.id} 
                imageURL={service.imageURL} 
                title={service.title} 
                description={service.description}/>
              ))
            }
          </div>
        </div>
    </>
  )
}

export default Services
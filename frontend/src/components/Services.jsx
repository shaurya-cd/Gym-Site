import React from 'react'
import ServiceCard from './Service-card'
import axios from 'axios'
import { useEffect,useState } from 'react'

function Services() {

  const services = [
        {
            id:1,
            imageURL: "../src/assets/service1.jpg",
            title:"Personal Training",
            description:"Work one-on-one with certified fitness trainers who create custom workout plans tailored to your goals, fitness level, and lifestyle."
        },
        {
            id:2,
            imageURL:"../src/assets/service2.jpg",
            title:"Group Fitness Classes",
            description:"From Zumba to HIIT and Yoga, our dynamic group classes offer fun, motivation, and variety."
        },
        {
            id:3,
            imageURL:"../src/assets/service3.jpg",
            title:"Cardio & Strength Equipment",
            description:"Access top-tier machines and free weights in our fully equipped training zones, designed for all levels of cardio and resistance workouts."
        },
        {
            id:4,
            imageURL:"../src/assets/service4.jpg",
            title:"Nutrition Guidance",
            description:"Receive personalized diet plans and meal advice from our in-house nutrition experts to fuel your fitness journey and boost results."
        },
        {
            id:5,
            imageURL:"../src/assets/service5.png",
            title:"Fitness Assessment",
            description:"Track your progress with regular body composition analysis and fitness evaluations to keep your goals measurable and achievable."
        },
        {
            id:6,
            imageURL:"../src/assets/service6.png",
            title:"Locker Room & Amenities",
            description:"Enjoy clean, secure locker rooms with showers, towel service, and relaxation areas including steam or sauna (where available)."
        }
    ]

  return (
    <>
        <div className='service' id='services'>
          <h1><span>Our</span> Services</h1>
          <div className="service-content">
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
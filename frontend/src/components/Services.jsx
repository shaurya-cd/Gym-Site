import React from 'react'
import ServiceCard from './Service-card'
import axios from 'axios'
import { useEffect,useState } from 'react'

function Services() {

  const [services,Setservice] = useState([])

  useEffect(()=>{
    axios.get("/api/services")
    .then((response)=>{
      Setservice(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[]);

  console.log(services)

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
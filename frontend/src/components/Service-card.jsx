import React from 'react'
import standard from '../assets/standard.jpg'

function ServiceCard({
  imageURL,
  title,
  description}) {

  return (
    <div className='service-card' style={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',}}>
      <div className="service-overlay">
      <h1>{title}</h1>
      <p>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
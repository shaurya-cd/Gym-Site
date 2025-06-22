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
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard
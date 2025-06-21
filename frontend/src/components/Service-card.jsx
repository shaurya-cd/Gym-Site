import React from 'react'

function ServiceCard({
  imageURL,
  title,
  description}) {
  return (
    <div className='service-card'>
      <img src={imageURL} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard
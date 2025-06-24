import React, { useState } from 'react'
import trainer1 from '../assets/trainerM1.jpeg'
import trainer2 from '../assets/trainerF1.jpeg'
import trainer3 from '../assets/trainerM2.jpeg'
import trainer4 from '../assets/trainerF2.jpeg'


function Reviews() {

  const trainers = [
    {
      id:1,
      imageURL: trainer1,
      name: 'Jake Thompson',
      Experience: '8 years',
      Specialties: 'Muscle building, powerlifting, HIIT',
      Certifications: 'NASM Certified Personal Trainer, CSCS (Certified Strength and Conditioning Specialist)'
    },
    {
      id:1,
      name: 'Emily Carter',
      imageURL: trainer2,
      Experience: '6 years',
      Specialties: 'Hatha Yoga, mobility, breathwork',
      Certifications: 'Yoga Alliance RYT 500, ACE Mind-Body Specialist'
    },
    {
      id:1,
      name: 'Brandon Lee',
      imageURL: trainer3,
      Experience: '9 years',
      Specialties: 'Functional fitness, fat loss, endurance',
      Certifications: 'ISSA Certified Personal Trainer, TRX Suspension Training'
    },
    {
      id:1,
      name: 'Jessica Moore',
      imageURL: trainer4,
      Experience: '7 years',
      Specialties:'Boxing, agility training, weight loss',
      Certifications: 'AFAA Group Fitness Instructor, Certified Boxing Coach (USA Boxing)'
    }
  ]

  const [selected, setSelected] = useState(1)
  const tlength = trainers.length

  return (
    <>
      <div className='reviews' id='review'>
        <div className="review-left">
          <h1><span>OUR</span> TRAINERS</h1>
          <h2>Name- {trainers[selected].name}</h2>
          <h2>Experience- {trainers[selected].Experience}</h2>
          <h2>Specialties- {trainers[selected].Specialties}</h2>
          <h2>Certifications- {trainers[selected].Certifications}</h2>
        </div>

        <div className="review-right">
          
          <div></div>
          <div></div>
          <img src={trainers[selected].imageURL} alt="" />
          <div className="controls">
          <i class="ri-arrow-left-line" onClick={()=>{
            selected===0
            ?setSelected(tlength-1)
            :setSelected((prev)=>prev-1)
            }}></i>
          <i class="ri-arrow-right-line" onClick={()=>{
            selected===tlength-1
            ?setSelected(0)
            :setSelected((prev)=>prev+1)
            }}></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
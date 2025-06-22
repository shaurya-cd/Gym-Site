import React from 'react'

function PlanCard() {
  return (
    <div className='plancard-container'>
        <div className="s-plan-cards">
            <h1>clubpass</h1>
            <h1 className='plan1'>Basic</h1>
            <p>Essential access for beginners to kickstart their fitness journey</p>
        </div>
        <div className="s-plan-cards">
            <h1>clubpass</h1>
            <h1 className='plan2'>Standard</h1>
            <p>Balanced workouts and group classes for consistent progress</p>
        </div>
        <div className="s-plan-cards">
            <h1>clubpass</h1>
            <h1 className='plan3'>Premium</h1>
            <p>All-inclusive training, classes, and wellness — for serious results</p>
        </div>
    </div>
  )
}

export default PlanCard
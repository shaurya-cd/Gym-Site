import React from 'react'

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="footer-title">
          <p style={{fontSize:'1rem'}}>@Fight Club</p>
          <p style={{fontSize:'0.7rem'}}>#Stronger Every Day</p>
        </div>
        <div className="address">
          <h1>📍 Address</h1>
          Fight Club Gym,
          2nd Floor, Apex Plaza,
          Downtown Street, Springfield, USA - 123456
        </div>
        <div className="call">
          <h1>📞 Call Us</h1>
          +1 (555) 321-9876
        </div>
        <div className="email">
          <h1>📧 Email</h1>
          support@fightclubgym.com
        </div>
        <div className="workinghr">
          <h1>🕒 Training Hours</h1>
          <p>Mon - Fri: 6:00 AM – 10:00 PM</p>
          <p>Sat - Sun: 7:00 AM – 8:00 PM</p>
        </div>
      </div>
      <div className="follow">
          <h1>🔗 Follow Us</h1>
          <p>Facebook | Instagram | Twitter | YouTube</p>
        </div>
      <div className="foot">
          © 2025 FightClub Gym. All rights reserved.
        </div>
    </>
  )
}

export default Footer
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Join() {

    const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5411m4c', 'template_4d5xlpe', form.current, {
        publicKey: 'dbgKlLQkzEsYEEMtB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='join' id='join'>
        <div className="join-left">
            <hr />
          <div>
            <span className='jl-span'>READY TO </span>
            <span>LEVEL UP</span>
          </div>
          <div>
            <span>YOUR BODY </span>
            <span className='jl-span'>WITH US?</span>
          </div>
        </div>
        <div className="join-right">
          <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name='user_email' placeholder='Enter Your Email Address'/>
            <button className='btn-join'> JOIN US</button>
          </form>
        </div>
    </div>
  )
}

export default Join
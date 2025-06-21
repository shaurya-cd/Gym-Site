import React from 'react'
import Navbar from './components/Navbar'
import Title from './components/Title'
import Services from './components/Services'
import Blend from './components/Blend'
import About from './components/About'
import Plans from './components/Plans'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Video from './components/Video'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {

  return (
    <>
      <Navbar />
      <div className='hero'>
        <div className="overlay"></div>
        <Video />
        <div className='content'>
          <Title />
          <Blend />
        </div>
        <Plans />
        <Services />
        <About />
        <Reviews />
        <Footer />
      </div>
    </>
  )
}

export default App
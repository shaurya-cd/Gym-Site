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
import PlanCard from './components/Plan_card'
import Join from './components/Join'

function App() {

  return (
    <>
      <div className='hero'>
        <Video />
        <Navbar />
        <div className='content'>
          <Title />
        </div>
        <PlanCard />
        <Services />
        <About />
        <Plans />
        <Reviews />
        <Join />
        <Footer />
      </div>
    </>
  )
}

export default App
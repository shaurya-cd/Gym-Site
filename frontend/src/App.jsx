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

function App() {

  return (
    <div>
      <div className='hero'>
        <div className="overlay"></div>
        <Video />
        <div className='content'>
          <Navbar />
          <Title />
          <Blend />
        </div>
        <Plans />
        <Services />
        <About />
        <Reviews />
        <Footer />
      </div>
    </div>
  )
}

export default App
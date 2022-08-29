import React from 'react'
import { About } from './About'
import { Welcome } from './Welcome'

const Hero = () => {
  return (
    <div className='hero'>
      <Welcome />
      <About />
    </div>
  )
}

export default Hero
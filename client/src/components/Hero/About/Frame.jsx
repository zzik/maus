import React from 'react'
import image from './nature.png'

const Frame = () => {
  return (
    <div className='hero-frame' >
      <img className='hero-image' src={image} alt="Hot air baloons" />
    </div>
  )
}

export default Frame
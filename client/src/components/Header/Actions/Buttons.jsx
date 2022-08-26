import React from 'react'
import Button from './Button'


const Buttons = () => {
  return (
    <div className='buttons'>
        <Button text="Brochure Request" icon="fa-solid fa-book-open" />
        <Button text="Wishlist" icon="fa-regular fa-heart" />
        <Button text="Search" icon="fa-solid fa-magnifying-glass" />
        <Button text="01858 415128" icon="fa-solid fa-phone-flip" />
    </div>

  )
}

export default Buttons
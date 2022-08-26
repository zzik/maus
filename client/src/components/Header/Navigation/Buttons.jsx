import React from 'react'
import Button from './Button'

const Buttons = () => {
  return (
    <div className='nav-buttons'>
        <Button text="HOME" url="#" target='_self' />
        <Button text="HELP" url="#" target='_self' />
        <Button text="SIGN IN" url="#" target='_self' />
        <Button text="REGISTRATION" url="#" target='_self' />
    </div>
  )
}

export default Buttons
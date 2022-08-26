import React from 'react'
import Actions from './Actions/Container'
import Navigation from './Navigation/Container'

const Header = () => {
  return (
    <section className='header'>
      <Actions />
      <hr/>
      <Navigation />
    </section>
  )
}

export default Header
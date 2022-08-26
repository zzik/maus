import React from 'react'

const Logo = (props) => {
  return (
    <div className='site-logo'>
      <img src={props.source} alt='Company logo' />
    </div>
  )
}

export default Logo
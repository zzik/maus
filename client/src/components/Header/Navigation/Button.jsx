import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.url} target={props.target}>
        {props.text}
    </button>
  )
}

export default Button
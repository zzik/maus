import React from 'react'

const Button = (props) => {
    return (
    <>
        <button>
        <i className={props.icon}></i>
        {props.text}
        </button>
    </>
  )
}

export default Button
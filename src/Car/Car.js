// import React, { Component } from 'react'

import React from 'react'
// import Radium from 'radium'
import './Button.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

  const inputClasses = ['input']

  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }
  (props.name.length > 5 && inputClasses.push('bold'))

  const style = {
    border: '1px solid #ccc',
    margin: '10px',
    display: 'inline-block',
    padding: '10px',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
    borderRadius: '5px'
  }

  return (
    <div className={'Car'} style={style}>
      <h3>Car name: {props.name}</h3>
      <h3>Car year: {props.year}</h3>
      <input type="text"
             placeholder={props.name}
             onChange={props.onChangeName}
             className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

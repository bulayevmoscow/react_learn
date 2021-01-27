// import React, { Component } from 'react'

import React from 'react'

// eslint-disable-next-line
export default (props) => {
  // console.log(props)
  return (
    <div style={{
      border: '1px solid #ccc',
      margin: '10px',
      display: 'inline-block',
      padding: '10px'
    }}>
      <h3>Car name: {props.name}</h3>
      <h3>Car year: {props.year}</h3>
      <input type="text" placeholder={props.name} onChange={props.onChangeName}/>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

// import React, { Component } from 'react'

import React from 'react'
import styles from './Button.module.css'

// eslint-disable-next-line
export default (props) => {
  // console.log(props)
  // let info = n
  return (
    <div className={styles.Car}>
      <h3>Car name: {props.name}</h3>
      <h3>Car year: {props.year}</h3>
      <input type="text" placeholder={props.name} onChange={props.onChangeName}/>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

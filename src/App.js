import React, { Component } from 'react'
import './App.css'
import classes from './somestyles.module.sass'
// import Car from './Car/Car'

class App extends Component {

  render () {
    console.log(classes)
    return (
      <h1 className={classes.classes}>hi</h1>
    )
  }
}

export default App

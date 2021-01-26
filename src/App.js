// import './App.css';
import React, { Component } from 'react'
import Car from './Car/Car'

class App extends Component {
  render(){
    const divStyle = {
      'textAlign' : 'center'
    }

    return (
      <div style={Object.assign(divStyle, {'color' : 'red'})}>
        <h1>hello world</h1>
        <Car name={'Ford'} year={201812}/>
        <Car name={'Audi'} year={2015}/>
      </div>
    )
  }

}

export default App;

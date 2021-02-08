import React from  'react'

export default class Counter extends React.Component {
  state = {
    counter: 0
  }
  //SYNC
  // addCounter = () => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   })
  // }
  addCounter = () => {
    this.setState((state)=>{
      return {
        counter : state.counter + 1
      }
    })
  }
  removeCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  render () {
    return (
      <React.Fragment>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.addCounter}>+</button>
        <button onClick={this.removeCounter}>-</button>
      </React.Fragment>
    )
  }
}
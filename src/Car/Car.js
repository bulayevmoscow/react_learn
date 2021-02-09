// eslint-disable-next-line
import React from 'react'

import CarStyles from './Car.css'
class Car extends React.Component {

  render () {
    // console.log(Css);
    return (
      <div>
        <h1 className={CarStyles.Car}>Error</h1>
        <h3>Сar name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

export default Car
// import './App.css';
import React, { Component } from 'react'
import Car from './Car/Car'

class App extends Component {
  state = {
    cars: [
      { name: 'Ford', year: '2012' },
      { name: 'Audi', year: '2011' },
      { name: 'BMW', year: '2015' }
    ],
    pageTitle: 'React Components',
    showCars: true
  }
  showCars = () => {
    console.log('Changed')
    this.setState({
      showCars: !this.state.showCars
    })
  }
  ChangeTitle = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }
  ChangeName = (name, index) => {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({ cars })
  }

  deleteHandler = (index) => {
    const cars = this.state.cars.concat();
    cars.splice(index, 1)

    this.setState({
      cars: cars
    })
  }

  render () {
    console.log(this, 1)
    let a = () => console.log(this, 2)
    a()
    function b () {
      console.log(this,3)
    }
    b()
    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.showCars}>Toggle Cars</button>
        <h1>{this.state.showCars.toString()}</h1>

        {this.state.showCars ?
          this.state.cars.map((car, index) => {
            return (
              <div key={index}>
                <Car
                  name={car.name}
                  year={car.year}
                  onDelete={this.deleteHandler}
                  onChangeName={event => this.ChangeName(event.target.value, index)}
                />
              </div>
            )
          }) : null}

      </div>
    )
  }

}

export default App

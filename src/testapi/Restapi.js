import React from 'react'

export default class Restapi extends React.Component {
  constructor () {
    super()
    this.state = {
      hi: 'hello world!',
      data: null,
      json: null,
      loadData: false,
    }
    if (this.state.loadData === true){
      this.posts = new Promise((resolve, reject) => {
          fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
              if (res.ok)
                resolve(res.json())
              else
                reject('Error download posts')
            })
        }
      )
      this.users = new Promise((resolve, reject) => {
          fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
              if (res.ok)
                resolve(res.json())
              else
                reject('Error download users')
            })
        }
      )
    }
  }

  // alertHi () {
  //   console.log('get data!')
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       if (!res.ok)
  //         throw 'Error Connect'
  //       console.log(res)
  //       return res.json()
  //     })
  //     .then(json => {
  //       this.RenderAnwser(json)
  //       console.log(json)
  //       this.setState({
  //           hi: 'Data was loaded',
  //           json
  //         },
  //       )
  //     }).catch(x => {
  //     this.setState({
  //       hi: x
  //     })
  //   })
  //   // this.posts()
  // }

  // RenderAnwser (props) {
  //   if (!this.state.json)
  //     return null
  //   return this.state.json.map((item, key) => {
  //     return (
  //       <div key={key} style={{ width: '400px', border: '1px solid red', margin: '10px' }}>
  //         <h1>Created by {item.userId}</h1>
  //         <h4>{item.title}</h4>
  //         <p>{item.body}</p>
  //       </div>
  //     )
  //   })
  // }



  render () {
    if (this.state.loadData){
      Promise.allSettled([this.posts, this.users])
        .then((x) => console.log(x, 1))
        .catch(err => console.log(err))
    }



    return (
      <div style={{
        border: '1px solid green'
      }}>
        <div>
          {/*{this.state.json && this.RenderAnwser()}*/}
        </div>
        {/*<button onClick={this.alertHi.bind(this)}>Change</button>*/}
        <h1> {this.state.hi}</h1>

        <div>
          <h1>Another try</h1>
          <button onClick={()=>{this.setState({loadData: !this.state.loadData})}}>Load Data</button>
          <button>Show users</button>
          <button>Show posts</button>
        </div>

      </div>
    )
  }
}
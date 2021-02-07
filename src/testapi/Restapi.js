import React from 'react'

export default class Restapi extends React.Component {
  constructor () {
    super()
  }

  state = {
    data: null,
    userPosts: null
  }

  async Texts () {
    let a = 0
    await setTimeout(() => {
      a = 50
      console.log(a)
    }, 1000)
    return ('hi')
  }

  render () {
    const url = 'https://jsonplaceholder.typicode.com/todos'

    const delay = ms => {
      return new Promise(r => setTimeout(() => r(), ms))
    }

    async function fetchTodo () {
      if (this.state.data !== null) {
        this.setState({ data: null })
        return null
      }
      console.log('Start Fetch')
      return await delay(1)
        .then(() => fetch(url))
        .then((res) => res.json())
        .then(res => this.setState({ data: res }))
    }

    async function fetchTodoUser (userId) {
      return await fetch(url)
        .then(res => res.json())
        .then(json => {
          let userPosts = json.filter(item => item.userId === userId)
          this.setState({ userPosts })
          console.log(this.state)
        })
    }

    let dataRender, dataUserRender = null

    if (this.state.data != null) {
      dataRender = this.state.data.map((item, key) => {
        return (
          <div key={key} style={{ border: '1px solid green', margin: '5px' }}>
            <p>Created by {item.userId}</p>
            <h4>
              {item.title}
              <br/>
              <small>
                {item.id}
              </small>
            </h4>
            <button onClick={fetchTodoUser.bind(this, item.userId)}>All posts this user</button>
          </div>
        )
      })
    }

    if (this.state.userPosts != null) {
      dataUserRender = this.state.userPosts.map((item, key) => {
        return (
          <div key={key} style={{ border: '1px solid red', margin: '5px' }}>
            <h4>
              {item.title}
              <br/>
              <small>
                №{item.id}
              </small>
            </h4>
            <p>This posts was created by {item.userId}</p>
          </div>
        )
      })
    }

    return (
      <div>
        <pre>{JSON.stringify(this.state.userPosts)}</pre>
        <h1>Here was async</h1>
        <button onClick={fetchTodo.bind(this)}>Get Data</button>
        <div style={{display: 'flex'}}>
          <div style={{ width: '30%' }}>{dataRender}</div>
          <div style={{ width: '30%' }}>{dataUserRender}</div>
        </div>


      </div>

    )
  }
}
import React, { Component } from 'react'
import { Route, Link} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
  }

  render() {
    const hello = (
      <React.Fragment>
        <h1>Hello World!</h1>
        <p>Welcome to Rails-React Full Stack Template</p>
      </React.Fragment>
    )
    return (
      <React.Fragment>
        {hello}
      </React.Fragment>

    )
  }
}

export default App

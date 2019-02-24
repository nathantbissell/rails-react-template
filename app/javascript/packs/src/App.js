import React, { Component } from 'react'
import { Route, Link} from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSignIn = (e) => {
    e.preventDefault()
    const dataObj = {
      "credentials":{
        email: this.state.email,
        password: this.state.password
      }
    }
    axios.post('http://localhost:3000/sign_in',dataObj)
    .then((res) => {
      console.log(res.data)
    })
    .catch(console.error)
  }

  render() {
    const { email, password } = this.state
    const hello = (
      <React.Fragment>
        <h1>Hello World!</h1>
        <p>Welcome to Rails-React Full Stack Template</p>
      </React.Fragment>
    )

    const sampleSignIn = (
      <React.Fragment>
        <form onSubmit={this.onSignIn}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <input
            type="submit"
            value="submit"
          />
        </form>
      </React.Fragment>
    )

    return (
      <React.Fragment>
        {hello}
        {sampleSignIn}
      </React.Fragment>

    )
  }
}

export default App

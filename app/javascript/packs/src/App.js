import React, { Component } from 'react'
import { Route, Link} from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      user: null,
      loggedIn: false
    }
  }

  setUser = (loggedInUser) => {
    this.setState({user: loggedInUser,loggedIn:true})
  }


  clearUser = () => {
    this.setState({user: null,loggedIn:false})
  }

  componentDidMount(){
    axios.post('http://localhost:3000/check_user')
    .then((res) => {
      this.setUser(res.data)

    })
    .then(() => {
      console.log(this.state)
    })
  }

  render() {
    const { email, password } = this.state
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

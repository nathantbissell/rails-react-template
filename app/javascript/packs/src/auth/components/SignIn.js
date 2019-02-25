import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../auth_api'
import messages from '../messages'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      userId: '',
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  signIn = event => {
    event.preventDefault()
    const dataObj = {
      "credentials":{
        email: this.state.email,
        password: this.state.password
      }
    }
    const { email, password } = this.state
    const { history, setUser, flash } = this.props
    signIn(dataObj)
      .then(res => setUser(res.data))
      .then(() => flash(messages.signInSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signInError, 'flash-error'))

  }

  render () {
    const { email, password } = this.state

    return (
      <form className='auth-form' onSubmit={this.signIn}>
        <h3>Sign In</h3>
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    )
  }
}

export default withRouter(SignIn)

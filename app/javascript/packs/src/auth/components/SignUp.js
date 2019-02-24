import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import { handleErrors, signUp, signIn } from '../auth_api'
// import messages from '../messages'
import apiUrl from '../../api_config'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  signUp = event => {
    event.preventDefault()
    const { email, password, password_confirmation} = this.state
    const { setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.user))
  }

  render () {
    const { email, password, password_confirmation} = this.state

    return (
      <form className='auth-form' onSubmit={this.signUp}>
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
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
        <label htmlFor="password_confirmation">Confirm Password</label>
        <input
          required
          name="password_confirmation"
          value={password_confirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <button type="submit" className="some-btn">Sign Up</button>
      </form>
    )
  }
}

export default withRouter(SignUp)

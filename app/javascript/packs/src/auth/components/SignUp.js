import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import { handleErrors, signUp, signIn } from '../auth_api'
// import messages from '../messages'
// import apiUrl from '../../api_config'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      userType: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  signUp = event => {
    event.preventDefault()
    const { email, password, passwordConfirmation, firstName,lastName,userType} = this.state
    const { flash, history, setUser } = this.props

    signUp(this.state)
      .then(handleErrors)
      .then(() => signIn(this.state))
      .then(handleErrors)
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signUpSuccess, 'flash-success'))
      .then(() => history.push('/create-profile'))
      .catch(() => flash(messages.signUpFailure, 'flash-error'))
  }

  render () {
    const { email, password, passwordConfirmation, firstName, lastName, userType} = this.state

    return (
      <form className='auth-form' onSubmit={this.signUp}>
        <h3>Register - It&#39;s Free!</h3>
        <div className= "name-forms">
          <label htmlFor="firstName">First Name</label>
          <input
            required
            name="firstName"
            value={firstName}
            type="text"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            required
            name="lastName"
            value={lastName}
            type="text"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
        </div>

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
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <label htmlFor="userTyper">Which describes you best?</label>
        <select required name="userType" value={userType} type="text" onChange={this.handleChange}>
          <option value="">Which describes you best?</option>
          <option value="job_seeker">Job Seeker</option>
          <option value="employer">Employer</option>
        </select>

        <button type="submit" className="some-btn">Sign Up</button>
      </form>
    )
  }
}

export default withRouter(SignUp)

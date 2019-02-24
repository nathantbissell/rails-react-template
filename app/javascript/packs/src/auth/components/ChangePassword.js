import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import { handleErrors, changePassword } from '../auth_api'
// import messages from '../messages'
import apiUrl from '../../api_config'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      old: '',
      new: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  changePassword = event => {
    event.preventDefault()

    const { old, new } = this.state
    const { flash, history, user } = this.props

    changePassword(this.state, user)
      .then(handleErrors)
      .then(() => flash(messages.changePasswordSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.changePasswordFailure, 'flash-error'))
  }

  render () {
    const { old, new } = this.state

    return (
      <form className='auth-form' onSubmit={this.changePassword}>
        <h3>Change Password</h3>

        <label htmlFor="oldpw">Old Password</label>
        <input
          required
          name="old"
          value={old}
          type="password"
          placeholder="Old Password"
          onChange={this.handleChange}
        />
        <label htmlFor="newPassword">New Password</label>
        <input
          required
          name="new"
          value={new}
          type="password"
          placeholder="New Password"
          onChange={this.handleChange}
        />
        <button type="submit">Change Password</button>
      </form>
    )
  }
}

export default withRouter(ChangePassword)

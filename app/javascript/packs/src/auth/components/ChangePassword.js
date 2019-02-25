import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../auth_api'
import messages from '../messages'
import apiUrl from '../../api_config'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      old: '',
      new_pw: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  changePassword = event => {
    event.preventDefault()

    const { old, new_pw } = this.state
    const { history, user, flash } = this.props
    const dataObj = {
      'passwords': {
        'old': old,
        'new': new_pw
      }
    }
    changePassword(dataObj)
      .then(() => flash(messages.changePwSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.changePwError, 'flash-error'))
  }

  render () {
    const { old, new_pw } = this.state

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
          name="new_pw"
          value={new_pw}
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

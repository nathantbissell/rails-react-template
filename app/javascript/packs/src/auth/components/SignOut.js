import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../auth_api'
import messages from '../messages'

class SignOut extends Component {
  componentDidMount () {
    const {history, clearUser, flash} = this.props

    signOut()
      .finally(() => flash(messages.signOutSuccess, 'flash-success'))
      .finally(() => clearUser())
      .catch(() => flash(messages.signOutError, 'flash-error'))
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)

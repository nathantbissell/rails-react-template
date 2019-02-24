import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../auth_api'
// import messages from '../messages'

class SignOut extends Component {
  componentDidMount () {
    const {clearUser} = this.props

    signOut()
      .finally(() => clearUser())
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)

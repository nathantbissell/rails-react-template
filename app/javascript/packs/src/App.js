import React, { Component } from 'react'
import { Route, Link} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';

import apiUrl from './api_config.js'
import { checkUser } from './auth/auth_api'
import Header from './header/Header.js'
import AuthenticatedRoute from './auth/components/AuthenticatedRoute.js'
import SignIn from './auth/components/SignIn.js'
import SignUp from './auth/components/SignUp.js'
import SignOut from './auth/components/SignOut.js'
import ChangePassword from './auth/components/ChangePassword.js'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: null,
      loggedIn: Cookies.get('a_t') ? true : false,
      flashMessage: '',
      messageType: null
    }
  }

  setUser = (loggedInUser) => {
    this.setState({user: loggedInUser,loggedIn:true})
  }

  clearUser = () => {
    this.setState({user: null,loggedIn:false})
  }

  displayFlash = (message, type) => {
    this.setState({ flashMessage: message, messageType: type})

    setTimeout(() => this.setState({flashMessage: null }),2000)
  }

  componentDidMount () {
    axios.get(`${apiUrl}/check_user`)
      .then((res) => {this.setUser(res.user)})
      .catch(() => {this.clearUser})
  }
  render() {

    const { user, loggedIn, flashMessage, messageType } = this.state
    const mainHtml = (
      <React.Fragment>
        <Header user={user} loggedIn={loggedIn}/>
        {flashMessage && <div className={messageType}>{flashMessage}</div>}
        <main className='container'>
          <Route path='/sign-up' render={() => (
              <SignUp setUser={this.setUser} flash={this.displayFlash} />
            )}
          />
          <Route path='/sign-in' render={() => (
              <SignIn setUser={this.setUser} flash={this.displayFlash} />
            )}
          />
          <AuthenticatedRoute path='/sign-out' loggedIn={loggedIn} render={() => (
              <SignOut clearUser={this.clearUser} flash={this.displayFlash} />
            )}
          />
          <AuthenticatedRoute path='/change-password' loggedIn={loggedIn} render={() => (
              <ChangePassword user={user} flash={this.displayFlash} />
            )}
          />
        </main>
      </React.Fragment>
    )


    return (
      <React.Fragment>
        {mainHtml}
      </React.Fragment>

    )
  }
}

export default App

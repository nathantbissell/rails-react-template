import React, { Component } from 'react'
import { Route, Link} from 'react-router-dom'
import axios from 'axios'

import Header from './header/Header.js'
import SignIn from './auth/components/SignIn.js'
import SignUp from './auth/components/SignUp.js'
import SignOut from './auth/components/SignOut.js'

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

  }

  render() {
    const { user, loggedIn } = this.state
    const mainHtml = (
      <React.Fragment>
        <Header user={user} loggedIn={loggedIn}/>

        <main className='container'>
          <Route path='/sign-up' render={() => (
              <SignUp setUser={this.setUser} />
            )}
          />
          <Route path='/sign-in' render={() => (
              <SignIn setUser={this.setUser} />
            )}
          />
          <Route path='/sign-out' render={() => (
              <SignOut clearUser={this.clearUser} />
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

import React from 'react'
import { Link } from 'react-router-dom'

const loggedInHeader = (
  <React.Fragment>
    <Link to="/home">Home</Link>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const loggedOutHeader = (
  <React.Fragment>
    <Link to="/sign-in">Sign In</Link>
    <Link to="/sign-up">Register</Link>
  </React.Fragment>
)



const Header = ({ user, loggedIn }) => (
  <header className="main-header">
    <h1 className="header-title">Rail React Template</h1>
    <nav>
      { loggedIn ? loggedInHeader : loggedOutHeader }
    </nav>
  </header>
)

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/home">Home</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)



const Header = ({ user }) => (
  <header className="main-header">
    <h1>CoolJobs</h1>
    <nav>
      { user && <span>Welcome, {user.first_name}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
    </nav>
  </header>
)

export default Header

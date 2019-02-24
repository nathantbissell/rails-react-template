import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import { handleErrors, createProfileApiJS, createProfileApiE } from '../auth_api'
// import messages from '../messages'
// import apiUrl from '../../api_config'

class CreateProfile extends Component {
  constructor (props) {
    super(props)
    const { user_type } = this.props.user
    if(user_type === 'job_seeker'){
      this.state = {
        userId: this.props.user.id.$oid,
        userToken: this.props.user.token,
        aboutMe: '',
        skills: [],
        jobTitle: '',
        location: '',
        resumeLink: '',
        githubLink: '',
        linkedinLink: '',
        codewarsUsername: '',
        codewarsApiKey: '',
        bootcamp: ''
      }
    }else {
      this.state = {
        userToken: this.props.user.token,
        userId: this.props.user.id.$oid,
        companyName: '',
        companyDescription: '',
        companyLink: ''
      }
    }
  }


  handleChange = event => {
    if(event.target.value !== '') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  onCreateProfile = event => {

    event.preventDefault()
    const { flash, history, user } = this.props
    //write fetch api call request to create profile
    if(user.user_type === 'job_seeker'){
      createProfileApiJS(this.state)
        .then(res => res.json())
        .then(() => flash(messages.createProfileSuccess, 'flash-success'))
        .then(() => history.push('/home'))
        .catch(() => flash(messages.signInFailure, 'flash-error'))
    }else{
      createProfileApiE(this.state)
        .then(res => res.json())
        .then(() => flash(messages.createProfileSuccessE, 'flash-success'))
        .then(() => history.push('/home'))
        .catch(() => flash(messages.signInFailure, 'flash-error'))
    }

  }

  render () {
    const { userId, aboutMe, skills, jobTitle, location, githubLink, linkedinLink,codewarsUsername, codewarsApiKey, bootcamp, companyName, companyDescription, companyLink } = this.state
    const { user_type } = this.props.user

    const jobSeekerProfile = (
      <React.Fragment>

        <form onSubmit={this.onCreateProfile}>
          <div className="edit-box">
            <textarea
              required
              type="text"
              name="aboutMe"
              value={aboutMe}
              placeholder="Write a short description about yourself"
              onChange={this.handleChange}
            ></textarea>
            <input
              type="text"
              name="skills"
              value={skills}
              placeholder="List some of your skills"
              onChange={this.handleChange}
            />
            <input
              required
              type="text"
              name="location"
              value={location}
              placeholder="Location"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="githubLink"
              value={githubLink}
              placeholder="Your github link"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="linkedinLink"
              value={linkedinLink}
              placeholder="Your LinkedIn Link"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="codewarsUsername"
              value={codewarsUsername}
              placeholder="Enter Your CodeWars.com Username"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="codewarsApiKey"
              value={codewarsApiKey}
              placeholder="Enter your CodeWars.com API Key"
              onChange={this.handleChange}
            />
            <select required name="jobTitle" value={jobTitle} type="text" onChange={this.handleChange}>
              <option value="">What is your job role?</option>
              <option value="Full-stack Developer">Full-stack Developer</option>
              <option value="Front-end Developer">Front-end Developer</option>
              <option value="Back-end Developer">Back-end Developer</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </select>

            <select required name="bootcamp" value={bootcamp} type="text" onChange={this.handleChange}>
              <option value="">What bootcamp did you attend?</option>
              <option value="General Assembly">General Assembly</option>
              <option value="App Academy">App Academy</option>
              <option value="Launch Academy">Launch Academy</option>
              <option value="Hack Reactor">Hack Reactor</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </select>

            <input type="submit" value="Create Profile" />


          </div>

        </form>
      </React.Fragment>
    )


    const employerProfile = (
      <React.Fragment>
        <form onSubmit={this.onCreateProfile}>
          <div className="edit-box">
            <input
              required
              type="text"
              name="companyName"
              value={companyName}
              placeholder="Company Name"
              onChange={this.handleChange}
            />
            <textarea
              type="text"
              name="companyDescription"
              value={companyDescription}
              placeholder="Write a description about your company"
              onChange={this.handleChange}
            ></textarea>
            <input
              required
              type="text"
              name="companyLink"
              value={companyLink}
              placeholder="Enter a link to your company website"
              onChange={this.handleChange}
            />
            <input type="submit" value="Create Profile" />
          </div>

        </form>
      </React.Fragment>
    )
    return (
      <div className="form-div">
        {user_type === 'job_seeker' ? jobSeekerProfile : employerProfile}
      </div>
    )
  }
}

export default withRouter(CreateProfile)

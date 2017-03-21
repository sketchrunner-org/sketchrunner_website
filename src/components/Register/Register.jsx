import React, { Component } from 'react'
import firebase from 'firebase'
import { auth, firebaseAuth } from '../../utils/auth'
import ProgressButton from 'react-progress-button';
import ReactGA from 'react-ga';

import './register.scss'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}



export default class Register extends Component {
  constructor(props) {
		super(props);
		this.state = {
			buttonState: '',
      authed: false,
      loading: true,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }



  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({buttonState: 'loading'})
    setTimeout(() => {
      ReactGA.event({
        category: 'User signups',
        action: 'Signup from Register button'
      })
      auth(this.email.value, this.pw.value) // 👈 TODO: related to Register.jsx & auth.js issues // Ideally we would like to catch any error happening here
      this.setState({buttonState: ''})
    }, 1000)
  }
  render () {
    return (
      <div className="signup-wrapper">
        <h1>Register for the beta</h1>
        <form>
          <div className="form-group">
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          <ProgressButton
            durationSuccess={2000}
            onClick={this.handleSubmit}
            state={this.state.buttonState}>
            Submit
          </ProgressButton>
        </form>
      </div>
    )
  }
}

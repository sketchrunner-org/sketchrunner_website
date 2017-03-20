import React, { Component } from 'react'
import firebase from 'firebase'
import { auth } from '../../utils/auth'
import './register.scss'

export default class Register extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
  }
  render () {
    return (
      <div className="signup-wrapper">
        <h1>Register for the beta</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

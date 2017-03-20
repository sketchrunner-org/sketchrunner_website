import React, { PropTypes } from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import './navigation.scss';
import { RunnerLogo } from 'components';
import Headroom from 'react-headroom'
import Modal from '../Modal/Modal';
import ReactGA from 'react-ga';


export default class Navigation extends Component {

  logEventGA() {
    ReactGA.event({
      category: 'Plugin downloads',
      action: 'Download from Navigation link'
    });
  }

  render() {
    return(
      <Headroom disableInlineStyles>
      <div className="header">
          <Link className="logo" to="/">
            <RunnerLogo />
          </Link>
          <div className="navigation">
            {/* <Link activeClassName="active" to="/">Home</Link> */}
            {/* <Link activeClassName="active" to="/releases">Releases</Link> */}
            <Link onClick={this.logEventGA} to=" ">Download</Link>
            <Link activeClassName="active" to="/developers">Developers</Link>
            <Link activeClassName="active" to="/help">FAQ</Link>
            <Link activeClassName="active" to="/about">About</Link>
          </div>
      </div>
      </Headroom>
    )
  }
}

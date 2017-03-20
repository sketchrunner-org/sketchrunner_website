import React, { PropTypes } from 'react';
import { Component } from 'react';
import ProgressButton from 'react-progress-button';
import ReactGA from 'react-ga';
import Modal from '../Modal/Modal';
import './hero.scss';


export default class Hero extends Component {

  constructor(props) {
		super(props);
		this.state = {
			buttonState: ''
		};
		this.handleClick = this.handleClick.bind(this);
	}



  handleClick () {
    ReactGA.event({
      category: 'Plugin downloads',
      action: 'Download from Hero button'
    });
    this.setState({buttonState: 'loading'})
    setTimeout(() => {
      this.setState({buttonState: 'success'})
    }, 2000)
  }

  render() {
    return(
    <div className="hero">
      <div className="hero-content">
        <h1>This is a headline h1</h1>
        <p>This is the hero text lorem ipsum dolor sit amet</p>
        <div className="flex-row">
          <ProgressButton
            durationSuccess={2000}
            onClick={this.handleClick}
            state={this.state.buttonState}>
            Download
          </ProgressButton>
          <Modal>
            <div>Modal</div>
            <div className='modal-body'>
              <h1>Modal headline 1</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
  }
}

import React, { Component, Children, PropTypes } from 'react';
import './modal.scss';

export default class Modal extends Component {
	constructor (props) {
    super(props)

    this.state = {
      modalOpened: false
    }

    this.modalToggle = this.modalToggle.bind(this)
  }

  modalToggle () {
    this.setState({ modalOpened: !this.state.modalOpened })
  }

  render () {
    const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
    const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
    return (
      <div>
        <button className='btn btn-primary' onClick={this.modalToggle}>
					{this.props.children[0]}
        </button>

        <div className={containerClass}>
          {this.props.children[1]}
        </div>

        <div className={coverClass} onClick={this.modalToggle}></div>
      </div>
    )
  }
}

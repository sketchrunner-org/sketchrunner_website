import React, { PropTypes } from 'react';
import { Component } from 'react';
import { css, injectGlobal, styled } from 'styled-components';
import './accordion.scss';
// const {
//   media: { min, max, xs, sm, md, lg, xl, xxl },
//   rem, em
// } = styleUtils

export default class Accordion extends Component {
  componentDidMount() {
    const titles = this.dl.querySelectorAll('dt')

    Array.from(titles).forEach(title => {
      const content = title.nextElementSibling

      title.addEventListener('click', () => {
        const opened = title.classList.toggle('is-opened')

        content.style.height = content.scrollHeight + 'px'

        if (opened) {
          const onTransitionEnd = () => {
            if (title.classList.contains('is-opened')) {
              content.style.height = 'auto'
            }
            content.removeEventListener('transitionend', onTransitionEnd)
          }
          content.addEventListener('transitionend', onTransitionEnd)
        } else {
          requestAnimationFrame(() => content.style.height = 0)
        }
      })
    })
  }

  render() {
    return (
      <div className="accordion">
      <dl ref={dl => this.dl = dl} className={this.props.className}>
        {this.props.children}
      </dl>
      </div>
    )
  }
}

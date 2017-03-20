import React, { PropTypes } from 'react';
import { Component } from 'react';
import { css, injectGlobal, styled } from 'styled-components';
import './verticalTabs.scss';
// const {
//   media: { min, max, xs, sm, md, lg, xl, xxl },
//   rem, em
// } = styleUtils

export default class VerticalTabs extends Component {
  componentDidMount() {
    const titles = this.dl.querySelectorAll('dt')
    const firstOpened = titles[0].classList.toggle('is-opened')

    Array.from(titles).forEach(title => {
      const content = title.nextElementSibling
      title.addEventListener('click', () => {
        const titles = this.dl.querySelectorAll('dt')
        // console.log(titles, this);
        for (var i = 0; i < titles.length; i++) {
          titles[i].classList.remove('is-opened')
        }
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
      <div className="documentation">
      <dl ref={dl => this.dl = dl} className={this.props.className}>
        {this.props.children}
      </dl>
      </div>
    )
  }
}

import React, { PropTypes, Component } from 'react';
import ReactPlayer from 'react-player'
import './homeSection.scss';

// export default function homeSection({ children }) {
export default class homeSection extends Component {
	constructor (props) {
    super(props)
    this.state = {
    }
    this.checkContentType = this.checkContentType.bind(this)
  }

  checkContentType() {
  const content = this.props.children;
  for (var i = 0; i < content.length; i++) {
    if (content[2].type === 'img') {
      return (
        <div className="homeSection-hasImage">
          { content[0] }
          { content[1] }
          <div className="image-wrapper">
            { content[2] }
          </div>
        </div>
      )
    } else if (content[2].type === 'video' || 'iframe' ) {
      return (
        <div className="homeSection-hasVideo">
          { content[0] }
          { content[1] }
          <div className="video-wrapper">
            <ReactPlayer url={ content[2].props.src } playing={false} />
          </div>
        </div>
       )
    }
  }
  }

  render() {
  return (
    <div className="homeSection">
      <div className="homeSection-content">
      { this.checkContentType() }
      </div>
    </div>
  );
  }
  // return (
  //   <div className="homeSection">
  //     <div className="homeSection-content">
  //     {children}
  //     </div>
  //   </div>
  // );
}


// Old simple stateless function component
//
// export default function homeSection({ children }) {
  // return (
  //   <div className="homeSection">
  //     <div className="homeSection-content">
  //     {children}
  //     </div>
  //   </div>
  // );
// }

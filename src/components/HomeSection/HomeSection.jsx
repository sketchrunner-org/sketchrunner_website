import React, { PropTypes } from 'react';
import './homeSection.scss';

export default function homeSection({ children }) {
  return (
    <div className="homeSection">
      <div className="homeSection-content">
      {children}
      </div>
    </div>
  );
}

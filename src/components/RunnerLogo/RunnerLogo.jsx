import React from 'react';
import image from './runner-logo.svg';
import './runner-logo.scss';

export default function RunnerLogo() {
  return (
    <div
      className="runner-logo"
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}

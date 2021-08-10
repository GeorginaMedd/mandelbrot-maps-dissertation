import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './progressBar.css';
import './progressBar.css';

// https://codepen.io/DZuz14/pen/oqeMpY?editors=0010

function ProgressBar(props) {
  // style={{ width: `${props.percentage}%` }}

  let widthVal = 70 * (props.percentage / 100);
  return (
    <div className="progress-bar-div">
      <div className="progress-bar" />
      <div
        className="progress-bar-inner"
        style={{ width: `${70 * props.percentage}vw` }}
      ></div>
    </div>
  );
}

export default ProgressBar;

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

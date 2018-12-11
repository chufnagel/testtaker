import React, { Component } from "react";
import PropTypes from "prop-types";

const TimerInput = ({ action, minutes }) => (
  <div className="timer-container" style={{ marginLeft: 100 }}>
    <h3>Set a time limit</h3>
    <input
      min="0"
      minutes={minutes}
      name="minutes"
      type="number"
      onChange={action}
      value={minutes}
      required
    />
  </div>
);

TimerInput.propTypes = {
  // minutes: PropTypes.number,
  minutes: PropTypes.node,
  action: PropTypes.func.isRequired,
};

TimerInput.defaultProps = {
  minutes: 20,
};

export default TimerInput;

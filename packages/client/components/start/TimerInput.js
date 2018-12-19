import React, { memo } from "react";
import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-solid-svg-icons";

const TimerInput = memo(({ action, minutes }) => (
  <div className="time-cop">
    <Input
      icon={<FontAwesomeIcon icon="clock" />}
      iconPosition="left"
      placeholder="Minutes"
      min="0"
      minutes={minutes}
      name="minutes"
      // type="number"
      onChange={action}
      value={minutes}
      required
    />
  </div>
));

TimerInput.propTypes = {
  // minutes: PropTypes.number,
  minutes: PropTypes.node,
  action: PropTypes.func.isRequired,
};

TimerInput.defaultProps = {
  minutes: 20,
};

export default TimerInput;

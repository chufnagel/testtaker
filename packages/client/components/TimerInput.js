import PropTypes from "prop-types";

const TimerInput = ({ handleSettings, minutes }) => (
  <div className="timer-container" style={{ marginLeft: 100 }}>
    <h3>Set a time limit</h3>
    <input
      name="timer"
      value={minutes}
      type="number"
      minutes={minutes}
      onChange={handleSettings}
      required
    />
  </div>
);

// TimerInput.propTypes = {
//   minutes: PropTypes.string,
//   handleSettings: PropTypes.func.isRequired,
// };

TimerInput.defaultProps = {
  minutes: 20,
};

export default TimerInput;

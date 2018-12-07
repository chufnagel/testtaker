import PropTypes from "prop-types";

const StartButton = ({ action }) => (
  <div style={{ marginLeft: 130 }}>
    <button onClick={action} type="button">
      Start
    </button>
  </div>
);

StartButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default StartButton;

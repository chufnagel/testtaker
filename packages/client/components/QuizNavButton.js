import PropTypes from "prop-types";

const QuizNavButton = ({ disabled, direction }) => (
  <button
    disabled={disabled}
    className={`quizNavButton ${direction}`}
    direction={direction}
    type="button"
  >
    {direction}
  </button>
);

QuizNavButton.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.string,
};

QuizNavButton.defaultProps = {
  disabled: true,
  direction: "Next",
};

export default QuizNavButton;

import PropTypes from "prop-types";

const Question = ({ id, text }) => <h5 className="question">{`${id} ${text}`}</h5>;

Question.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Question;

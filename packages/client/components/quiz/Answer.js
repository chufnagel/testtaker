import React, { memo } from "react";
import PropTypes from "prop-types";

const Answer = memo(({ questionId, choice, text, onSelect, key, checked }) => (
  <div
    className="radio-row"
    key={key}
    onClick={() => onSelect(questionId, choice)}
    onKeyPress={() => onSelect(questionId, choice)}
    aria-checked={checked}
    checked={checked}
    role="radio"
    tabIndex="0"
  >
    <input key={`${questionId}:${choice}`} name="answer" value={text} type="radio" />
    {`${choice} - `} {`${text}`}
    <br />
  </div>
));

Answer.propTypes = {
  questionId: PropTypes.number,
  choice: PropTypes.string,
  text: PropTypes.string,
  key: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

Answer.defaultProps = {
  questionId: 1,
  choice: "A",
  key: "A",
  text: "Lorem ipsum",
  checked: false,
};

export default Answer;

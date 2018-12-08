import PropTypes from "prop-types";

const Answer = ({ questionId, choice, text, onSelect }) => (
  <div
    className="radio-row"
    onClick={() => onSelect(questionId, choice)}
    onKeyPress={() => onSelect(questionId, choice)}
    aria-checked="false"
    role="radio"
    tabIndex="0"
  >
    <input key={`${questionId}:${choice}`} name="answer" value={text} type="radio" />
    {`${choice} - `} {`${text}`}
    <br />
  </div>
);




// const Answer = ({ id, text, onSelect }) => (
//     <input type="radio" onSelect={onSelect} id={id} value={text}> {text}<br /> </input>
// );

export default Answer;

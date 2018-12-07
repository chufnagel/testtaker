import PropTypes from "prop-types";

const Answer = ({ id, text, onSelect }) => (
  <div
    className="radio-row"
    onClick={() => onSelect(id)}
    onKeyPress={() => onSelect(id)}
    aria-checked="false"
    role="radio"
    tabIndex="0"
  >
    <input key={id} name="answer" value={text} type="radio" />
    {`${id} - `} {`${text}`}
    <br />
  </div>
);




// const Answer = ({ id, text, onSelect }) => (
//     <input type="radio" onSelect={onSelect} id={id} value={text}> {text}<br /> </input>
// );

export default Answer;

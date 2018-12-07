import PropTypes from "prop-types";

const Dropdown = ({ choices }) => (
  <div className="dropdown-container">
    <select name="dropdown" className="dropdown">
      {choices.map((choice, idx) => (
        <option key={choice} value={choice}>
          {choice}
        </option>
      ))}
    </select>
  </div>
);

Dropdown.propTypes = {
  choices: PropTypes.array,
};

Dropdown.defaultProps = {
  choices: ["Latin"],
};

export default Dropdown;

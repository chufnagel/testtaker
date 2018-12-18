import React, { memo } from "react";
import PropTypes from "prop-types";

const Dropdown = memo(({ action, choices, name }) => (
  <div className="dropdown-container">
    <select onChange={action} name={name} className="dropdown">
      {choices.map((choice, idx) => (
        <option key={choice} value={choice}>
          {choice}
        </option>
      ))}
    </select>
  </div>
));

Dropdown.propTypes = {
  action: PropTypes.func.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
};

Dropdown.defaultProps = {
  choices: ["Latin"],
  name: "Lorem Ipsum",
};

export default Dropdown;

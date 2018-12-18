import React, { memo } from "react";
import PropTypes from "prop-types";

const Question = memo(({ id, text }) => <h5 className="question">{`${id}. ${text}`}</h5>);

Question.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
};

Question.defaultProps = {
  id: 1,
  text: "Lorem ipsum",
};

export default Question;

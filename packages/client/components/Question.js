import React, { memo } from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";

const Question = memo(({ id, text }) => (
  <Container textAlign="left">
    <p>{`${id}. ${text}`}</p>
  </Container>
));

Question.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
};

Question.defaultProps = {
  id: 1,
  text: "Lorem ipsum",
};

export default Question;

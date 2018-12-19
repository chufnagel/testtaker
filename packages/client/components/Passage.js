import React, { memo } from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";

const Passage = memo(({ passage }) => (
  // <div className="spacer">
  <Container>
    {passage.map(entry => (
      <p className="passage" key={entry.line}>
        {`${entry.line}: ${entry.text}`}
      </p>
    ))}
  </Container>
  // </div>
));

Passage.propTypes = {
  passage: PropTypes.array,
};

Passage.defaultProps = {
  passage: [
    {
      line: "1",
      text: "Ergo iter inceptum peragunt fluvioque propinquant.",
    },
    {
      line: "2",
      text: "Navita quos iam inde ut Stygia prospexit ab unda",
    },
  ],
};

export default Passage;

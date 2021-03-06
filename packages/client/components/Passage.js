import PropTypes from "prop-types";

const Passage = ({ passage }) => (
  // <div className="spacer">
  <div className="passage-container">
    {passage.map(entry => (
      <p className="passage" key={entry.line}>
        {`${entry.line}: ${entry.text}`}
      </p>
    ))}
  </div>
  // </div>
);

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

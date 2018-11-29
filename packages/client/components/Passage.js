import PropTypes from "prop-types";

const Passage = ({ passage }) => (
  <div>
    {passage.map(entry => (
      <p className="passage" key={entry.line}>
        {`${entry.line}: ${entry.text}`};
      </p>
    ))}
  </div>
);

Passage.propTypes = {
  passage: PropTypes.array.isRequired,
};

export default Passage;

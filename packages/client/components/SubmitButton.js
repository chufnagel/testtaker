import Link from "next/link";
import PropTypes from "prop-types";

const SubmitButton = ({ path, query, action, text }) => (
  <div style={{ marginLeft: 130 }}>
    <Link href={{ pathname: path, query }}>
      <button onClick={action} type="button">
        {text}
      </button>
    </Link>
  </div>
);

SubmitButton.propTypes = {
  action: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  query: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default SubmitButton;

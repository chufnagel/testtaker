import Link from "next/link";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Button } from "semantic-ui-react";

const SubmitButton = memo(({ path, query, action, text }) => (
  <Button primary onClick={action} type="button">
    <Link href={{ pathname: path, query }}>{text}</Link>
  </Button>
));

SubmitButton.propTypes = {
  action: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  query: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default SubmitButton;

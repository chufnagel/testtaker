import PropTypes from "prop-types";
import React, { Component } from "react";

import Answer from "./Answer";
import Question from "./Question";

class QuestionContainer extends Component {
  // const { question } = this.props;
  renderAnswers() {
    const { question } = this.props;
    const { answers } = question.answers;
  }

  onSelect() {
    console.log("Selected");
  };

  render() {
    const { question } = this.props;
    const { answers } = question.answers;
    return (
      <div className="card">
        <Question id={question.id} text={question.text} />
        {question.answers.map(answer => (
          <Answer id={answer.choice} key={answer.choice} text={answer.content} />
        ))}
      </div>
    );
  }
}

export default QuestionContainer;

// onSelect={onSelect}

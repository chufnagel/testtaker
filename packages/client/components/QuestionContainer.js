import PropTypes from "prop-types";
import React, { Component } from "react";

import Answer from "./Answer";
import Question from "./Question";

class QuestionContainer extends Component {
  render() {
    const { question, handleSelect } = this.props;
    return (
      <div className="card">
        <Question id={question.id} text={question.text} />
        {question.answers.map(answer => (
          <Answer
            questionId={question.id}
            choice={answer.choice}
            key={answer.choice}
            text={answer.content}
            onSelect={handleSelect}
          />
        ))}
      </div>
    )
  }
}
// const QuestionContainer = ({ question, handleSelect }) => {
//   return (
//     <div className="card">
//       <Question id={question.id} text={question.text} />
//       {question.answers.map(answer => (
//         <Answer
//           questionId={question.id}
//           choice={answer.choice}
//           key={answer.choice}
//           text={answer.content}
//           onSelect={handleSelect}
//         />
//       ))}
//     </div>
//   );
// };

export default QuestionContainer;

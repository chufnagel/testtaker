import PropTypes from "prop-types";

import Answer from "./Answer";
import Question from "../Question";

const QuestionContainer = ({ question, handleSelect }) => (
  <div className="card">
    <Question id={question.id} text={question.text} />
    <form>
      {question.answers.map(answer => (
        <Answer
          questionId={question.id}
          choice={answer.choice}
          key={answer.choice}
          text={answer.content}
          onSelect={handleSelect}
          checked={answer.choice === question.userAnswer}
        />
      ))}
    </form>
  </div>
);

QuestionContainer.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.object),
  }),
  handleSelect: PropTypes.func.isRequired,
};

QuestionContainer.defaultProps = {
  question: {
    id: 1,
    text: "Lorem ipsum",
    answers: [{ a: "Lorem ipsum" }],
  },
};

export default QuestionContainer;

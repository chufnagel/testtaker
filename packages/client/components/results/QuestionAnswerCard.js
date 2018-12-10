import PropTypes from "prop-types";
import Question from "../Question";

// iterate through answers
// highlight correct answer with green text
// if correct !== userAnswer
// highlight incorrect answer with red text
const getClassName = (correct, choice, userAnswer) => {
  let className = "radio-row";
  if (correct === choice) {
    className = "radio-row correct";
  } else if (correct !== userAnswer && userAnswer === choice) {
    className = "radio-row incorrect";
  }
  return className;
};

const QuestionAnswerCard = ({ id, text, correct, userAnswer, answers }) => {
  return (
    <div className="answer-card card">
      <Question id={id} text={text} />
      {userAnswer === correct ? (
        <p className="correct">Great!</p>
      ) : (
        <p className="incorrect">
          You answered {userAnswer}, but the right answer was {correct}
        </p>
      )}
      {answers.map(answer => (
        <Answer
          questionId={answer.questionId}
          choice={answer.choice}
          key={answer.choice}
          text={answer.content}
          checked={correct === answer.choice}
          className={getClassName(correct, answer.choice, userAnswer)}
        />
      ))}
    </div>
  );
};

QuestionAnswerCard.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  correct: PropTypes.string,
  userAnswer: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.object),
};

QuestionAnswerCard.defaultProps = {
  id: 1,
  text: "Navita (line 2) refers to",
  correct: "A",
  userAnswer: "B",
  answers: [
    {
      choice: "A",
      content: "Evander",
    },
    {
      choice: "B",
      content: "Latinus",
    },
    {
      choice: "C",
      content: "Priam",
    },
    {
      choice: "D",
      content: "Juturna",
    },
  ],
};

const Answer = ({ questionId, choice, text, checked, correct, className }) => (
  <div
    className={className}
    key={`${questionId}${choice}`}
    aria-checked={checked}
    checked={checked}
    role="radio"
    tabIndex="0"
  >
    <input key={`${questionId}:${choice}`} name="answer" value={text} type="radio" />
    {`${choice} - `} {`${text}`}
    <br />
  </div>
);

export default QuestionAnswerCard;

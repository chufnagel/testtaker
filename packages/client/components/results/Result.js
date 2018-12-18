import React, { memo } from "react";
import PropTypes from "prop-types";

import Passage from "../Passage";
import ProgressBar from "../ProgressBar";
import QuestionAnswerCard from "./QuestionAnswerCard";

const Result = memo(
  ({ passage, questions, totalCorrect, totalQuestions, elapsedTime, totalTime }) => {
    const correct = (totalCorrect / totalQuestions) * 100;
    const elapsed = (elapsedTime / totalTime) * 100;
    let renderPassage;
    if (passage) {
      renderPassage = <Passage passage={passage} />;
    } else {
      renderPassage = <div />;
    }
    return (
      <div>
        <h1>Results</h1>
        <ProgressBar percentage={correct} />
        <p>
          {totalCorrect} out of {totalQuestions} correct
        </p>
        <ProgressBar percentage={elapsed} />
        <p>
          {elapsedTime} out of {totalTime} used
        </p>
        {renderPassage}
        {questions.map(question => (
          <QuestionAnswerCard key={question.id} {...question} />
        ))}
      </div>
    );
  },
);

Result.propTypes = {
  // questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  questions: PropTypes.arrayOf(PropTypes.object),
  // answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  // correctAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
  passage: PropTypes.arrayOf(PropTypes.object),
  totalCorrect: PropTypes.number,
  totalQuestions: PropTypes.number,
  elapsedTime: PropTypes.number,
  totalTime: PropTypes.number,
};

Result.defaultProps = {
  questions: [
    {
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
    },
  ],
  passage: [
    {
      line: "1",
      text: "Ergo iter inceptum peragunt fluvioque propinquant.",
    },
  ],
  totalCorrect: 15,
  totalQuestions: 20,
  elapsedTime: 15,
  totalTime: 15,
};

export default Result;

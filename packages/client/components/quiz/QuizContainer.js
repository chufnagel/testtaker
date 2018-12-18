import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Passage from "../Passage";
import QuestionContainer from "./QuestionContainer";

import Timer from "../Timer";
import SubmitButton from "../SubmitButton";

class QuizContainer extends PureComponent {
  state = {
    questions: [],
    answers: {},
    originalTime: "",
    minutes: "20",
    seconds: "00",
    subject: "Latin",
  };

  componentDidMount = () => {
    const { questions, passage, subject, minutes } = this.props;
    this.setState(() => ({
      questions,
      passage,
      subject,
      minutes,
      originalTime: minutes,
    }));
    this.startTest();
  };

  tick = () => {
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = this.secondsRemaining - min * 60;

    this.setState({
      minutes: min,
      seconds: sec,
    });

    if (sec < 10) {
      this.setState(prevState => ({
        seconds: `0${prevState.seconds}`,
      }));
    }
    if (min < 10) {
      this.setState(prevState => ({
        minutes: `0${prevState.minutes}`,
      }));
    }
    if (!min && !sec) {
      clearInterval(this.handleInterval);
      this.submitQuiz();
    }
    this.secondsRemaining -= 1;
  };

  startTest = () => {
    this.handleInterval = setInterval(this.tick, 1000);
    const time = this.state.minutes;
    this.secondsRemaining = time * 60;
  };

  handleSelect = (questionId, choice) => {
    const { questions } = this.state;
    // console.log(questions);
    const answered = questions[questionId - 1];
    // console.log(answered);
    answered.userAnswer = choice;
    console.log(answered);
    this.setState(() => ({
      questions,
    }));
    // console.log(questions);
    // questions[questionId + 1] = choice;
    // console.log(questions[questionId + 1]);
    // const answer = {};
    // answer[questionId].selected = choice;
    // this.setState(prevState => ({
    //   answers: Object.assign(prevState.answers, { answer }),
    // }));
    // this.setState(prevState => ({
    //   answers: Object.assign(prevState.answers, { answer }),
    //   questions,
    // }));
  };

  submitQuiz = () => {
    // add elapsed time to results later
    // const { questions, answers, originalTime } = this.state;
    console.log("Render results!");
    // return <Results answers={answers} />;
  };

  render() {
    const { minutes, seconds, passage, questions, answers, subject } = this.state;
    const { handleSelect, submitQuiz } = this;
    return (
      <div>
        <Timer minutes={minutes} seconds={seconds} />
        {passage ? <Passage passage={passage} /> : <div />}
        {/* <Passage passage={passage} /> */}
        <div className="cards">
          {questions.map(question => (
            <QuestionContainer key={question.id} handleSelect={handleSelect} question={question} />
          ))}
        </div>
        <SubmitButton
          path="/results"
          query={{ subject, questions, answers }}
          action={submitQuiz}
          text="Submit"
        />
      </div>
    );
  }
}

export default QuizContainer;

QuizContainer.propTypes = {
  passage: PropTypes.arrayOf(PropTypes.object),
  questions: PropTypes.arrayOf(PropTypes.object),
  subject: PropTypes.string,
  minutes: PropTypes.number,
};

QuizContainer.defaultProps = {
  subject: "Latin",
  passage: [
    {
      line: "1",
      text: "Ergo iter inceptum peragunt fluvioque propinquant.",
    },
  ],
  questions: [
    {
      id: 1,
      text: "Navita (line 2) refers to",
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
  minutes: 20,
};

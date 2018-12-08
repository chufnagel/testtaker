import React, { Component } from "react";
import Passage from "./Passage";
import QuestionContainer from "./QuestionContainer";

import Timer from "./Timer";
import TimerInput from "./TimerInput";
import StartButton from "./StartButton";
import Dropdown from "./Dropdown";
import QuizResults from "./QuizResults";

class Quiz extends Component {
  state = {
    questionCards: [],
    answers: [],
    currentQuestion: 1,
    minutes: "20",
    seconds: "00",
    subjects: ["Latin", "Trigonometry"],
    subject: "Latin",
    // testStarted: true,
    testStarted: false,
  };

  handleSettings = event => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  };

  tick = () => {
    const min = Math.floor(this.secondsRemaining / 60);
    // const min = this.minutes;
    const sec = this.secondsRemaining - min * 60;

    this.setState({
      minutes: min,
      seconds: sec,
    });

    if (sec < 10) {
      this.setState(prevState => ({
        // seconds: "0" + this.state.seconds,
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
      this.renderResults();
    }
    this.secondsRemaining -= 1;
  };

  startTest = () => {
    this.handleInterval = setInterval(this.tick, 1000);
    // this.handleInterval(this.tick);
    const time = this.state.minutes;
    this.secondsRemaining = time * 60;
    // retrieve corresponding subject from api
    // console.log(minutes);
    console.log(this.state.subject);
    this.setState(() => ({
      testStarted: true,
    }));
  };

  handleSelect = (questionId, choice ) => {
    // console.log(questionId);
    // console.log(choice);
    // console.log(this.state.answers);
    this.setState(prevState => ({
      answers: [...prevState.answers, { questionId, choice }],
      currentQuestion: prevState.currentQuestion + 1,
    }));
    // event.preventDefault();
  };

  handleBack() {
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion - 1,
    }));
  }

  renderStartPage = () => {
    const { minutes, seconds, subjects } = this.state;
    const { handleSettings, startTest } = this;
    return (
      <div>
        <Timer minutes={minutes} seconds={seconds} />
        <TimerInput action={handleSettings} minutes={minutes} />
        <Dropdown action={handleSettings} choices={subjects} name="subject" />
        <StartButton action={startTest} />
      </div>
    );
  };

  renderQuiz = () => {
    const { questions, passage } = this.props;
    const { minutes, seconds } = this.state;
    const { handleSelect } = this;
    return (
      <div>
        <Timer minutes={minutes} seconds={seconds} />
        <Passage passage={passage} />
        <div className="cards">
          {questions.map(question => (
            <QuestionContainer key={question.id} handleSelect={handleSelect} question={question} />
          ))}
        </div>
      </div>
    );
  };

  renderResults = () => {
    // add elapsed time to results later
    const { answers } = this.state;
    console.log("Render results!");
    return <QuizResults answers={answers} />;
  };

  render() {
    const { renderQuiz, renderQuizResults, renderStartPage } = this;
    const { passage, questions } = this.props;
    const { testStarted } = this.state;
    const totalQuestions = questions.length;
    const currentQuestionIndex = this.state.currentQuestion;
    const currentQuestion = questions[currentQuestionIndex - 1];
    // if (!testStarted) {

    // }
    // else if (testStarted && currentQuestionIndex > totalQuestions) {}
    // eslint-disable-next-line
    const rendered = !testStarted
      ? renderStartPage()
      : currentQuestionIndex > totalQuestions
      ? renderQuizResults()
      : renderQuiz(currentQuestionIndex, totalQuestions);
    const renderComponent =
      currentQuestionIndex > totalQuestions
        ? this.renderQuizResults()
        : this.renderQuiz(currentQuestionIndex, totalQuestions);
    return <div id="quiz">{rendered}</div>;
    // return <div id="quiz">{renderComponent}</div>;
  }
}

export default Quiz;

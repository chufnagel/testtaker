// import fetch from "isomorphic-unfetch";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import QuizContainer from "../components/quiz/QuizContainer";

import passage1 from "../static/passage.json";
import questions1 from "../static/questions.json";

const Quiz = ({ passage, questions, subject }) => (
  <Layout>
    <h1>{subject}</h1>
    <QuizContainer passage={passage} questions={questions} subject={subject} />
  </Layout>
);
Quiz.getInitialProps = async () => {
  const passage = passage1;
  const questions = questions1;
  const subject = "Latin";
  return {
    passage,
    questions,
    subject,
  };
};

Quiz.propTypes = {
  passage: PropTypes.arrayOf(PropTypes.object).isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  subject: PropTypes.string.isRequired,
};

export default Quiz;

// import fetch from "isomorphic-unfetch";
// import axios from "axios";

import Layout from "../components/Layout";
import Result from "../components/results/Result";

const questions = [
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
];

const Results = props => {
  return (
    <Layout>
      <Result {...props} />
    </Layout>
  );
};

Results.getInitialProps = async () => {
  const props = {};
  props.totalCorrect = 15;
  props.totalQuestions = 20;
  props.elapsedTime = 15;
  props.totalTime = 20;
  props.questions = questions;
  props.passage = [
    {
      line: "1",
      text: "Ergo iter inceptum peragunt fluvioque propinquant.",
    },
  ];
  return props;
};

// Results.getInitialProps = async () => {
//   const response = await axios({
//     method: "get",
//     url: url +
//   })
// }

export default Results;

import Layout from "../components/Layout";
import Quiz from "../components/Quiz";

import passage from "../static/passage.json";
import questions from "../static/questions.json";

const Index = () => (
  <Layout>
    <Quiz passage={passage} questions={questions} />
  </Layout>
);

export default Index;

import fetch from "isomorphic-unfetch";
import Link from "next/link";

import Layout from "../components/Layout";
import Start from "../components/start/Start";

import passage1 from "../static/passage.json";
import questions1 from "../static/questions.json";
import subjects1 from "../static/subjects.json";

const Index = props => {
  // const { subjects } = props;
  return (
    <Layout>
      <Start />
      {/* <Start subjects={subjects} /> */}
    </Layout>
  );
};

export default Index;

Index.getInitialProps = async () => {
  const subjects = subjects1;
  return {
    subjects,
  };
};

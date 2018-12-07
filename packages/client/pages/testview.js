import React, { Component } from "react";
import Layout from "../components/Layout";
// import passage from "../static/passage.json";
import "isomorphic-unfetch";
// import questions from "../static/questions.json";

// const Test = (props) = (
//   <Layout>
//     <h1>`({this.props.passage.passageId})`</h1>
//   </Layout>
// )

// export default class Test extends Component {
//   static async getInitialProps () {
    // const res = await fetch("")
    // const json = await res.json();
    // return { passage: json.passage };
//   }

//   render() {
//     const { passage } = this.props;
//     return (
//       <Layout>
//         <p>{passage}</p>
//       </Layout>
//     );
//   }
// }

const Test = props => {
  const data = import("../static/passage.json");
  return (
    <Layout>
      {Object.keys(data).map(key => (
        <Line key={key} text={data.key} />
      ))}
    </Layout>
  );
};

// Test.getInitialProps = async ({ req }) => {
  // const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
  // const res = await fetch(baseUrl + "/static/passage.json");
//   const json = await res.json();
//   const passage = json.passage;
//   console.log(passage);
//   return { passage: passage };
// };

export default Test;

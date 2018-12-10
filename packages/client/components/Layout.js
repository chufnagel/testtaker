import Meta from "./Meta";
import Header from "./Header";

const Layout = props => (
  <div>
    <Meta />
    <style jsx global>{`
      body {
        background: DarkBlue;
        color: white;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
      }
      a {
        color: white;
        text-decoration: none;
        padding: 1em;
      }
      .passage-container {
        clear: both;
        top: 0;
        position: sticky;
      }
      .passage {
        text-align: left;
        display: flex;
      }
      .spacer {
        width: 100%;
        height: 95px;
      }
      .header {
        display: block;
        margin: 0em;
        padding: 1em;
        border-style: solid;
        border-color: black;
        font-size: 1.5em;
        border-width: 0.2em;
      }
      .timer {
        display: flex;
        flex-flow: row reverse;
        margin-left: auto;
        justify-content: flex-end;
        font-weight: bold;
        font-size: large;
        text-align: right;
        border: 2px solid black;
        border-style: double;
      }
      .nav {
      }
      .cards {
        position: relative;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
      }
      .card {
        background: grey;
        border: 2px solid black;
        box-sizing: border-box;
        border-radius: 6px;
        box-padding: 1.25rem;
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin: 5px;
        height: 100%;
      }
      .radio-row {
        text-align: left;
        align-items: center;
        justify-content: center;
      }
      .question {
      }
      radio {
      }
      .progress-bar {
        position: relative;
        height: 20px;
        width: 350px;
        border-radius: 50px;
        border: 1px solid #333;
      }
      .progress {
        background: #1da598;
        height: 100%;
        border-radius: inherit;
        transition: width 0.2s ease-in;
      }
      .correct {
        color: green;
      }
      .incorrect {
        color: red;
      }
    `}</style>
    <Header />
    {props.children}
  </div>
);

export default Layout;

// flex: 1 0 21%;
// .cards {
//   position: relative;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
// }
// .card {
//   box-sizing: border-box;
//   padding: 20px;
//   flex: 1;
//   margin: 5px;
//   height: 100px;
// }

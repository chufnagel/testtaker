/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import QuizContainer from "./QuizContainer";

// QuizContainer.propTypes = {
//   action: PropTypes.func.isRequired,
//   path: PropTypes.string.isRequired,
//   query: PropTypes.string.isRequired,
// };

const props = {};
props.passage = [
  {
    line: "1",
    text: "Ergo iter inceptum peragunt fluvioque propinquant.",
  },
];
props.questions = [
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
];
props.subject = "Test";
// const mockFn = jest.fn();
// const mapSubject = "Test";

describe("QuizContainer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<QuizContainer {...props} />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("QuizContainer matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

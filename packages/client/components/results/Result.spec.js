/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import Result from "./Result";

// Result.propTypes = {
//   questions: PropTypes.arrayOf(PropTypes.object).isRequired,
//   answers: PropTypes.arrayOf(PropTypes.object).isRequired,
//   correctAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
//   totalCorrect: PropTypes.number,
//   totalQuestions: PropTypes.number,
//   elapsedTime: PropTypes.number,
//   totalTime: PropTypes.number,
// };

describe("Result", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Result />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("Result matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import QuestionAnswerCard from "./QuestionAnswerCard";

// QuestionAnswerCard.propTypes = {
//   id: PropTypes.number,
//   text: PropTypes.string,
//   correct: PropTypes.string,
//   userAnswer: PropTypes.string,
//   answers: PropTypes.arrayOf(PropTypes.object),
// };

describe("QuestionAnswerCard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<QuestionAnswerCard />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("QuestionAnswerCard matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

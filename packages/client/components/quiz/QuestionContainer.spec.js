/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import QuestionContainer from "./QuestionContainer";

// QuestionContainer.propTypes = {
//   question: PropTypes.shape({
//     id: PropTypes.string,
//     text: PropTypes.string,
//     answers: PropTypes.arrayOf(PropTypes.obj),
//   }),
//   handleSelect: PropTypes.func.isRequired,
// };

const mockFn = jest.fn();

describe("QuestionContainer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<QuestionContainer handleSelect={mockFn} />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("QuestionContainer matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

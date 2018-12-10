/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import Answer from "./Answer";

// Answer.propTypes = {
//   questionId: PropTypes.string,
//   choice: PropTypes.string,
//   text: PropTypes.string,
//   onSelect: PropTypes.func.isRequired,
//   checked: PropTypes.bool,
// };

// Answer.defaultProps = {
//   questionId: 1,
//   choice: "A",
//   text: "Lorem ipsum",
//   checked: false,
// };

const mockFn = jest.fn();

describe("Answer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Answer onSelect={mockFn} />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("Answer matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

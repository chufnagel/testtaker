/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import SubmitButton from "./SubmitButton";

// SubmitButton.propTypes = {
//   action: PropTypes.func.isRequired,
//   path: PropTypes.string.isRequired,
//   query: PropTypes.string.isRequired,
// };

const mockFn = jest.fn();

describe("SubmitButton", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SubmitButton action={mockFn} text="Submit" path="/" query={{}} />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("SubmitButton matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

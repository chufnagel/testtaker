/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import TimerInput from "./TimerInput";

// TimerInput.propTypes = {
//   action: PropTypes.func.isRequired,
//   path: PropTypes.string.isRequired,
//   query: PropTypes.string.isRequired,
// };

const mockFn = jest.fn();

describe("TimerInput", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TimerInput action={mockFn} />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("TimerInput matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

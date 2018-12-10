/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";

// Dropdown.propTypes = {
//   action: PropTypes.func.isRequired,
//   choices: PropTypes.arrayOf(PropTypes.string),
//   name: PropTypes.string,
// };

// Dropdown.defaultProps = {
//   choices: ["Latin"],
//   name: "Lorem Ipsum",
// };

const mockFn = jest.fn();

describe("Dropdown", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Dropdown action={mockFn} />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("Dropdown matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

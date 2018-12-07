/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import Timer from "./Timer";

// Timer.defaultProps = {
//   time: 60,
// };

describe("Timer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Timer />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("Timer matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

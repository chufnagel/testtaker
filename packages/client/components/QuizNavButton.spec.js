/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import QuizNavButton from "./QuizNavButton";

// QuizNavButton.defaultProps = {
//   disabled: true,
//   direction: "Next",
// };

describe("QuizNavButton", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<QuizNavButton />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("QuizNavButton matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

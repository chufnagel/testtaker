/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import Question from "./Question";

// Question.defaultProps = {
//   id: 1,
//   text: "Lorem ipsum",
// };

describe("Question", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Question />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("Question matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

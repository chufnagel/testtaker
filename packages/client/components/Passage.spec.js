/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import Passage from "./Passage";

// Passage.defaultProps = {
//   passage: [
//     {
//       line: "1",
//       text: "Ergo iter inceptum peragunt fluvioque propinquant.",
//     },
//     {
//       line: "2",
//       text: "Navita quos iam inde ut Stygia prospexit ab unda",
//     },
//   ],
// };

describe("Passage", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Passage />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("Passage matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

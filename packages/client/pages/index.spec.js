/* global beforeEach describe, expect, test */
import { shallow } from "enzyme";
import Index from "./index";

describe("Index", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Index />);
  });
  test("It should render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("Index matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

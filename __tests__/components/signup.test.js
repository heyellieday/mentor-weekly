import React from "react";
import { shallow } from "enzyme";
import Signup from "../../components/signup";

describe("<Signup />", () => {
  it("Renders without crashing", () => {
    shallow(<Signup />);
  });
});

import React from "react";
import { shallow } from "enzyme";

import Login from "../../components/login";

describe("<Login />", () => {
  it("Renders without crashing", () => {
    shallow(<Login />);
  });
});

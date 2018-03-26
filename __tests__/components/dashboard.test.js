import React from "react";
import { shallow } from "enzyme";

import Dashboard from "../../components/dashboard";

describe("<Dashboard />", () => {
  it("Renders without crashing", () => {
    shallow(<Dashboard />);
  });
});

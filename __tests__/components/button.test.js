import React from "react";
import { shallow } from "enzyme";

import Button from "../../components/button";

describe("<Button />", () => {
  it("Renders without crashing", () => {
    shallow(<Button />);
  });
});

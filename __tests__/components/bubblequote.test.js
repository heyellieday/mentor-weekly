import React from "react";
import { shallow } from "enzyme";

import Bubblequote from "../../components/bubblequote";

describe("<Bubblequote />", () => {
  it("Renders without crashing", () => {
    shallow(<Bubblequote />);
  });
});

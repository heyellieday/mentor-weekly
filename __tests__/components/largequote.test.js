import React from "react";
import { shallow } from "enzyme";

import Largequote from "../../components/largequote";

describe("<Largequote />", () => {
  it("Renders without crashing", () => {
    shallow(<Largequote />);
  });
});

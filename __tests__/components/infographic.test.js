import React from "react";
import { shallow } from "enzyme";

import Infographic from "../../components/infographic";

describe("<Infographic />", () => {
  it("Renders without crashing", () => {
    shallow(<Infographic />);
  });
});

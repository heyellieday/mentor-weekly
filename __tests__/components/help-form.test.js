import React from "react";
import { shallow } from "enzyme";

import Helpform from "../../components/help-form";

describe("<Helpform />", () => {
  it("Renders without crashing", () => {
    shallow(<Helpform />);
  });
});

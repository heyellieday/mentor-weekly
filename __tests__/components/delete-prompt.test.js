import React from "react";
import { shallow } from "enzyme";

import DeletePrompt from "../../components/delete-prompt";

describe("<DeletePrompt />", () => {
  it("Renders without crashing", () => {
    shallow(<DeletePrompt />);
  });
});

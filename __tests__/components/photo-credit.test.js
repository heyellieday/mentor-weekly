import React from "react";
import { shallow } from "enzyme";

import PhotoCredit from "../../components/photo-credit";

describe("<PhotoCredit />", () => {
  it("Renders without crashing", () => {
    shallow(<PhotoCredit />);
  });
});

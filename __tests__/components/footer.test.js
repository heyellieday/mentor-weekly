import React from "react";
import { shallow } from "enzyme";

import Footer from "../../components/footer";

describe("<Footer />", () => {
  it("Renders without crashing", () => {
    shallow(<Footer />);
  });
});

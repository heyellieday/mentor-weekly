import React from "react";
import { shallow } from "enzyme";

import MenteeForm from "../../components/mentee-form";

describe("<MenteeForm />", () => {
  it("Renders without crashing", () => {
    shallow(<MenteeForm />);
  });
});

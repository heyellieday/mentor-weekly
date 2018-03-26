import React from "react";
import { shallow } from "enzyme";

import MentorForm from "../../components/mentor-form";

describe("<MentorForm />", () => {
  it("Renders without crashing", () => {
    shallow(<MentorForm />);
  });
});

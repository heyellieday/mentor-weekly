import React from "react";
import { shallow } from "enzyme";

import UpdateProfileModal from "../../components/update-profile-modal";

describe("<UpdateProfileModal />", () => {
  it("Renders without crashing", () => {
    shallow(<UpdateProfileModal />);
  });
});

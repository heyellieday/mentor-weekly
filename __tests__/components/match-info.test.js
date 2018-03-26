import React from "react";
import { shallow } from "enzyme";
import { user } from "../../dummy-user";

import MatchInfo from "../../components/match-info";

describe("<MatchInfo />", () => {
  it("Renders without crashing", () => {
    shallow(<MatchInfo user={user} />);
  });
});

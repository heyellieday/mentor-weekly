import React from "react";
import { shallow } from "enzyme";
import { user } from "../../dummy-user";
import Sidebar from "../../components/sidebar";

describe("<Sidebar />", () => {
  it("Renders without crashing", () => {
    shallow(<Sidebar user={user} />);
  });
});

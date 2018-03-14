import React from "react";
import { shallow } from "enzyme";
import ButtonLink from "../../components/button-link";

const link = "http://volcanocurry.blogspot.com/";

describe("<ButtonLink />", () => {
  it("Renders without crashing", () => {
    shallow(<ButtonLink linkTo={link} />);
  });
});

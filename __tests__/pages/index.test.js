/* eslint-env jest */

import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../../pages/index.js";

describe("With Enzyme", () => {
  it("Renders without crashing", () => {
    shallow(<App />);
  });
  it('App shows "mentor weekly"', () => {
    const app = shallow(<App />);
    expect(app.find("h1").text()).toEqual("mentor weekly");
  });
});

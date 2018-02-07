/* eslint-env jest */

import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../../pages/index.js";

describe("With Enzyme", () => {
  it("Renders without crashing", () => {
    shallow(<App />);
  });
  it('App shows "Mentor Weekly"', () => {
    const app = shallow(<App />);

    expect(app.find("h1")).toEqual("Mentor Weekly");
  });
});

// describe("With Snapshot Testing", () => {
//   it('App shows "Hello world!"', () => {
//     const component = renderer.create(<App />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

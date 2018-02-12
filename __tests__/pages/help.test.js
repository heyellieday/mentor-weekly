/* eslint-env jest */

import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Help from "../../pages/help.js";
const authResult = { accessToken: 3, idToken: 4, expiresIn: "" + new Date() };
let expiresAt = JSON.stringify(
  authResult.expiresIn * 1000 + new Date().getTime()
);

beforeEach(() => {
  // values stored in tests will also be available in other tests unless you run
  localStorage.clear();
  // or directly reset the storage
  //localStorage.__STORE__ = {};
  // you could also reset all mocks, but this could impact your other mocks
  jest.resetAllMocks();
  // or individually reset a mock used
  //localStorage.setItem.mockClear();
  localStorage.setItem("expires_at", authResult.expiresIn);
  localStorage.setItem("access_token", authResult.accessToken);
  localStorage.setItem("id_token", authResult.idToken);
});

describe("With Enzyme", () => {
  it("Renders without crashing", () => {
    shallow(<Help />);
  });
  it('App shows "mentor weekly"', () => {
    const app = shallow(<Help />);

    expect(app.find("h1").text()).toEqual("get some help");
  });
});

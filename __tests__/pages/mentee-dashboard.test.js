/* eslint-env jest */
import { shallow, mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import MenteeDashboard from "../../pages/mentee-dashboard.js";
import { user } from "../../dummy-user";
import Auth from "../../services/auth";
const auth = new Auth();

beforeEach(() => {
  // values stored in tests will also be available in
  //other tests unless you run localstorage.clear
  localStorage.clear();
  auth.login;
  auth.auth0.authorize({ nonce: "1234", responseType: "token id_token" });
  auth.handleAuthentication();
});

describe("<MenteeDashboard />", () => {
  it("Renders without crashing", () => {
    shallow(<MenteeDashboard />);
  });

});

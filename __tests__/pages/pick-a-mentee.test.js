/* eslint-env jest */
import { shallow, mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import PickAMentee from "../../pages/pick-a-mentee.js";
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

describe("<PickAMentee />", () => {
  it("Renders without crashing", () => {
    shallow(<PickAMentee />);
  });
  // it("Help page contains dashboard component", () => {
  //   const wrapper = shallow(<Help />);
  //   console.log(wrapper);
  //   expect(wrapper.text()).toEqual("<Dashboard />");
  // });
  // it('Help page shows title "get some help"', () => {
  //   const wrapper = mount(<Help />);
  //   console.log(wrapper);
  //   expect(wrapper.contains("get some help")).toEqual(true);
  //   expect(
  //     wrapper.contains(
  //       "Use this form to get in contact with someone at Mentor Weekly. We are happy to help!"
  //     )
  //   ).toEqual(true);
  //   expect(wrapper.contains("please describe your issue here:")).toEqual(true);
  // });
});

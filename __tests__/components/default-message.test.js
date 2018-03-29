import React from "react";
import { shallow } from "enzyme";

import DefaultMessage from "../../components/default-message";

describe("<DefaultMessage />", () => {
  it("Renders without crashing", () => {
    shallow(<DefaultMessage />);
  });

  it("Renders the text", () => {
    const text = "Welcome to Mentor Weekly";
    const message =
      "Update your profile by clicking the \'update profile\' button.When you are ready, go to your \"pick a mentee\" page to check out available candidates.";
    const wrapper = shallow(<DefaultMessage role="mentor" />);
    expect(wrapper.find("h2").text()).toEqual(text);
    expect(wrapper.find("p").text()).toEqual(message);
  });

  it("Renders the text", () => {
    const text = "Welcome to Mentor Weekly";
    const message =
      "You will receive an email at the address you provide once we find you the perfect mentor.Feel free to update your profile info anytime by clicking the 'update profile' button.";
    const wrapper = shallow(<DefaultMessage role="mentee" />);
    expect(wrapper.find("h2").text()).toEqual(text);
    expect(wrapper.find("p").text()).toEqual(message);
  });

  it("Renders the text", () => {
    const text = "Welcome to Mentor Weekly";
    const message =
      "Be sure to use the signup form on our main page to choose your role as a mentor or mentee.  You will be sent a verification email. Click the \'verify\' button in your email to access your profile.";
    const wrapper = shallow(<DefaultMessage role="" />);
    expect(wrapper.find("h2").text()).toEqual(text);
    expect(wrapper.find("p").text()).toEqual(message);
  });
});

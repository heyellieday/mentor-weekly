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
      "Go to your \"pick a mentee\" page to check out available candidates.";
    const wrapper = shallow(<DefaultMessage role="mentor" />);
    expect(wrapper.find("h2").text()).toEqual(text);
    expect(wrapper.find("p").text()).toEqual(message);
  });

  it("Renders the text", () => {
    const text = "Welcome to Mentor Weekly";
    const message =
      "You will receive an email at the address you provided once we find you the perfect mentor.";
    const wrapper = shallow(<DefaultMessage role="mentee" />);
    expect(wrapper.find("h2").text()).toEqual(text);
    expect(wrapper.find("p").text()).toEqual(message);
  });
});

import React from "react";
import { shallow, mount } from "enzyme";
import Button from "../../components/button";
import Helpform from "../../components/help-form";

describe("<Helpform />", () => {
  it("Renders without crashing", () => {
    shallow(<Helpform />);
  });
  it("Renders the correct button text", () => {
    const callback = jest.fn();
    const wrapper = mount(<Helpform />);
    expect(wrapper.find("button").text()).toEqual("send message");
  });
});

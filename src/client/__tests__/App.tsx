import { shallow } from "enzyme";
import * as React from "react";
import App from "../components/App";

describe("Client side tests", () => {
  test("Renders the <App /> shallowly", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toHaveLength(1);
  })
});
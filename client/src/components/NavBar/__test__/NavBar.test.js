import React from "react";
import { render } from "react-dom";
import NavBar from "./../NavBar";

it("should render without break", () => {
  const div = document.createElement("div");

  render(<NavBar />, div);
});

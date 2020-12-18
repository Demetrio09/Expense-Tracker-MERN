import React from "react";
import { render } from "react-dom";
import "@testing-library/react";
import "@babel/plugin-transform-react-jsx";
import Header from "../components/Header";

test("render the correct content", () => {
  // Render a React component to the DOM
  const root = document.createElement("div");

  render(<Header />, root);

  // Use DOM APIs (querySelector) to make assertions.
  // expect(root.querySelector("h1").textContent).toBe("0");
});

// Testing if <Header /> renders without break
it("renders without break"),
  () => {
    const div = document.createElement("div");

    render(<Header />, div);
  };

// const expected = true;
// const actual = false;

// test("it works", () => {
//   expect(actual).toBe(actual);
// });

import React from "react";
import { render } from "react-dom";
import MyComponent from "../App";

test("render the correct content", () => {
  // Render a React component to the DOM
  const root = document.createElement("div");

  render(<MyComponent />, root);

  // Use DOM APIs (querySelector) to make assertions.
  expect(root.querySelector("h1").textContent).toBe("0");
});

// const expected = true;
// const actual = false;

// test("it works", () => {
//   expect(actual).toBe(actual);
// });

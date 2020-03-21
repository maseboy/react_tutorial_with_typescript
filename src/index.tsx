import * as React from "react";
// ReactDOM : https://ja.reactjs.org/docs/react-dom.html
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

// ReactDOMのrender: ReactDOM.render(element, container[, callback])
ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);

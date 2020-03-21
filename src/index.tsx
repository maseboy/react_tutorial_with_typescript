import * as React from "react";
// NOTE: ReactDOM : https://ja.reactjs.org/docs/react-dom.html
import * as ReactDOM from "react-dom";
// import { Hello } from "./components/Hello";
import { Game } from "./components/Game";

import './css/index.css';

// NOTE: ReactDOMのrender: ReactDOM.render(element, container[, callback])

// NOTE: TypeScriptのtutorial用
// ReactDOM.render(
//   <Hello compiler="TypeScript" framework="React" />,
//   document.getElementById("example")
// );

ReactDOM.render(
  <Game />,
  document.getElementById("root")
);

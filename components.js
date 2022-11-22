//import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { add, sub, multi, divi } from "./cal.js";

import App from "./co/App";

ReactDOM.render(
  <div>
  <App />,
  <div>
    <h1>the calculator app</h1>
  <ol>
   <li>{add(2,3)}</li>
  <li>{sub(2,3)}</li>
   <li>{multi(7,2)}</li>
   <li>{divi(5,2)}</li>
  </ol>
  </div>
  </div>,
  document.getElementById("root")
);

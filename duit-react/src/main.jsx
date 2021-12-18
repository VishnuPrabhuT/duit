import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as registerSW from "./registerSW.js";

import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("duit-app")
);

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import "./styles.css";

var mountNode = document.getElementById("app");
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}></Route>
        </Routes>
    </BrowserRouter>,
    mountNode
);

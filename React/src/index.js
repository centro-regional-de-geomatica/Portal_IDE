import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./views/Home.js";

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={Home} />
    <Redirect from='*' to='/' />
  </BrowserRouter>,
  document.getElementById("root")
);

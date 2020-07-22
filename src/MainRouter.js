import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Menu from "./core/Menu";
import Footer from "./core/Footer";
export default function MainRouter() {
  return (
    <div>
    <Menu/>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

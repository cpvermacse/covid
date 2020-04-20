import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import DeepDive from "./components/deep-dive/DeepDive";
import DemoGraphics from "./components/demographics/DemoGraphics";
import StateDisplay from "./components/state/StateDisplay";
import store from "./store";
import { Provider } from "react-redux";
import Navbar from "./components/common/header/Navbar";
import SideDrawer from "./components/common/header/SideDrawer";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App" style={{ height: "100%" }}>
          <Navbar />
          <SideDrawer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/deep-dive" component={DeepDive} />
            <Route exact path="/demographics" component={DemoGraphics} />
            <Route exact path="/state/:stateCode" component={StateDisplay} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

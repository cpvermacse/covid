import React, { Component } from "react";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import { connect } from "react-redux";
export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-left">
          <HomeLeft />
        </div>
        {/* <div className="home-right">
          <HomeRight />
        </div> */}
      </div>
    );
  }
}

export default Home;

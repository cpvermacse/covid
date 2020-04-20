import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { fetchStateData } from "../../actions/HomeActions";
import { connect } from "react-redux";
import { STATE_CODES } from "../../constants";
import Level from "../level/Level";
import StateTitleDisplay from "../statetitledisplay/StateTitleDisplay";
import TopDistrict from "../topdistricts/TopDistrict";
function StateDisplay(props) {
  useEffect(() => props.fetchStateData(), []);
  const state_wise_Data = props.state_wise_Data.data.state_wise_Data.data;
  const stateCode = props.match.params.stateCode;
  const stateName = STATE_CODES[stateCode];
  const totalData = props.state_wise_Data.data.data;
  var result = Object.values(totalData).filter((obj) => {
    return obj.state == stateName;
  });
  const topdata = Object.values(totalData);
  console.log("edc", state_wise_Data);
  var top_district;
  if (state_wise_Data != undefined) {
    var top_district = Object.keys(state_wise_Data[stateName]["districtData"])
      .sort(
        (a, b) =>
          state_wise_Data[stateName]["districtData"][b].confirmed -
          state_wise_Data[stateName]["districtData"][a].confirmed
      )
      .slice(0, 6);
    // console.log("yo data is coming", top_district);
  }
  console.log("yo data is coming", top_district);

  // const data = () => {
  //   console.log(state_wise_Data[stateName].districtData);

  //   return JSON.stringify(state_wise_Data[stateName].districtData);
  // };
  return (
    <div className="home">
      <div className="home-left">
        <StateTitleDisplay state={stateName} />
        <Level dataStatus={result[0]} />
        <TopDistrict stateName={stateName} top_district={top_district} />
      </div>
      <div className="home-right"></div>
    </div>
  );
}
{
  /* {state_wise_Data != undefined ? data() : " "} */
}

const mapStateToProps = (state) => ({
  state_wise_Data: state,
});

export default connect(mapStateToProps, { fetchStateData })(StateDisplay);

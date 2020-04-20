// import React from "react";
import React, { useEffect, useRef, useState } from "react";

import { fetchData, fetchStateData } from "../../actions/HomeActions";
import { connect } from "react-redux";

function StateTitleDisplay(props) {
  useEffect(() => props.fetchData(), []);
  const { data } = props;
  const state = props.state;
  const state_name = props.state;
  console.log("state", props);
  console.log("90000", typeof data.state_data);
  var result = data.state_data.filter((obj) => {
    return obj.state == state_name;
  });
  let update_data;

  if (result[0] != undefined) {
    console.log(result[0]["lastupdatedtime"]);
    update_data = String(result[0]["lastupdatedtime"]).split(" ");
  }
  return (
    <div className="header">
      <div className="state-titles">
        <h2>{state}</h2>
      </div>
      {result[0] != undefined ? (
        <div className="last-update">
          <h6 style={{ color: "#28a745", fontWeight: 600 }}>Last Updated</h6>
          <h6 style={{ color: "#28a745", fontWeight: 600 }}>
            {update_data[0]}
          </h6>
          <h6 style={{ color: "#28a745", fontWeight: 600 }}>
            {update_data[1]}
          </h6>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}

// export default StateTitleDisplay;
const mapStateToProps = (state) => ({
  data: state.data,
  state_wise_Data: state.data,
});

export default connect(mapStateToProps, { fetchData, fetchStateData })(
  StateTitleDisplay
);

// var result = jsObjects.filter(obj => {
//   return obj.b === 6
// })

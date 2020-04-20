import React from "react";
// import connect from "./redux";
import { connect } from "react-redux";
import BarChart from "../graphs/bargraph/BarGraph";
function TopDistrict(props) {
  const state_wise_Data = props;
  const filtered_state_data =
    state_wise_Data.state_wise_Data.data.state_wise_Data.data;
  const stateName = props.stateName;
  const top_district = props.top_district;
  console.log(props.top_district, "top6");
  var top_6;
  if (filtered_state_data != undefined) {
    var top_6 = filtered_state_data[stateName]["districtData"];
  }

  //   this.state.data.map(function(item, i){
  //     console.log('test');
  //     return <li key={i}>Test</li>
  //   })

  const top_district_data = () => {
    return top_district.map(
      (keyName, i) => {
        return (
          <div className="top_dist" key={i}>
            <h4 className="top_dist_name">{keyName}</h4>
            <h4 className="top_dist_count">{top_6[keyName]["confirmed"]}</h4>
            {/* <span className="">{top_6[keyName]["deltaconfirmed"]}</span> */}
          </div>
        );
      }
      //   console.log(top_6[keyName]["confirmed"], keyName)
    );
  };

  return (
    <div>
      <div className="topdistrict">
        <div className="districtname">
          <h4>TOP DISTRICT</h4>
          <div>{top_district != undefined ? top_district_data() : " "}</div>
        </div>
        {/* <div className="districtgraph">
          <BarChart />
        </div> */}
      </div>
    </div>
  );
}

// export default TopDistrict;
const mapStateToProps = (state) => ({
  state_wise_Data: state,
});

export default connect(mapStateToProps, {})(TopDistrict);

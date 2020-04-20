import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/HomeActions";

function TitleDisplay(props) {
  const { data } = props;
  const update_data = String(data.data[0].lastupdatedtime).split(" ");
  return (
    <div className="header">
      <div className="titles">
        <h1>COVID-19 Tracker</h1>
      </div>
      <div className="last-update">
        <h6 style={{ color: "#28a745", fontWeight: 600 }}>Last Updated</h6>
        <h6 style={{ color: "#28a745", fontWeight: 600 }}>{update_data[0]}</h6>
        <h6 style={{ color: "#28a745", fontWeight: 600 }}>{update_data[1]}</h6>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { fetchData })(TitleDisplay);
